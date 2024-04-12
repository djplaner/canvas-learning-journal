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
 * @file promptCreator.ts
 * @description Define a Javascript class for creating a new prompt for a groupset for a course via the Canvas API
 */

import { reactive } from "vue"
import { GLOBAL_DEBUG } from "./tooltips"

const DEBUG: boolean = false
const FILE_NAME: string = "promptCreator.ts"

import { CSRFtoken } from "./canvasApiData"

interface createTopicRequest {
  title: string 
  message: string
  discussion_type: string
  published: boolean
//  assignment: Assignment @TODO
  group_category_id: string

  delayed_post_at: string
  allow_rating: boolean
  lock_at: string
  podcast_enabled: boolean
  podcast_has_student_posts: boolean
  require_initial_post: boolean
  is_announcement: boolean
  pinned: boolean
  position_after: string
  only_graders_can_rate: boolean
  sort_by_rating: boolean
  attachment: string
  specific_sections: string
}


class promptCreator {
  // required for a new prompt
  public title: string = ""
  public message: string = ""
  public discussion_type: string = "threaded"
  public published: boolean = true
  public assignment: Assignment // TODO to make it an assignment need to pass more parameters
  public group_category_id: string = ""

  // can be created via other means
  public delayed_post_at: string = ""
  public allow_rating: boolean = true
  public lock_at: string = ""
  public podcast_enabled: boolean = false
  public podcast_has_student_posts: boolean = false
  public require_initial_post: boolean = false
  public is_announcement: boolean = false
  public pinned: boolean = false
  public position_after: string = ""
  public only_graders_can_rate: boolean = false
  public sort_by_rating: boolean = false
  public attachment: string = ""
  public specific_sections: string


  /**
   * @constructor
   * @description Create a new CanvasCourse object, optional courseId
   * @todo probably don't need the singleton stuff
   */
  constructor(data: createTopicRequest) {
    // copy the data into the object
    for (const key in data) {
      this[key] = data[key]
    }
  }

  /**
   * @method promptCreator
   * @description Use the Canvas API to create the prompt - synchronously?
   * @todo 
   *   
   *   
   */

  async promptCreator(): Promise<void> {
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