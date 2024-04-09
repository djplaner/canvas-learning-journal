<!--
 Copyright (C) 2024 David Jones
 
 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License as
 published by the Free Software Foundation, either version 3 of the
 License, or (at your option) any later version.
 
 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.
 
 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <https://www.gnu.org/licenses/>.
-->

<script setup>

/**
 * @file: cljPromptParticipationSummary.vue
 * @description: Given ids for a groupset and one of the related discussion topics
 * show a table. Rows showing summary data of each group's participation with their
 * specific prompt related to the discussion topic.
 * 
 */

import dayjs from 'dayjs'

import { ref, watch, computed } from 'vue'
import { TOOLTIPS, GLOBAL_DEBUG } from '../../../lib/tooltips'
import getCanvasData from '../../../lib/canvasApiData'
import cljTopicEntries from './cljTopicEntries.vue'


const DEBUG = true
const FILE_NAME = "cljPromptParticipationDetails"

if (DEBUG && GLOBAL_DEBUG) {
    console.log(`${FILE_NAME} TOOLTIPS:`)
    console.log(TOOLTIPS)
}

const props = defineProps({
    groupSetId: Number,
    topicId: Number
})

if (DEBUG && GLOBAL_DEBUG) {
    console.log(`${FILE_NAME} groupSetId: ${props.groupSetId} topicId: ${props.topicId}`)
}

const promptDataLoaded = ref(false)

const canvasData = getCanvasData();
const groupSet = ref(canvasData.groupSetsById[props.groupSetId])
const topic = ref(canvasData.groupSetsById[props.groupSetId].discussionTopicsById[props.topicId])

console.log("-----------")
console.log("canvasData")
console.log(canvasData)
console.log("groupSet")
console.log(groupSet)
console.log("topic")
console.log(topic)
console.log("-----------")

/**
 * @function getPromptStat
 * @param {Object} groupSet full group set object for groupSetId
 * @param {Number} topicId id of the pro
 * @description given a Group set and a promptId
                        Need to know which prompt to get for the group
                        - for each group, need to get the prompt that matches the topic 
                           and the current group Id 
                        - groupSet whole object
                        - topicId is groupSet.discussionTopicsByTopicId
                          - need to add discussionTopic.topicByGroupId[ ] to get the id of the specific prompt
                        - groupsById[group._id].prompts[promptId]
 */

function getPromptStat(groupId) {
    /**
     * topic is an entry in discussionTopicById
     */
    if (topic.value.hasOwnProperty('promptsByGroupId')) {
        return topic.value.promptsByGroupId[groupId]
    }
    return {}
}

function hasAvatarUrl(user) {
    return user.hasOwnProperty('avatarUrl') && user.avatarUrl !== null
}

/**
 * @function daysSinceLastStudentEntry
 * @param {Number|String} groupId 
 * @description return the number of days since last student id for a specific group for the given topic
 * 
 * the lastStudentEntry property will be a date string or null
 * Null - return n/a - no student entries
 * date string - return number of days since
 */
function daysSinceLastStudentEntry(groupId) {

    let lastStudentEntry = getPromptStat(groupId).stats.lastStudentEntry
    if (lastStudentEntry === null) {
        return "n/a"
    }
    let lastDate = dayjs(lastStudentEntry)
    if (lastDate.isValid()) {
        let now = dayjs()
        return now.diff(lastDate, 'day')
    }
    return "n/a"
}

/**
 * @function: isUnansweredStudentEntry
 * @param {Number|String} groupId
 * @description: return "Y" if the last student entry is older than the last StaffEntry
 */

function isUnansweredStudentEntry(groupId) {
    let lastStudentEntry = getPromptStat(groupId).stats.lastStudentEntry
    let lastStaffEntry = getPromptStat(groupId).stats.lastStaffEntry

    if (lastStudentEntry !== null && lastStaffEntry !== null) {
        let studentDate = dayjs(lastStudentEntry)
        let staffDate = dayjs(lastStaffEntry)
        if (studentDate.isValid() && staffDate.isValid()) {
            if (staffDate.isBefore(studentDate)) {
                return "Y"
            }
        }
    }
    if (lastStudentEntry !== null && lastStaffEntry === null) {
        return "Y"
    }
    return "N"
}

// watch for changes in props.groupSetId 
watch(
    () => [props.groupSetId, props.topicId],
    (groupSetId, topicId) => {
        if (DEBUG && GLOBAL_DEBUG) {
            console.log(`${FILE_NAME} groupSetId: ${groupSetId}`)
        }
        groupSet.value = canvasData.groupSetsById[groupSetId]
        topic.value = groupSet.value.discussionTopicsById[topicId]
    }
)

// Watch for the groupSet prompts data to be loaded 
// @TODO this probably doesn't update anythign once the initial data is loaded
// Will likely need to go beyond a boolean to a datestring

watch(
    () => canvasData.groupSetsById[props.groupSetId].updated,
    (updated) => {
        if (DEBUG && GLOBAL_DEBUG) {
            console.log(`groupset updated ${updated}`)
            console.log(canvasData)
        }
        promptDataLoaded.value = true
    }
)


</script>

