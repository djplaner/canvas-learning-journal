// Copyright (C) 2024 David Jones
// 
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
// 
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
// 
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

/**
 * @file CanvasApiData.ts
 * @description Define a Javascript class for retrieving information from the Canvas API about a course and providing a reactive global singleton for use by multiple components
 */

import { reactive } from "vue"
import { GLOBAL_DEBUG } from "./tooltips"
//import { groupPromptsResponses } from "./groupPromptsResponses"

const DEBUG: boolean = true
const FILE_NAME: string = "CanvasApiData.ts"

export const CSRFtoken = function () {
  return decodeURIComponent(
    (document.cookie.match('(^|;) *_csrf_token=([^;]*)') || '')[2]
  )
}

const GRAPHQL_QUERY: string = `
query cljBaseQuery {
    course(id: $courseId) {
      _id
      name
      courseCode
      createdAt
      groupSetsConnection {
        nodes {
          id
          _id
          name
          memberLimit
          selfSignup
          groupsConnection {
            nodes {
              _id
              name
              updatedAt
              membersCount
              canMessage
              createdAt
              membersConnection {
                nodes {
                  _id
                  createdAt
                  user {
                    _id
                  }
                }
              }
            }
          }
        }
      }
      assignments: assignmentsConnection {
        nodes {
          _id
          assignmentGroup {
            _id
            name
          }
          assignmentGroupId
          courseId
          gradingType
          htmlUrl
          name
          published
          submissionTypes
          discussion {
            _id
            contextName
            title
            message
          }
        }
      }
      students: usersConnection(filter: {enrollmentTypes: StudentEnrollment}) {
        nodes {
          _id
          name
          email
          htmlUrl(courseId: $courseId)
        }
      }
      teachers: usersConnection(filter: {enrollmentTypes: TeacherEnrollment}) {
        nodes {
          _id
          name
          email
          htmlUrl(courseId: $courseId)
        }
      }
    }
  }`


let instance: any;

export class learningJournalStatus {
  public privateJournal: boolean = false; // all groups have one student member and self-signup is disabled
  public completedConfig: boolean = false; // groupsCreated && promptsCreated ?? required
  public promptsCreated: boolean = false; // there are prompts (discussion topics)
  public groupsCreated: boolean = false; // there are groups
  public selfSignUp: boolean = false; // self-signup is enabled
  public studentsWithoutGroup: boolean = false; // there are students without a group

  /**
   * @constructor
   * @param groupSet object from canvasApiData.groupSets
   * @description Set the public properties of the learningJournalStatus object based
   * on the group set information
   */
  constructor(groupSet: any) {

    if (DEBUG && GLOBAL_DEBUG) {
      console.log("------------------ learningJournalStatus constructor")
    }

    if (groupSet.hasOwnProperty("numGroups")) {

      this.groupsCreated = groupSet.numGroups > 0
      this.promptsCreated = groupSet.numPrompts > 0
      this.completedConfig = this.groupsCreated && this.promptsCreated
      this.selfSignUp = groupSet.selfSignup === "enabled"
      this.studentsWithoutGroup = groupSet.numStudentsMembersOfGroups < groupSet.numStudents
      this.privateJournal = (groupSet.numNonPrivateGroups === 0) && this.completedConfig
      // @todo multistudent groups
      this.multiStudentGroups = groupSet.numNonPrivateGroups > 0 || this.selfSignUp
    }
  }
}

class canvasApiData {
  public id: number;  // Canvas course id
  public name: string; // Canvas course name
  public hostName: string = ''; // The hostname of the Canvas instance
  public updated: number = 0;

  public courseCode: string = ''; // The course code
  public createdAt: string = ''; // The creation date of the course
  public groupSets: Object[] = []; // array of group sets in the course
  public groupSetsById: any = {}; // object of group sets by id

