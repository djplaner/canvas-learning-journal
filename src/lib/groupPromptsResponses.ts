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
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

/**
 * @class groupPromptsResponses
 * @description Given a list of topic ids (for a group's topics/prompts)
 * For each topic get the single 
 * Get single topic - for the basic discussion topic object
 *   canvasData get the topic for the group set parent, but not for group version
 *  GET /api/v1/courses/:course_id/discussion_topics/:topic_id
 * Get the full topic - will include all entries
 *  GET /api/v1/courses/:course_id/discussion_topics/:topic_id/view 
 */

import { reactive } from "vue"
import { GLOBAL_DEBUG } from "./tooltips"

import { CSRFtoken } from "./canvasApiData"

const DEBUG: boolean = true
const FILE_NAME: string = "groupPromptsResponses.ts"

export class groupPromptsResponses {
    // array of group ids belonging to the group
    public topicIds = Array<number>
    // object with properties matching group ids belonging to the group set 
    // of Canvas API discussion objects specific to group set
    // Based on the discussions passed in from canvasApiData.ts
    public prompts: groupSetPromptResponses
    // object with properties matching the prompt topic ids containing information about
    // all the entries/responses in that group's topic 
    public responses: any

    constructor(groupSetId: number, groupIds?: Array<number>) {
        this.groupSetId = groupSetId
        this.groupIds = groupIds || []
        this.prompts = {}
    }

    /**
     * @method getGroupSetPromptsResponses
     * @description Retrieve all prompts and responses for a group set
     * @param groupSetId 
     */

    async getGroupSetPromptsResponses() {
    }
}


