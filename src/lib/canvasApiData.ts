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

import { getEnvironmentObject } from "./environment.js"

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
                    avatarUrl
                    email
                    htmlUrl(courseId: "$courseId")
                    name
                    pronouns
                    shortName
                    sortableName
                    courseRoles(courseId: "$courseId")
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
          enrollments(courseId: "$courseId") {
            _id
            section {
              _id
              id
              name
            }
          }
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

interface memberNode {
  _id: string
  createdAt: string
  user: {
    "_id": string
    avatarUrl: string
    email: string
    htmlUrl: string
    name: string
    pronouns: string
    shortName: string
    sortableName: string
    courseRoles: string[]
  }
}

interface promptStats {
  // num of entries
  numStaffEntries: number
  numStudentEntries: number
  numUnansweredStudentEntries: number
  // when last entries from staff and students
  lastStaffEntry: string
  lastStudentEntry: string
}


export interface prompt {
  // currently Canvas API REST response for view all topic
  // @todo 
  // - add some analysis etc.
  // - maybe add additional data 
  unread_entries: []
  forced_entries: []
  entry_ratings: {}
  participants: []
  view: []
  new_entries: []

  // CLJ specific
  stats: promptStats
}

interface group {
  _id: string
  name: string
  updatedAt: string
  membersCount: number
  canMessage: boolean
  createdAt: string
  membersConnection: {
    nodes: memberNode[]
  }
  members: memberNode[]
  prompts: {
    [key: string]: prompt
  }
  stats: discussionTopicStats
}

/*enum discussion_type: { 
    threaded,  // fully threaded
    side_comment  // only one level of nested comments
    }

enum read_state {
    read,
    unread
}*/

interface author {
  id: number
  anonymous_id: string
  display_name: string
  avatar_image_url: string
  html_url: string
  pronouns: string
}

interface group_topic_children {
  id: number
  group_id: number
}

interface assignment {
  id: number
  description: string
  due_at: string
  unlock_at: string
  lock_at: string
  points_possible: number
  grading_type: string
  assignment_group_id: number
  grading_standard_id: number
  created_at: string
  updated_at: string
  peer_reviews: boolean
  automatic_peer_reviews: boolean
  position: number
  grade_group_students_individually: boolean
  anonymous_peer_reviews: boolean
  group_category_id: number
  post_to_sis: boolean
  moderated_grading: boolean
  omit_from_final_grade: boolean
  intra_group_peer_reviews: boolean
  anonymous_instructor_annotations: boolean
  anonymous_grading: boolean
  graders_anonymous_to_graders: boolean
  grader_count: number
  grader_comments_visible_to_graders: boolean
  final_grader_id: number
  grader_names_visible_to_final_grader: boolean
  allowed_attempts: number
  annotatable_attachment_id: number
  hide_in_gradebook: boolean
  secure_params: string
  lti_context_id: string
  course_id: number
  name: string
  submission_types: string[]
  has_submitted_submissions: boolean
  due_date_required: boolean
  max_name_length: number
  in_closed_grading_period: boolean
  graded_submissions_exist: boolean
  is_quiz_assignment: boolean
  can_duplicate: boolean
  original_course_id: number
  original_assignment_id: number
  original_lti_resource_link_id: string
  original_assignment_name: string
  original_quiz_id: number
  workflow_state: string
  important_dates: boolean
  muted: boolean
  html_url: string
  has_overrides: boolean
  needs_grading_count: number
  sis_assignment_id: string
  integration_id: string
  integration_data: {}
  published: boolean
  unpublishable: boolean
  only_visible_to_overrides: boolean
  visible_to_everyone: boolean
  locked_for_user: boolean
  submissions_download_url: string
  post_manually: boolean
  anonymize_students: boolean
  require_lockdown_browser: boolean
  restrict_quantitative_data: boolean
}

// used at both groupset and group level

interface discussionTopicStats {
  // num of entries
  numStaffEntries: number
  numStudentEntries: number
  numNoStudentEntries: number
  numNoStaffEntries: number
  //numUnansweredStudentEntries: number
  numNoStudentEntriesLast7: number
  numNoStaffEntriesLast7: number
  // when last entries from staff and students
  lastStaffEntry: string
  lastStudentEntry: string
}