  public students: Object[] = []; // array of students in the course
  public teachers: Object[] = []; // array of teachers in the course
  public studentsById: any = {}; // object of students by id
  public teachersById: any = {}; // object of teachers by id
  public discussionTopics: any = {}
  public learningJournalStatus: learningJournalStatus = new learningJournalStatus({})

  /**
   * @constructor
   * @description Create a new CanvasCourse object, optional courseId
   */
  constructor() {

    if (instance) {
      throw new Error("canvasApiData: Cannot create a new instance of a singleton");
    }
    this.hostName = ''
    this.id = -1
    this.name = ''
    this.groupSets = []
    this.updated = 0

    instance = this
  }

  /**
   * @function parseCurrentURL 
   * @description Get the course ID and hostname from the current URL.
   * @returns {object} An object containing the course ID and hostname.
   */
  parseCurrentURL() {
    const documentUrl = new URL(document.URL);
    this.hostName = documentUrl.origin;

    const courseIdRegex = /\/courses\/(\d+)\//;
    const courseIdMatch = documentUrl.pathname.match(courseIdRegex);
    if (courseIdMatch) {
      this.id = parseInt(courseIdMatch[1], 10);
    }
  }

  /**
   * @function retrieveGraphQLObject
   * @description Perform a GraphQL query on the Canvas API
   */
  retrieveGraphQLObject() {
    if (DEBUG) {
      console.log(FILE_NAME + " -----  CanvasApiData::retrieveGraphQLObject")
    }
    const idString = this.id.toString()

    if (this.id === -1) {
      throw new Error("canvasApiData::retrieveCourseObject: Course ID not set");
    }

    let callUrl = `${this.hostName}/api/graphql`;

    if (DEBUG) {
      console.log(`${FILE_NAME} Starting requestCourseObject for course ${this.id} as string ${idString}`)
    }

    let query = GRAPHQL_QUERY.replaceAll("$courseId", idString);

    const body: string = JSON.stringify({
      query: query
    })

    fetch(callUrl, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        'X-CSRF-Token': CSRFtoken()
      },
      body: body,
    }).then(response => {
      if (DEBUG) {
        console.log(FILE_NAME + "  :retrieveGraphQLObject: got response")
        console.log(response)
      }
      if (!response.ok) {
        throw new Error(
          `canvasApiData: retrieveGraphQLObject: error ${response.status}`
        );
      }
      response.json().then(data => {
        // check for the presence of an errors property for the GraphQL response
        if (data.errors) {
          throw new Error(
            `canvasApiData: retrieveGraphQLObject: error ${data.errors[0].message}`
          );
        }
        if (DEBUG && GLOBAL_DEBUG) {
          console.log(FILE_NAME + "    :retrieveGraphQLObject: got data")
        }
        this.transformGraphQLResponse(data.data.course);
        this.retrieveDiscussionTopics(idString);

        //this.updated += 1;

        if (DEBUG && GLOBAL_DEBUG) {
          console.log(this)
        }
      })
    })
  }


  /**
   * @method transformGraphQLResponse
   * @param response JSON GraphQL response
   * @description Transform the GraphQL response into a more useful JS course object values
   * - name, courseCode, createdAt are "copied"
   * - response.groupSetsConnection.nodes is 
   *    - "copied" to this.groupSets[] 
   *      - groupsConnections.node member for each group set is "copied" 
   *        to this.groupSets[].groups[]
   *    - also a new property this.groupSetsById is created
   */

  transformGraphQLResponse(response: any) {

    // straight copy for some fields
    this.name = response.name
    this.courseCode = response.courseCode
    this.createdAt = response.createdAt
    this.groupSets = response.groupSetsConnection.nodes

    this.transformStudentsTeachers(response)

    // copy and update the groupSets object
    this.groupSetsById = {}
    for (const groupSet of this.groupSets) {
      // copy the group set to the groupSetsById object
      this.groupSetsById[groupSet._id] = groupSet
      // copy groupSet.groupsConnection.nodes to groupSet.groups
      groupSet.groups = groupSet.groupsConnection.nodes
      groupSet.numGroups = groupSet.groups.length
      if (groupSet.memberLimit === null) {
        groupSet.memberLimit = "n/a"
      }
      if (groupSet.selfSignup === "disabled") {
        groupSet.selfSignup = "X";
      }
      let studentMemberIds = {}
      groupSet.numNonPrivateGroups = 0
      for (const group of groupSet.groups) {
        // copy group.membersConnection.nodes to group.members
        group.members = group.membersConnection.nodes
        // track student members
        let numStudentMembers = 0
        for (const member of group.members) {
          if (this.studentsById.hasOwnProperty(member.user._id)) {
            studentMemberIds[member._id] = true
            numStudentMembers += 1
          }
        }
        if (numStudentMembers > 1) {
          groupSet.numNonPrivateGroups += 1
        }
      }
      groupSet.numStudentsMembersOfGroups = Object.keys(studentMemberIds).length
      groupSet.numStudents = this.students.length
    }

  }

  /**
   * @method transformStudentsTeachers
   * @param response 
   * @description Set up object properties from the list of students and teachers
   * - arrays (students and teachers) from the GraphQL connection nodes
   * - objects (studentsById and teachersById) from the arrays (students and teachers)
   */
  transformStudentsTeachers(response: any) {

    this.students = response.students.nodes
    this.teachers = response.teachers.nodes

    this.studentsById = {}
    for (const student of this.students) {
      this.studentsById[student._id] = student
    }
    this.teachersById = {}
    for (const teacher of this.teachers) {
      this.teachersById[teacher._id] = teacher
    }
  }

  /**
 * @function retrieveDiscussionTopics
 * @param courseId - string version of Canvas course id
 * @description Retrieve the discussion topics for the course via Canvas REST API
 * and then call the transformDiscussionTopics method to process the response and update
 * the course object.
 * 
 * NOTE: Canvas GraphQL API does not appear to support discussion topics, hence REST.
 * This method called after the GraphQL query to get the course object.
 */

  retrieveDiscussionTopics(courseId: string) {

    const callUrl = `${this.hostName}/api/v1/courses/${courseId}/discussion_topics`;

    fetch(callUrl, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        'X-CSRF-Token': CSRFtoken()
      },
    }).then(response => {
      if (!response.ok) {
        throw new Error(
          `canvasApiData: retrieveDiscussionTopics: error ${response.status}`
        )
      }
      response.json().then(data => {
        this.transformDiscussionTopics(data);
        // temporary call here...@todo move it some where sle
        this.getGroupsResponses();

        this.updated += 1
        if (DEBUG && GLOBAL_DEBUG) {
          console.log(`${FILE_NAME} :retrieveDiscussionTopics: got ALLLL data`)
          console.log(this)
        }
      })
    })
  }

  /**
   * @function transformDiscussionTopics
   * @param topics JSON response from Canvas REST api
   * @description Transform the response into a more useful JS object
   * - save the response into this.discussionTopics
   * - for any discussion topic that has a group_category_id, add the discussion topic object to
   *   an array discussionTopics within the matching group set
   * - also create a learningJournalStatus object for each group set
   */

  transformDiscussionTopics(topics: any) {
    this.discussionTopics = topics

    // add any group discussions to the relevant group set
    for (const topic of this.discussionTopics) {
      if (topic.group_category_id) {
        let groupSet = this.groupSetsById[topic.group_category_id]
        if (groupSet) {
          if (!groupSet.discussionTopics) {
            groupSet.discussionTopics = []
          }
          groupSet.discussionTopics.push(topic)
        }
      }
    }
    // update each groupSet
    // - set numPrompts
    // - add a learningJournalStatus object
    // - add a groupsById object based on groups property
    // - add a discussionTopicsById object based on discussionTopics property
    for (const groupSet of this.groupSets) {
      if (groupSet.discussionTopics) {
        groupSet.numPrompts = groupSet.discussionTopics.length
      } else {
        groupSet.numPrompts = 0
      }
      groupSet.learningJournalStatus = new learningJournalStatus(groupSet)
      // set up groupsById object
      groupSet.groupsById = {}
      for (const group of groupSet.groups) {
        groupSet.groupsById[group._id] = group
      }
      // set up discussionTopicsById object (REST so id not _id)
      groupSet.discussionTopicsById = {}
      if (groupSet.discussionTopics) {
        for (const topic of groupSet.discussionTopics) {
          groupSet.discussionTopicsById[topic.id] = topic
        }
      }
    }
  }

  /**
   * @method getGroupsResponses
   * @description Retrieve all the responses for all the groups in all of the
   * group sets 
   * 
   * - for each group set (this.groupSets array)
   *    - for each group in the group set 
   *       - get the group's prompt and responses 
   *          Each prompt is a topic, so pass in the list of topic ids
   *  
   * @todo 
   * - maybe add in assignments
   *   
   *   
   */

  async getGroupsResponses() {
    for (const groupSet of this.groupSets) {
      for (const group of groupSet.groups) {
        // get discussion topic ids for the group from keys of discussionTopicsById 
        const topicIds = Object.keys(groupSet.discussionTopicsById)
        for (const topicId of topicIds) {
          let data = await this.getResponses( topicId)
          console.log(`groupGroupsResponses`)
          console.log(data)
          if (data) {
            // @TODO where does htis get added
            // add the responses to the group object
          }
        }
      }
    }
    if (DEBUG && GLOBAL_DEBUG) {
      console.log(`${FILE_NAME} getGroupsResponses: got all responses`)
      console.log(this)
    }
  } 

  /**
   * @method getResponses
   * @param topicId 
   * @description  for the given topic get the full topic view from Canvas API
   * GET /api/v1/courses/:course_id/discussion_topics/:topic_id/view 
   */

  async getResponses( topicId : string) : any {
    const courseId = this.id.toString()
    const callUrl = `${this.hostName}/api/v1/courses/${courseId}/discussion_topics/${topicId}/view`;

    if (DEBUG && GLOBAL_DEBUG) {
      console.log(`${FILE_NAME} getResponses: Hostname: ${this.hostName}; Course ID: ${courseId}; Topic ID: ${topicId}`);
    }

    try {
        const response = await fetch(callUrl, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        if (!response.ok) {
            throw new Error(
                `${FILE_NAME} getResponses: error ${response.status}`
            );
        }

        const data: any = await response.json();
        if (DEBUG && GLOBAL_DEBUG) {
            console.log(`${FILE_NAME} got some data`)
            console.log(data)
        }
        if (!data) {
            throw new Error(`${FILE_NAME}:getCourseObject: no data returned`);
            return {}
        }

//        if (includeModules) {
 //           const modules = await getCourseModules(hostName, courseId);
  //          data.modules = modules;
   //     } 
        return data;
    } catch (error) {
        console.error(`canvasApi:getCourseObject: error ${error}`);
        throw error;
    } 
  }

}

let canvasData: canvasApiData = reactive(new canvasApiData());

export default function getCanvasData(): any {
  if (DEBUG && GLOBAL_DEBUG) {
    console.log(FILE_NAME + " :1 getCanvasCourse called")
  }
  if (canvasData.id === -1) {
    if (DEBUG && GLOBAL_DEBUG) {
      console.log("canvasApiData:2 calling parseCurrentURL (we don't have data")
    }
    canvasData.parseCurrentURL();
    if (DEBUG && GLOBAL_DEBUG) {
      console.log("canvasApiData:3 calling retrieveGraphQLObject (we don't have data)")
    }
    canvasData.retrieveGraphQLObject();
    if (DEBUG && GLOBAL_DEBUG) {
      console.log("canvasApiData:4 called retrieveGraphQLObject (we don't have data)")
      console.log(canvasData)
    }
  }

  if (DEBUG && GLOBAL_DEBUG) {
    console.log("canvasApiData:5 getCanvasCourse returning")
  }
  return canvasData;
  //return {};
}