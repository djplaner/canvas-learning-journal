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

const DEBUG: boolean = false
const FILE_NAME: string = "CanvasApiData.ts"

const CSRFtoken = function () {
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
                    name
                    email
                    avatarUrl
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

        this.updated += 1;

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
      let studentMemberIds = {}
      for (const group of groupSet.groups) {
        // copy group.membersConnection.nodes to group.members
        group.members = group.membersConnection.nodes
        // track student members
        for (const member of group.members) {
          if (this.studentsById.hasOwnProperty(member.user._id)) {
            studentMemberIds[member._id] = true
          }
        }
      }
      groupSet.numMembers = Object.keys(studentMemberIds).length
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