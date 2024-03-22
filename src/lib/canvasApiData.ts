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
      groupSets: groupSetsConnection {
        nodes {
          id
          _id
          name
          memberLimit
          selfSignup
          groups: groupsConnection {
            nodes {
              _id
              name
              updatedAt
              membersCount
              canMessage
              createdAt
              members: membersConnection {
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
          htmlUrl(courseId: "7446794")
        }
      }
      teachers: usersConnection(filter: {enrollmentTypes: TeacherEnrollment}) {
        nodes {
          _id
          name
          email
          htmlUrl(courseId: "7446794")
        }
      }
    }
  }`


let instance: any;

class canvasApiData {
    public id: number;  // Canvas course id
    public name: string; // Canvas course name
    public groupSets: Object[]; //
    public courseObject: any = -1;// The course object from the Canvas API

    public hostName: string = ''; // The hostname of the Canvas instance
    public updated: number = 0;


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
            console.log(" -----  CanvasApiData::retrieveGraphQLObject")
        }
        if (this.id === -1) {
            throw new Error("canvasApiData::retrieveCourseObject: Course ID not set");
        }

        let callUrl = `${this.hostName}/api/graphql`;

        if (DEBUG) {
            console.log("Starting requestCourseObject")
        }

        let query = GRAPHQL_QUERY.replace("$courseId", this.id.toString());

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
                console.log("  canvasApiData:retrieveGraphQLObject: got response")
                console.log(response)
            }
            if (!response.ok) {
                throw new Error(
                    `canvasApiData: retrieveGraphQLObject: error ${response.status}`
                );
            }
            response.json().then(data => {
                if (DEBUG && GLOBAL_DEBUG) {
                    console.log("    canvasApiData:retrieveGraphQLObject: got data")
                }
                this.courseObject = data.data.course;

                this.name = this.courseObject.name;
                this.updated += 1;

                if (DEBUG && GLOBAL_DEBUG) {
                    console.log(this.courseObject)
                }
            })
        })
    }

}

let canvasData: canvasApiData = reactive(new canvasApiData());

export default function getCanvasData(): any {
    if (DEBUG && GLOBAL_DEBUG) {
        console.log("canvasApiData:1 getCanvasCourse called")
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
            console.log("show course object")
            console.log(canvasData.courseObject)
        }
    }

    if (DEBUG && GLOBAL_DEBUG) {
        console.log("canvasApiData:5 getCanvasCourse returning")
    }
    return canvasData;
    //return {};
}