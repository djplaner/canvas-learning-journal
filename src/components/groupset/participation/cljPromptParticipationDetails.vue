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

<script setup lang="ts">

/**
 * @file: cljPromptParticipationSummary.vue
 * @description: Given ids for a groupset and one of the related discussion topics
 * show a table. Rows showing summary data of each group's participation with their
 * specific prompt related to the discussion topic.
 * 
 */

import dayjs from 'dayjs'
import type { Header, Item } from "vue3-easy-data-table";

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

let headers: Header[]
let items: Item[]



const canvasData = getCanvasData();
const groupSet = ref(canvasData.groupSetsById[props.groupSetId])
const topicObject = ref(groupSet.value.discussionTopicsById[props.topicId])
const promptDataLoaded = ref(canvasData.groupSetsById[props.groupSetId].updated)


console.log('--- direct')
console.log(groupSet.value.discussionTopicsById[props.topicId])
console.log('--- variable')
console.log(topicObject.value)

updateParticipationTable()

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
    if (topicObject.value.hasOwnProperty('promptsByGroupId')) {
        return topicObject.value.promptsByGroupId[groupId]
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
        return ""
    }
    let lastDate = dayjs(lastStudentEntry)
    if (lastDate.isValid()) {
        let now = dayjs()
        return now.diff(lastDate, 'day')
    }
    return ""
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
        topicObject.value = groupSet.value.discussionTopicsById[topicId]
        updateParticipationTable()
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
        updateParticipationTable()
    }
)

function updateParticipationTable(): [Header[], Item[]] {
    headers = [
        { text: "Group", value: "groupName" },
        { text: "# students", value: "numStudents", sortable: true },
        { text: "# student entries", value: "numStudentEntries", sortable: true },
        { text: "# staff entries", value: "numStaffEntries", sortable: true },
        { text: "days since last student entry", value: "daysSinceLastStudentEntry", sortable: true },
        { text: "Unanswered student entry", value: "unansweredStudenEntry", sortable: true },
    ]

    items = []

    if (promptDataLoaded.value) {
        for (const group of groupSet.value.groups) {

            const groupName = `${group.name} <p>some <strong>random</strong> html</p>`
            const groupItem = {
                //groupName: groupName,
                group: groupSet.value.groupsById[group._id],
                groupId: group._id,
                numStudents: group.membersCount,
                numStudentEntries: getPromptStat(group._id).stats.numStudentEntries,
                numStaffEntries: getPromptStat(group._id).stats.numStaffEntries,
                daysSinceLastStudentEntry: daysSinceLastStudentEntry(group._id),
                unansweredStudenEntry: isUnansweredStudentEntry(group._id)
            }
            groupItem.noEntries = (groupItem.numStudentEntries + groupItem.numStaffEntries)===0
            items.push(groupItem)
        }
    }
}

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

        <EasyDataTable :headers="headers" :items="items" alternating border-cell>
            <template #item-groupName="item">
                <div class="clj-group-name">Group: {{ item.group.name }}</div>
                <div class="clj-student" v-for="member in item.group.members" :key="member.user._id">

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
                        <span v-if="topicObject.assignment_id !== null">
                            <a :href="`${canvasData.hostName}/courses/${canvasData.id}/gradebook/speed_grader?assignment_id=${topicObject.assignment.id}&student_id=${member.user._id}`"
                                target="_blank">
                                SpeedGrader
                            </a>
                        </span>
                        <span v-else>No assignment</span> |
                        <a :href="`${canvasData.hostName}/groups/${item.groupId}/discussion_topics/${topicObject.promptsByGroupId[item.groupId].id}`"
                            target="_blank">
                            Forum
                        </a>
                    </div>
                </div>
            </template>
            <template #expand="item">
                <div class="clj-entries">
                    <div v-if="item.noEntries">
                        <p>No entries yet</p>
                    </div>
                    <div v-else>
                        <p><strong>Topic entries</strong></p>
                        <cljTopicEntries :topicId="topicObject.promptsByGroupId[item.groupId].id"
                            :groupId="item.groupId" />
                    </div>
                </div>
            </template>
        </EasyDataTable>

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

.clj-entries {
    padding: 1rem;
}
</style>
