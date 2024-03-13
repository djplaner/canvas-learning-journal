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

import { reactive } from "vue";

const CSRFtoken = function () {
    return decodeURIComponent((document.cookie.match('(^|;) *_csrf_token=([^;]*)') || '')[2])
}

const TEST_QUERY: string = `
query MyQuery {
    allCourses {
      id
    }
  }`

const GRAPHQL_QUERY: string = `
query MyQuery {
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
     * @function retrieveCourseObject
     * @description Get the course object from the Canvas API and update the object attributes
     */
    retrieveCourseObject() {
        if (this.id === -1) {
            throw new Error("CanvasCourse::retrieveCourseObject: Course ID not set");
        }

        let callUrl = `${this.hostName}/api/v1/courses/${this.id}`;

        console.log("Starting requestCourseObject")

        fetch(callUrl, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        }).then(response => {
            if (!response.ok) {
                throw new Error(
                    `cc_Controller: requestCourseObject: error ${response.status}`
                );
            }
            response.json().then(data => {
                this.courseObject = data

                this.name = data.name
                this.updated += 1

                console.log(`got some data - requestCourseObject`)
                console.log(data)
                console.log(`name is ${data.name}`)
            })
        })
    }


    /**
     * @function retrieveCourseObject
     * @description Get the course object from the Canvas API and update the object attributes
     */
    retrieveGraphQLObject() {
        console.log(" -----  CanvasApiData::retrieveGraphQLObject")
        if (this.id === -1) {
            throw new Error("CanvasCourse::retrieveCourseObject: Course ID not set");
        }

        let callUrl = `${this.hostName}/api/graphql`;

        console.log("Starting requestCourseObject")

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
            console.log("  canvasApiData:retrieveGraphQLObject: got response")
            console.log(response)
            if (!response.ok) {
                throw new Error(
                    `cc_Controller: requestCourseObject: error ${response.status}`
                );
            }
            response.json().then(data => {
                console.log("    canvasApiData:retrieveGraphQLObject: got data")
                this.courseObject = data.data.course;

                this.name = this.courseObject.name;
                this.updated += 1;

                console.log(this.courseObject)
            })
        })
    }

}

let canvasData: canvasApiData = reactive(new canvasApiData());

export default function getCanvasCourse(): any {
    console.log("canvasApiData:1 getCanvasCourse called")
    if (canvasData.id === -1) {
        console.log("canvasApiData:2 calling parseCurrentURL (we don't have data")
        canvasData.parseCurrentURL();
        console.log("canvasApiData:3 calling retrieveGraphQLObject (we don't have data)")
        canvasData.retrieveGraphQLObject();
        console.log("canvasApiData:4 called retrieveGraphQLObject (we don't have data)")
        console.log("show course object")
        console.log(canvasData.courseObject)
    }
    console.log("canvasApiData:5 getCanvasCourse returning")
    return canvasData;
    //return {};
}