interface discussionTopic {
  // Canvas API
  id: number
  title: string
  last_reply_at: string
  created_at: string
  delayed_post_at: string
  assignment_id: number
  assignment: assignment
  root_topic_id: number
  position: number
  podcast_has_student_posts: boolean
  discussion_type: string // values threaded or side_comment
  lock_at: string
  allow_rating: boolean
  only_graders_can_rate: boolean
  sort_by_rating: boolean
  is_section_specific: boolean
  anonymous_state: string
  user_name: string
  discussion_subentry_count: number
  permissions: {
    attach: boolean
    update: boolean
    reply: boolean
    delete: boolean
  }
  require_initial_post: boolean
  user_can_see_posts: boolean
  podcast_url: string
  read_state: string // read or unread 
  unread_count: number
  subscribed: boolean
  attachments: []
  published: boolean
  can_unpublish: boolean
  locked: boolean
  can_lock: boolean
  comments_disabled: boolean
  author: author
  html_url: string
  url: string
  pinned: boolean
  group_category_id: number
  can_group: boolean
  topic_children: number[]

  locked_for_user: boolean
  message: string
  subscription_hold: string
  todo_date: string
  is_announcement: boolean

  // CLJ specific
  stats: discussionTopicStats
  promptsByTopicId: { [key: number]: prompt }
  promptsByGroupId: { [key: number]: prompt }
  group_topic_children: group_topic_children[]
}

/*interface learningJournalStatus {
  privateJournal: boolean
  completedConfig: boolean
  promptsCreated: boolean
  groupsCreated: boolean
  selfSignUp: boolean
  studentsWithoutGroup: boolean
  multiStudentGroups: boolean
}*/

interface groupSet {
  // Canvas API GraphQL
  id: string
  _id: string
  name: string
  memberLimit: string
  selfSignup: string
  groupsConnection: { "nodes": group[] }
  groups: group[]
  numGroups: number
  numNonPrivateGroups: number
  numStudentsMembersOfGroups: number
  numStudentsWithoutGroup: number
  studentsWithoutGroup: { [key: string]: user }
  numStudents: number
  discussionTopics: discussionTopic[]
  numPrompts: number
  learningJournalStatus: learningJournalStatus
  groupsById: { [key: string]: group }
  discussionTopicsById: { [key: string]: discussionTopic }

  // Local customisation
  updated: number // all group set discussion forum data updated
  updateProgress: number // % ccompletion of loading progress for discussion forum data
  stats: discussionTopicStats // sum up the discussion stats for all discussion topics
}

export interface user {
  _id: string
  name: string
  email: string
  avatarUrl: string
  enrollments: any[]
}

interface section {
  _id: string
  id: string
  name: string
}



let instance: any;

class learningJournalStatus {
  public privateJournal: boolean = false; // all groups have one student member and self-signup is disabled
  public completedConfig: boolean = false; // groupsCreated && promptsCreated ?? required
  public promptsCreated: boolean = false; // there are prompts (discussion topics)
  public groupsCreated: boolean = false; // there are groups
  public selfSignUp: boolean = false; // self-signup is enabled
  public studentsWithoutGroup: boolean = false; // there are students without a group
  public multiStudentGroups: boolean = false; // there are groups with more than one student


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

export class canvasApiData {
  public id: number;  // Canvas course id
  public name: string; // Canvas course name
  public hostName: string = ''; // The hostname of the Canvas instance
  public updated: number = 0 // TODO consider moving to a struct to include percent loaded etc

  public courseCode: string = ''; // The course code
  public createdAt: string = ''; // The creation date of the course
  //public groupSets: Object[] = []; // array of group sets in the course
  public groupSets: groupSet[] = []
  public groupSetsById: { [key: string]: groupSet } = {}
  //public groupSetsById: any = {}; // object of group sets by id