<template>
    <div class="clj-prompt-participation-details">
        <h5>Participation by group
            <a class="clj-th-help" target="_blank"
                :href="`${TOOLTIPS.cljPromptParticipationDetails.participationByGroup.url}`">
                <sl-tooltip :content="`${TOOLTIPS.cljPromptParticipationDetails.participationByGroup.content}`">
                    <i class="icon-Solid icon-question clj-small-tooltip"></i>
                </sl-tooltip>
            </a>

        </h5>

        <p>Table where rows are details for each group</p>

        <table class="clj-data-table clj-fixed">
            <thead>
                <tr>
                    <th class="clj-center" style="width:30%">
                        Group
                        <a class="clj-th-help" target="_blank"
                            :href="`${TOOLTIPS.cljPromptParticipationDetails.group.url}`">
                            <sl-tooltip :content="`${TOOLTIPS.cljPromptParticipationDetails.group.content}`">
                                <i class="icon-Solid icon-question clj-small-tooltip"></i>
                            </sl-tooltip>
                        </a>
                    </th>
                    <th class="clj-center">
                        Statistics
                        <a class="clj-th-help" target="_blank"
                            :href="`${TOOLTIPS.cljPromptParticipationDetails.statistics.url}`">
                            <sl-tooltip :content="`${TOOLTIPS.cljPromptParticipationDetails.statistics.content}`">
                                <i class="icon-Solid icon-question clj-small-tooltip"></i>
                            </sl-tooltip>
                        </a>
                    </th>
                    <th class="clj-center">
                        Entries
                        <a class="clj-th-help" target="_blank"
                            :href="`${TOOLTIPS.cljPromptParticipationDetails.entries.url}`">
                            <sl-tooltip :content="`${TOOLTIPS.cljPromptParticipationDetails.entries.content}`">
                                <i class="icon-Solid icon-question clj-small-tooltip"></i>
                            </sl-tooltip>
                        </a>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="group in groupSet.groups" :key="group._id">
                    <!--
                        at this stage group is one of the groups objects for the groupSet
                        
                        - How to loop through each of the members and get all user information
                            - group.members contains an array of memberNode
                              Only contains userId, not any specific detail
                    -->
                    <td class="clj-left clj-cell-top">
                        <div class="clj-group-name">Group: {{ group.name }}</div>
                        <div class="clj-student" v-for="member in group.members" :key="member.user._id">

                            <div class="clj-student-forum">
                                <div class="clj-student-avatar">
                                    <a :href="`${member.user.htmlUrl}`" target="_blank">
                                        <img :src="`${member.user.avatarUrl}`" alt="Avatar for ${member.user.shortName}"
                                            style="width:64px;height:64px;" v-if="hasAvatarUrl(member.user)" />
                                    </a>
                                </div>
                                <a :href="`${member.user.htmlUrl}`" target="_blank">
                                    {{ member.user.shortName }}
                                </a><br />
                                <span v-if="topic.assignment_id !== null">
                                    <a :href="`${canvasData.hostName}/courses/${canvasData.id}/gradebook/speed_grader?assignment_id=${topic.assignment.id}&student_id=${member.user._id}`"
                                        target="_blank">
                                        SpeedGrader
                                    </a>
                                </span>
                                <span v-else>No assignment</span> |
                                <a :href="`${canvasData.hostName}/groups/${group._id}/discussion_topics/${topic.promptsByGroupId[group._id].id}`"
                                    target="_blank">
                                    Forum
                                </a>
                            </div>
                        </div>
                    </td>
                    <td>
                        <table class="clj-fixed">
                            <tbody>
                                <tr>
                                    <th class="clj-center clj-three-quarters">
                                        # students
                                    </th>
                                    <td class="clj-center clj-one-quarter">
                                        {{ group.membersCount }}
                                    </td>
                                </tr>
                                <tr>
                                    <th class="clj-center">
                                        # student entries
                                    </th>
                                    <td class="clj-center">
                                        {{ getPromptStat(group._id).stats.numStudentEntries }}
                                    </td>
                                </tr>
                                <tr>
                                    <th class="clj-center">
                                        # staff entries
                                    </th>
                                    <td class="clj-center">
                                        {{ getPromptStat(group._id).stats.numStaffEntries }}
                                    </td>
                                </tr>
                                <tr>
                                    <th class="clj-center">
                                        days since last student entry
                                    </th>
                                    <td class="clj-center">
                                        {{ daysSinceLastStudentEntry(group._id) }}
                                    </td>
                                </tr>
                                <tr>
                                    <th class="clj-center">
                                        Unanswered student entry?
                                    </th>
                                    <td class="clj-center">
                                        {{ isUnansweredStudentEntry(group._id) }}
                                    </td>
                                </tr>
                                <tr>
                                </tr>
                            </tbody>
                        </table>
                    </td>

                    <td class="clj-cell-top">
                        <cljTopicEntries :topicId="topic.promptsByGroupId[group._id].id" :groupId="group._id" />
                    </td>
                </tr>
            </tbody>
        </table>


    </div>
</template>

<style scoped>
.clj-prompt-participation-details {
    background-color: #f0f0f0;
    padding: 1em;
    border-radius: 1em;
}

sl-tab::part(base) {
    font-size: 0.8rem;
    padding: 0.8rem;
    background: #f0f0f0;
}

.clj-student {
    display: block;
    padding: 0.5rem;
    width: 20rem;
}

.clj-student-forum {
    width: 75%;
    float: left;
}

.clj-speedgrader {
    clear: both;
    font-size: x-small
}

.clj-student-avatar {
    /*    width: 25%; */
    float: right;
    clear: both;
}
</style>
