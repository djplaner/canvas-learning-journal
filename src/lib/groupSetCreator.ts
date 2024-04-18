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
 * @file groupSetCreator.ts
 * @description Class for creating a Canvas group set (and optionally) private student groups for a student cohort using the Canvas API
 */

import { GLOBAL_DEBUG } from "./tooltips"

const DEBUG: boolean = true
const FILE_NAME: string = "groupSetCreator.ts"

import { CSRFtoken, getCanvasData, canvasApiData } from "./canvasApiData"

export type { createGroupsetRequest }
interface createGroupsetRequest {
  name: string
  self_signup: string
  auto_leader: string 
  group_limit: Number 
  sis_group_category_id: string
  create_group_count: Number
  split_group_count: string
}


export class groupSetCreator {
  public name : string = ""
  public createGroups: boolean = false
  public sections: string[] = []

  // tmp request data
  public newGroupSet: any = {}

  // progress information
  // - define some variables that will allow components to represent the progress
  //   of group creation process
  // Likely to need
  // - complete - flag to indicate if the process is successfully completed
  // - errors - string array detailing any errors that occurred (if any)
  // - progressDetails - sting array detailing the progress of the process ??
  // - progress - number representing the progress of the process ??

  public complete: boolean = false
  public errors: string[] = []
  public progressDetails: string[] = []
  public progress: number = 0

  private canvasData: canvasApiData = getCanvasData()

  /**
   * @constructor
   * @param {string} groupSetName - name of the group set to be created
   * @param {boolean} createGroups - whether to create groups within the group set
   * @param {string} sections - the sections to create groups for, a comma separated list of section names
   * @description Create a new CanvasCourse object, optional courseId
   * @todo probably don't need the singleton stuff
   */
  constructor(groupSetName: string, createGroups: boolean = false, sections: string = "") {

    this.name = groupSetName
    this.createGroups = createGroups
    // split the sections string into an array
    this.sections = sections.split(",")

    // progress information
    this.complete = false
    this.errors = []
    this.progressDetails = []
    this.progress = 0


    // do the work
    this.create()
  }

  /**
   * @method create
   * @description Use the Canvas API to create the group set
   * @todo 
   *   
   *   
   */

  create()  {

    this.createGroupSet().then(() => {
      this.complete = true
      console.log(`${FILE_NAME} create: group set created`)
      console.log(this.newGroupSet)
    })
  }

  /**
   * @method createGroupSet
   * @description  use the Canvas API to create the group set 
   * POST /api/v1/courses/:course_id/group_categories
   */

  async createGroupSet(): Promise<any> {
    const callUrl = `${this.canvasData.hostName}/api/v1/courses/${this.canvasData.id}/group_categories`;

    if (DEBUG && GLOBAL_DEBUG) {
      console.log(`${FILE_NAME} getResponses: callUrl ${callUrl}`)
    }

    const body: string = JSON.stringify({
        name: this.name,
        self_signup: "restricted",
//        auto_leader: "random",
//        group_limit: 1,
        sis_group_category_id: null,
        create_group_count: 0,
        split_group_count: null
    })


    try {
      const response = await fetch(callUrl, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          'X-CSRF-Token': CSRFtoken()
        },
        body: body
      });
      if (!response.ok) {
        throw new Error(
          `${FILE_NAME} getResponses: error ${response.status}`
        );
      }

      const data: any = await response.json();
      if (!data) {
        throw new Error(`${FILE_NAME}:getCourseObject: no data returned`);
      }
      this.newGroupSet= data

      //        if (includeModules) {
      //           const modules = await getCourseModules(hostName, courseId);
      //          data.modules = modules;
      //     } 
    } catch (error) {
      console.error(`canvasApi:getCourseObject: error ${error}`);
      throw error;
    } 
  }
}