  //public students: Object[] = []; // array of students in the course
  //public teachers: Object[] = []; // array of teachers in the course
  public students: user[] = []
  public sections: { [key: string]: section } = {}
  public teachers: user[] = []
  public studentsById: { [key: string]: user } = {}
  public teachersById: { [key: string]: user } = {}
  public discussionTopics: discussionTopic[] = []
  //public learningJournalStatus: learningJournalStatus
  public learningJournalStatus: learningJournalStatus = new learningJournalStatus({})
  public promptsByTopicId: { [key: number]: prompt }
  /*public studentsById: any = {}; // object of students by id
  public teachersById: any = {}; // object of teachers by id
  public discussionTopics: any = {} */


  public currentUserId: string = ""

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
    this.promptsByTopicId = {}

    //this.currentUserId = ENV["current_user_id"]
    const env : any = getEnvironmentObject()
    this.currentUserId = env["current_user_id"]


    if (DEBUG) {
      console.log(`${FILE_NAME} current user is ${this.currentUserId}`)
    }

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
   * @method mightBeLearningJournal
   * @param gsId : string
   * @returns boolean
   * @description identifies if a group set might be a learning journal
   * i.e. if it has both groups and prompts created
   */

  mightBeLearningJournal(gsId: string): boolean {
    // convert gsId to a number
    const gsIdNumber = parseInt(gsId)
    const groupSet = this.groupSetsById[gsIdNumber]
    if (groupSet) {
      // if there is a group set, then return true if
      return groupSet.learningJournalStatus.promptsCreated &&
        groupSet.learningJournalStatus.groupsCreated
    }
    return false
  }


