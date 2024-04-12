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
 * @description Define a Javascript class for creating a Canvas group set using the Canvas API
 */

import { reactive } from "vue"
import { GLOBAL_DEBUG } from "./tooltips"

const DEBUG: boolean = false
const FILE_NAME: string = "groupSetCreator.ts"

import { CSRFtoken } from "./canvasApiData"

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
  public self_signup: string = "restricted"
  public auto_leader: string = "first"
  public group_limit: Number = 1
  public sis_group_category_id: string = ""
  public create_group_count: Number = 0
  public split_group_count: string = ""


  /**
   * @constructor
   * @description Create a new CanvasCourse object, optional courseId
   * @todo probably don't need the singleton stuff
   */
  constructor(data: createGroupsetRequest) {
    // loop through the properties of this and assign the values from data
    // if data has a property that matches the name of a property of this
    for (const key in this) {
      if (data.hasOwnProperty(key)) {
        this[key] = data[key]
      }
    }
  }

  /**
   * @method groupSetCreator
   * @description Use the Canvas API to create the prompt
   * @todo 
   *   
   *   
   */

  async groupSetCreator(): Promise<void> {
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
          groupTopics.push({
            topicId: topic.id, // link back to parent topic
            groupId: groupId,
            groupTopicId: groupTopic.id // the group's topic
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
      groupSet.updated += 1
    }

    if (DEBUG && GLOBAL_DEBUG) {
      console.log(`${FILE_NAME} getGroupsResponses: got all responses`)
      console.log(this)
    }
    //this.updated +=1
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
}