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
 * @file canvasCourse.ts
 * @description Encapsulate information about a Canvas course, including functions to update information via the Canvas API. 
 */

import { ref } from "vue";

/**
 * @function getCanvasInformation 
 * @description Get the course ID and hostname from the current URL.
 * @returns {object} An object containing the course ID and hostname.
 */

export function parseCurrentURL(): { courseId: number, hostName: string } {
    const documentUrl = new URL(document.URL);
    const hostName: string = documentUrl.origin;
    let courseId: number = -1;

    const courseIdRegex = /\/courses\/(\d+)\//;
    const courseIdMatch = documentUrl.pathname.match(courseIdRegex);
    if (courseIdMatch) {
        courseId = parseInt(courseIdMatch[1], 10);
    }

    console.log(`CanvasCourXXXXse::parseCurrentURL: Hostname: ${hostName}; Course ID: ${courseId}`);

    return { courseId, hostName };
}

/**
 * @function getCourseObject
 * @description Get the course object from the Canvas API.
 * @param {hostName} - The hostname of the Canvas instance.
 * @param {number} courseId - The course ID.
 * @param {boolean} [includeModules] - Whether to include the modules in the course object. 
 * @returns {object} The course object.
 */

export async function getCourseObject(
    hostName: string, courseId: number, includeModules: boolean = false
): Promise<any> {

    const callUrl = `${hostName}/api/v1/courses/${courseId}`;

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
                `canvasApi:getCourseObject: error ${response.status}`
            );
        }

        const data: any = await response.json();
        console.log(`got some data`)
        console.log(data)

        if (!data) {
            throw new Error(`canvasApi:getCourseObject: no data returned`);
        }

        if (includeModules) {
            const modules = await getCourseModules(hostName, courseId);
            data.modules = modules;
        }
        return data;
    } catch (error) {
        console.error(`canvasApi:getCourseObject: error ${error}`);
        throw error;
    }
}

function getCourseModules(hostName: string, courseId: number): Promise<any> {
    const callUrl = `${hostName}/api/v1/courses/${courseId}/modules?include=items&per_page=1000`;

    return fetch(callUrl, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    }).then(response => {
        if (!response.ok) {
            throw new Error(
                `canvasApi:getCourseModules: error ${response.status}`
            );
        }
        return response.json();
    });
}

/*export function getCourseName(courseId: number, name: ref<string>) {
    const HOSTNAME = "https://canvas.instructure.com";
    let callUrl = `${HOSTNAME}/api/v1/courses/${courseId}`;

    console.log("Starting requestCourseName")

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
        console.log("Got a response")
        console.log(response)
        response.json().then(data => {
            console.log(`got some data - updateCourseName`)
            console.log(data)
            console.log(`name is ${data.name}`)
            console.log("What is name")
            console.log(name)
            // if there's an attribute called name
            //        console.log(`Course name is ${data.name}`);
            name.value = data.name;
        })
    })

} */