  /**
   * @function retrieveGraphQLObject
   * @description Perform a GraphQL query on the Canvas API
   */
  retrieveGraphQLObject(getPromptData: boolean) {
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
        this.retrieveDiscussionTopics(idString, getPromptData);
        if (!getPromptData) {
          // get the discussion topics for the course
          //canvasData.retrieveDiscussionTopics();
          this.updated += 1;
        }

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
      groupSet.updated = 0
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
      // loop through each group in the groupset and generate various stats
      // - list of ids of students who are in groups
      let studentMemberIds: { [key: string]: boolean } = {}
      groupSet.numNonPrivateGroups = 0
      console.log(`groupSet ${groupSet.name} checking members of groups`)
      for (const group of groupSet.groups) {
        // copy group.membersConnection.nodes to group.members
        group.members = group.membersConnection.nodes
        // track student members
        let numStudentMembers = 0
        for (const member of group.members) {
          // is the current member of this group a student?
          if (this.studentsById.hasOwnProperty(member.user._id)) {
            studentMemberIds[member.user._id] = true
            numStudentMembers += 1
            console.log(` --- student member ${member.user.name} id ${member.user._id}`)
          }
        }
        if (numStudentMembers > 1) {
          groupSet.numNonPrivateGroups += 1
        }
      }
      console.log("student members include")
      console.log(studentMemberIds)
      groupSet.numStudentsMembersOfGroups = Object.keys(studentMemberIds).length
      groupSet.studentsWithoutGroup = {}
      for (const student of this.students) {
        if (!studentMemberIds.hasOwnProperty(student._id)) {
          groupSet.studentsWithoutGroup[student._id] = student
        }
      }
      console.log("Students without groups")
      console.log(groupSet.studentsWithoutGroup)
      groupSet.numStudents = this.students.length
      groupSet.numStudentsWithoutGroup = groupSet.numStudents - groupSet.numStudentsMembersOfGroups
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
    // gather the sections
    for (const student of this.students) {
      // loop thru each student's enrollments and add the section to the section object
      let enrollment: any
      for (enrollment of student.enrollments) {
        this.sections[enrollment.section._id] = enrollment.section
      }
      // add them to ById hash
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

  retrieveDiscussionTopics(courseId: string, getPromptData: boolean) {

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
        if (getPromptData) {
          this.getGroupsResponses();
        }

        // set this now and the root component will start working
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
   * group sets.
   * 
   * Adds a prompts property to each group object. Keyed on the discussion topic Ids 
   * for the group set and containing the Canvas API full topic view for the group's
   * version of the topic.
   * 
   * TODO
   * - Perhaps should include some stats/analysis extra stuff at this stage
   * - The groupset should have properties to handle the loading of all the responses
   *    for showing progress
   * 
   * For each groupset, proceed only if there are discussionTopics
   *  For each group in the groupset
   *    Find each discussion topic find the list of ids for all the group's specific topics
   *    For each of the group's specific topics
   *      Get a Canvas API full topic view
   *      add it to the group.prompts property keyed on the groupset discussion topic
   * 
   * @todo 
   * - maybe add in assignments
   *   
   *   
   */

  async getGroupsResponses(): Promise<void> {
    // to be used with some progress thing
    const numApiCalls = this.calculateGroupsResponseCalls()
    if (DEBUG && GLOBAL_DEBUG) {
      console.log(`${FILE_NAME} getGroupsResponses: numApiCalls: ${numApiCalls}`)
    }

    for (const groupSet of this.groupSets) {
      groupSet.updateProgress = 0
      const progressIncrement = 100 / (groupSet.numGroups * groupSet.numPrompts)
      if (!groupSet.discussionTopics) {
        // TODO why does this happen??
        continue
      }
      for (const group of groupSet.groups) {
        // get discussion topic ids for the group from keys of discussionTopicsById 
        group.prompts = {}
        let groupTopics = []
        // convert group._id to integer
        const groupId = parseInt(group._id)
        // TODO what is the topic ID and API call I should be using to get
        // a group's topic ??? *************
        for (const topic of groupSet.discussionTopics) {
          // each of groupSet.discussionTopics elements contain 
          //  group_topic_children property - an array of topic_id and group_id
          // extract the topic_id that matches the current group's group_id
          let groupTopic = topic.group_topic_children.find((element: any) => element.group_id === groupId)
          let gtId: any = ""
          if (groupTopic) {
            gtId = groupTopic.id
          }
          groupTopics.push({
            topicId: topic.id, // link back to parent topic
            groupId: groupId,
            groupTopicId: gtId // the group's topic
          })
        }
        if (DEBUG && GLOBAL_DEBUG) {
          console.log(`${FILE_NAME} getGroupsResponses: groupTopicIds`)
          console.log(groupTopics)
        }
        for (const groupTopic of groupTopics) {
          // data is the full topic view for one groups prompt
          let data = await this.getResponses(group._id, groupTopic.groupTopicId)
          /*if (data.view.length > 0) {
            console.log(`groupGroupsResponses`)
            console.log(data)
          }*/
          if (data) {
            // calaculate statistics at the level of the prompt
            data = this.analyseGroupPrompt(data)
            // add the id for the group's topic
            data["id"] = groupTopic.groupTopicId
          }
          groupSet.updateProgress += progressIncrement
          // add data into the groupSet.group it belongs
          group.prompts[groupTopic.topicId] = data
          // add a copy of data into the groupset.discussion topic it belongs
          if (!groupSet.discussionTopicsById[groupTopic.topicId].hasOwnProperty("promptsByTopicId")) {
            groupSet.discussionTopicsById[groupTopic.topicId].promptsByTopicId = {}
          }
          groupSet.discussionTopicsById[groupTopic.topicId].promptsByTopicId[groupTopic.groupTopicId] = data
          // add this.promptsTopicsById
          this.promptsByTopicId[groupTopic.groupTopicId] = data
          // add groupSet.promptsByGroupId
          if (!groupSet.discussionTopicsById[groupTopic.topicId].hasOwnProperty("promptsByGroupId")) {
            groupSet.discussionTopicsById[groupTopic.topicId].promptsByGroupId = {}
          }
          groupSet.discussionTopicsById[groupTopic.topicId].promptsByGroupId[groupTopic.groupId] = data
        }
      }
      // All the prompts data has been gotten, able to analyse stats at the groupSet level
      this.analyseGroupSetTopics(groupSet._id)
      this.analyseGroupSetGroups(groupSet._id) // TODO 
      groupSet.updated += 1
    }

    if (DEBUG && GLOBAL_DEBUG) {
      console.log(`${FILE_NAME} getGroupsResponses: got all responses`)
      console.log(this)
    }
    //this.updated +=1
  }

  /**
   * @method analyseGroupSetGroups
   * @param groupSetId string id of the group set we're working on
   * @description Called once all the prompts for a groupset gathered. Analyse contributions
   * to prompts to be organised by groups
   * i.e. for a group, how many prompts don't have contributions etc
   * 
   * Loop through the groupset's groups and generate a stats object for each group
   */

  analyseGroupSetGroups(groupSetId: string) {
    const groupSet = this.groupSetsById[groupSetId]

    groupSet.stats = {
      numNoStudentEntries: 0,
      numNoStaffEntries: 0,
      numStudentEntries: 0,
      numStaffEntries: 0,
      numNoStudentEntriesLast7: 0,
      numNoStaffEntriesLast7: 0,
      lastStaffEntry: "",
      lastStudentEntry: "",
    }

    for (const group of groupSet.groups) {
      // calculate stats about each prompt
      /*let numNoStudentEntries = 0  // num prompts with no entries
      let numNoStaffEntries = 0
      let numNoStaffEntriesLast7 = 0
      let numNoStudentEntriesLast7 = 0
      let numStudentEntries = 0
      let numStaffEntries = 0
      let lastStaffEntry = "" */

      group.stats = {
        numNoStudentEntries: 0,
        numNoStaffEntries: 0,
        numStudentEntries: 0,
        numStaffEntries: 0,
        numNoStudentEntriesLast7: 0,
        numNoStaffEntriesLast7: 0,
        lastStaffEntry: "",
        lastStudentEntry: ""
      }

      for (const topicId in group.prompts) {
        const prompt = group.prompts[topicId]
        group.stats.numStudentEntries += prompt.stats.numStudentEntries
        group.stats.numStaffEntries += prompt.stats.numStaffEntries
        if (prompt.stats.numStudentEntries === 0) {
          group.stats.numNoStudentEntries += 1
          group.stats.numNoStudentEntriesLast7 += 1
        } else {
          if (group.stats.lastStudentEntry === "" || prompt.stats.lastStudentEntry > group.stats.lastStudentEntry) {
            group.stats.lastStudentEntry = prompt.stats.lastStudentEntry
          }
          if (!this.last7Days(prompt.stats.lastStudentEntry)) {
            group.stats.numNoStudentEntriesLast7 += 1
          }
        }
        if (prompt.stats.numStaffEntries === 0) {
          group.stats.numNoStaffEntries += 1
          group.stats.numNoStaffEntriesLast7 += 1
        } else {
          if (group.stats.lastStaffEntry === "" || prompt.stats.lastStaffEntry > group.stats.lastStaffEntry) {
            group.stats.lastStaffEntry = prompt.stats.lastStaffEntry
          }
          if (!this.last7Days(prompt.stats.lastStaffEntry)) {
            group.stats.numNoStaffEntriesLast7 += 1
          }
        }
      }
      groupSet.stats.numNoStudentEntries += group.stats.numNoStudentEntries
      groupSet.stats.numNoStaffEntries += group.stats.numNoStaffEntries
      groupSet.stats.numStudentEntries += group.stats.numStudentEntries
      groupSet.stats.numStaffEntries += group.stats.numStaffEntries
      groupSet.stats.numNoStudentEntriesLast7 += group.stats.numNoStudentEntriesLast7
      groupSet.stats.numNoStaffEntriesLast7 += group.stats.numNoStaffEntriesLast7
      if (groupSet.stats.lastStaffEntry === "" || group.stats.lastStaffEntry > groupSet.stats.lastStaffEntry) {
        groupSet.stats.lastStaffEntry = group.stats.lastStaffEntry
      }
      if (groupSet.stats.lastStudentEntry === "" || group.stats.lastStudentEntry > groupSet.stats.lastStudentEntry) {
        groupSet.stats.lastStudentEntry = group.stats.lastStudentEntry
      }
    }
  }

  /**
   * @method last7Days
   * @param dateString 
   * @returns true if the date string was within the last 7 days
   */

  last7Days(dateString: string): boolean {
    if (dateString === null) {
      return false
    }
    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
    const lastEntryDate = new Date(dateString)
    return lastEntryDate > sevenDaysAgo
  }

  /**
   * @method analyseGroupSetTopics
   * @param groupSetId string id of the string we're working on
   * @description Called once all the prompts for a groupset gathered. Analyse contributions
   * to generate stats on when and how many entries have been contributed by students and staff.
   * 
   * Each of the groupSets discussionTopic entries should have a promptsByTopicId object which
   * contains a stats object for each group prompt
   * 
   * - use num[Staff|Student]Entries to calculate numbers of entries
   * - use last[Staff|Student]Entry to calculate the number of prompts that have staff/student
   *   entries ever or in the last 7 days
   */

  analyseGroupSetTopics(groupSetId: string) {
    const groupSet = this.groupSetsById[groupSetId]

    // check each of the discussionTopics
    for (const topic of groupSet.discussionTopics) {
      if (!topic.hasOwnProperty("promptsByTopicId")) {
        continue
      }
      let numStaffEntries = 0
      let numStudentEntries = 0
      let numNoStudentEntries = 0
      let numNoStaffEntries = 0
      let lastStaffEntry = null
      let lastStudentEntry = null
      let numNoStudentEntriesLast7 = 0
      let numNoStaffEntriesLast7 = 0

      for (const promptId in topic.promptsByTopicId) {
        const prompt = topic.promptsByTopicId[promptId]
        numStaffEntries += prompt.stats.numStaffEntries
        numStudentEntries += prompt.stats.numStudentEntries
        if (prompt.stats.numStudentEntries === 0) {
          numNoStudentEntries += 1
          numNoStudentEntriesLast7 += 1
        } else if (!this.last7Days(prompt.stats.lastStudentEntry)) {
          numNoStudentEntriesLast7 += 1
        }
        if (prompt.stats.numStaffEntries === 0) {
          numNoStaffEntries += 1
          numNoStaffEntriesLast7 += 1
        } else if (!this.last7Days(prompt.stats.lastStaffEntry)) {
          numNoStaffEntriesLast7 += 1
        }
        if (lastStaffEntry === null || prompt.stats.lastStaffEntry > lastStaffEntry) {
          lastStaffEntry = prompt.stats.lastStaffEntry
        }
        if (lastStudentEntry === null || prompt.stats.lastStudentEntry > lastStudentEntry) {
          lastStudentEntry = prompt.stats.lastStudentEntry
        }
      }
      topic.stats = {
        numStaffEntries: numStaffEntries,
        numStudentEntries: numStudentEntries,
        numNoStudentEntries: numNoStudentEntries || 0,
        numNoStaffEntries: numNoStaffEntries,
        lastStaffEntry: lastStaffEntry || "",
        lastStudentEntry: lastStudentEntry || "",
        numNoStudentEntriesLast7: numNoStudentEntriesLast7,
        numNoStaffEntriesLast7: numNoStaffEntriesLast7
      }
    }
  }

  /**
   * @method analyseGroupPrompt( data )
   * @param data Canvas API full topic view object 
   * @returns data modified with discussionTopicStats object
   * @description Examines each of the entries in a topic to determine when and how many
   * entries have been contributed by students and staff
   * 
   * - Examine the discussionTopic.participants array to categorise participants as 
   *   staff or students
   *    Done by extracting user_id from the participant arrays and checking existence
   *    in this.teachersById.keys and this.studentsById.keys 
   * - Looping through each entries in discussionTopics.view
   *    - counting num student/staff entries
   *    - tracking when the most recent student/staff entry was made
   * 
   *    
   */

  analyseGroupPrompt(data: prompt): prompt {
    data.stats = {
      numStaffEntries: 0,
      numStudentEntries: 0,
      numUnansweredStudentEntries: 0,
      lastStaffEntry: "",
      lastStudentEntry: ""
    }

    // identify the user type for each participant in the prompt
    let participantType: { [key: number]: string } = {}
    let participant: any
    for (participant of data.participants) {
      let type = "unknown"
      // participant.id is a number and Canvas user id
      const staffIds = Object.keys(this.teachersById)
      const studentIds = Object.keys(this.studentsById)
      // if participant.id in staffIds array set type to staff
      if (staffIds && staffIds.includes(`${participant.id}`)) {
        type = "staff"
      } else if (studentIds && studentIds.includes(`${participant.id}`)) {
        type = "student"
      }
      participantType[participant.id] = type
    }

    // loop through each prompts.view entry
    let entry: any
    for (entry of data.view) {

      // entry.user_id is the Canvas user id
      const type = participantType[entry.user_id]
      if (type === "staff") {
        data.stats.numStaffEntries += 1
        if (data.stats.lastStaffEntry === null || entry.created_at > data.stats.lastStaffEntry) {
          data.stats.lastStaffEntry = entry.created_at
        }
      } else if (type === "student") {
        data.stats.numStudentEntries += 1
        if (data.stats.lastStudentEntry === null || entry.created_at > data.stats.lastStudentEntry) {
          data.stats.lastStudentEntry = entry.created_at
        }
      }
      // @TODO need to identify any student entries that don't have answers
    }

    return data
  }


  /**
   * @method calculateGroupsResponseCalls
   * @description Calculate the number of API calls required to 
   *    get all the responses for all the groups
   * @returns The number of API calls required
   */

  calculateGroupsResponseCalls(): number {
    let numApiCalls = 0
    for (const groupSet of this.groupSets) {
      numApiCalls += groupSet.numGroups * groupSet.numPrompts
    }
    return numApiCalls
  }

  /**
   * @method getResponses
   * @param groupId
   * @param topicId 
   * @description  for the given topic get the full topic view from Canvas API
   * GET /api/v1/courses/:course_id/discussion_topics/:topic_id/view 
   */

  async getResponses(groupId: string, topicId: string): Promise<any> {
    const courseId = this.id.toString()
    //const callUrl = `${this.hostName}/api/v1/courses/${courseId}/discussion_topics/${topicId}/view`;
    const callUrl = `${this.hostName}/api/v1/groups/${groupId}/discussion_topics/${topicId}/view`

    if (DEBUG && GLOBAL_DEBUG) {
      console.log(`${FILE_NAME} getResponses: Hostname: ${this.hostName}; Course ID: ${courseId}; Group Id: ${groupId} Topic ID: ${topicId}`);
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
        if (data.view.length > 0) {
          console.log(`${FILE_NAME} got some data`)
          console.log(data)
        }
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

  /**
   * @method getUserDetails
   * @param {Number} userId
   * @description Given a user id search sthe studentsById and teachersById for the
   * user's details
   */
  getUserDetails(userId: number): user {
    let user: user = this.studentsById[userId]
    if (!user) {
      user = this.teachersById[userId]
    }
    return user
  }

  /**
   * @method getGroupSetNames
   * @returns {Array} An array of all the group set names in the course
   */

  getGroupSetNames(): string[] {
    let groupSetNames: string[] = []
    for (const groupSet of this.groupSets) {
      groupSetNames.push(groupSet.name)
    }
    return groupSetNames
  }

  /**
   * @method isCurrentUserTeacher
   * @returns {Boolean} True if the current user is a teacher in the course
   * @description Check if the current user is a teacher in the course
   * Only works once the course object has been retrieved
   */

  isCurrentUserTeacher(): boolean {
    if (this.updated > 0) {
      for (const teacher of this.teachers) {
        if (teacher._id === this.currentUserId) {
          return true
        }
      }
    }
    return false
  }



}

let canvasData: canvasApiData = reactive(new canvasApiData());

/**
 * @function getCanvasData
 * @param getPromptData : boolean Whether to get prompt data
 * @returns singleton object with all data retrieved from Canvas API
 * @description Create a Vue "store". A singleton that manages the retrieval and
 * manipulation of data from the Canvas API
 */

export function getCanvasData(getPromptData: boolean = true): canvasApiData {
  if (DEBUG && GLOBAL_DEBUG) {
    console.log(`${FILE_NAME}:getCanvasData getPromptData - ${getPromptData}`)
    console.log(canvasData)
    console.log("----")
  }
  // check if any data has been retrieved at all
  if (canvasData.id === -1) {
    // no data retrieved, get basic info from the url
    canvasData.parseCurrentURL()
    // get the initial course object from the Canvas API
    canvasData.retrieveGraphQLObject(getPromptData)
    if (DEBUG && GLOBAL_DEBUG) {
      console.log("canvasApiData:4 called retrieveGraphQLObject (we don't have data)")
      console.log(canvasData)
    }
  }

  if (DEBUG && GLOBAL_DEBUG) {
    console.log("canvasApiData:5 getCanvasCourse returning")
    console.log(canvasData)
    console.log("_________")
  }
  return canvasData;
  //return {};
}