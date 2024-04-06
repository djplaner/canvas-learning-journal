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
 * show some summary information
 * 
 * - any points possible for the discussion topic 
 *    i.e. is it linked to an assignment
 *      discussionTopic.assignment  property
 *          name, html_url, points_possible, due_date
 *      
 * - summary information  
 *    # groups with 0 student entries
 *    # groups with 0 staff entries
 *    total # student entries
 */

import { ref, watch } from 'vue'
import { TOOLTIPS, GLOBAL_DEBUG, formatDate } from '../../../lib/tooltips'
import getCanvasData from '../../../lib/canvasApiData';


const DEBUG = false
const FILE_NAME = "cljPromptParticipationSummary"

if (DEBUG && GLOBAL_DEBUG) {
    console.log(`${FILE_NAME} TOOLTIPS:`)
    console.log(TOOLTIPS)
}

const props = defineProps({
    groupSetId: Number,
    topicId: Number
})

if (DEBUG && GLOBAL_DEBUG) {
    console.log(`${FILE_NAME} groupSetId: ${props.groupSetId} topicId ${props.topicId}`)
}

const promptDataLoaded = ref(false)

const canvasData = getCanvasData();
const groupSet = ref(canvasData.groupSetsById[props.groupSetId])
const topic = ref(canvasData.groupSetsById[props.groupSetId].discussionTopicsById[props.topicId])
const assignmentExists = ref(topic.value.assignment !== undefined)

console.log(`topicId: ${props.topicId}`)
console.log(groupSet.value)


// watch for changes in props.groupSetId 
watch(
    () => [props.groupSetId, props.topicId],
    (groupSetId, topicId) => {
        if (DEBUG && GLOBAL_DEBUG) {
            console.log(`${FILE_NAME} groupSetId: ${groupSetId}`)
        }
        groupSet.value = canvasData.groupSetsById[groupSetId]
        topic.value = groupSet.value.discussionTopicsById[topicId]
        assignmentExists.value = topic.value.assignment !== undefined
    }
)

// Watch for the groupSet prompts data to be loaded 

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
    <div class="clj-participation-summary">

        <h4>Topic: <a :href="`${topic.html_url}`" target="_blank">{{ topic.title }}</a></h4>

        <div class="clj-row">
            <div class="clj-col">
                <table class="clj-data-table">
                    <tbody>
                        <tr>
                            <th>
                                Topic title
                                <a class="clj-th-tooltip" target="_blank"
                                    :href="`${TOOLTIPS.cljPromptParticipationSummary.title.url}`">
                                    <sl-tooltip :content="`${TOOLTIPS.cljPromptParticipationSummary.title.content}`">
                                        <i class="icon-Solid icon-question clj-small-tooltip"></i>
                                    </sl-tooltip>
                                </a>
                            </th>
                            <td class="clj-center">
                                {{ groupSet.name }}
                            </td>
                        </tr>
                        <tr>
                            <th>
                                # 0 student entries
                                <a class="clj-th-tooltip" target="_blank"
                                    :href="`${TOOLTIPS.cljPromptParticipationSummary.num0StudentEntries.url}`">
                                    <sl-tooltip :content="`${TOOLTIPS.cljPromptParticipationSummary.num0StudentEntries.content}`">
                                        <i class="icon-Solid icon-question clj-small-tooltip"></i>
                                    </sl-tooltip>
                                </a>
                                <br />
                                < 7 days<br />
                                ever
                            </th>
                            <td class="clj-right">
                                &nbsp;<br />
                                {{ topic.stats.numNoStudentEntriesLast7 }}<br />
                                {{ topic.stats.numNoStudentEntries }}
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Total # student entries
                                <a class="clj-th-tooltip" target="_blank"
                                    :href="`${TOOLTIPS.cljPromptParticipationSummary.totalStudentEntries.url}`">
                                    <sl-tooltip :content="`${TOOLTIPS.cljPromptParticipationSummary.totalStudentEntries.content}`">
                                        <i class="icon-Solid icon-question clj-small-tooltip"></i>
                                    </sl-tooltip>
                                </a>
                            </th>
                            <td class="clj-right">
                                {{ topic.stats.numStudentEntries }}
                            </td>
                        </tr>
                        <tr>
                            <th>
                                # 0 staff entries
                                <a class="clj-th-tooltip" target="_blank"
                                    :href="`${TOOLTIPS.cljPromptParticipationSummary.num0StaffEntries.url}`">
                                    <sl-tooltip :content="`${TOOLTIPS.cljPromptParticipationSummary.num0StaffEntries.content}`">
                                        <i class="icon-Solid icon-question clj-small-tooltip"></i>
                                    </sl-tooltip>
                                </a>
                                <br />
                                < 7 days<br />
                                ever
                            </th>
                            <td class="clj-right">
                                &nbsp;<br />
                                {{ topic.stats.numNoStaffEntriesLast7 }}<br />
                                {{ topic.stats.numNoStaffEntries }}
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Total # staff entries
                                <a class="clj-th-tooltip" target="_blank"
                                    :href="`${TOOLTIPS.cljPromptParticipationSummary.totalStaffEntries.url}`">
                                    <sl-tooltip :content="`${TOOLTIPS.cljPromptParticipationSummary.totalStaffEntries.content}`">
                                        <i class="icon-Solid icon-question clj-small-tooltip"></i>
                                    </sl-tooltip>
                                </a>
                            </th>
                            <td class="clj-right">
                                {{ topic.stats.numStaffEntries }}
                            </td>
                        </tr>

                    </tbody>
                </table>

            </div>
            <div class="clj-col">
                <table class="clj-data-table clj-fixed">
                    <tbody>
                        <tr>
                            <th class="clj-half">
                                Assessable?
                                <a class="clj-th-tooltip" target="_blank"
                                    :href="`${TOOLTIPS.cljPromptParticipationSummary.assessable.url}`">
                                    <sl-tooltip :content="`${TOOLTIPS.cljPromptParticipationSummary.assessable.content}`">
                                        <i class="icon-Solid icon-question clj-small-tooltip"></i>
                                    </sl-tooltip>
                                </a>
                            </th>
                            <td class="clj-center clj-half">
                                <div v-if="assignmentExists">Yes
                                </div>
                                <div v-else>No</div>
                            </td>
                        </tr>
                        <tr v-if="assignmentExists">
                            <th>
                                Points possible
                                <a class="clj-th-tooltip" target="_blank"
                                    :href="`${TOOLTIPS.cljPromptParticipationSummary.pointsPossible.url}`">
                                    <sl-tooltip :content="`${TOOLTIPS.cljPromptParticipationSummary.pointsPossible.content}`">
                                        <i class="icon-Solid icon-question clj-small-tooltip"></i>
                                    </sl-tooltip>
                                </a>

                            </th>
                            <td class="clj-center">
                                {{ topic.assignment.points_possible }}
                            </td>
                        </tr>
                        <tr v-if="assignmentExists">
                            <th>
                                Due date
                                <a class="clj-th-tooltip" target="_blank"
                                    :href="`${TOOLTIPS.cljPromptParticipationSummary.dueDate.url}`">
                                    <sl-tooltip :content="`${TOOLTIPS.cljPromptParticipationSummary.dueDate.content}`">
                                        <i class="icon-Solid icon-question clj-small-tooltip"></i>
                                    </sl-tooltip>
                                </a>
                            </th>
                            <td class="clj-center">
                                {{ formatDate(topic.assignment.due_at, "n/a") }}
                            </td>
                        </tr>
                        <tr v-if="assignmentExists">
                            <th>
                                Needs grading
                                <a class="clj-th-tooltip" target="_blank"
                                    :href="`${TOOLTIPS.cljPromptParticipationSummary.needsGrading.url}`">
                                    <sl-tooltip :content="`${TOOLTIPS.cljPromptParticipationSummary.needsGrading.content}`">
                                        <i class="icon-Solid icon-question clj-small-tooltip"></i>
                                    </sl-tooltip>
                                </a>
                            </th>
                            <td class="clj-center">
                                {{ topic.assignment.needs_grading_count }}
                            </td>
                        </tr>
                    </tbody>
                </table>


            </div>
        </div>
    </div>
</template>

<style scoped>
.clj-participation-summary {
    background-color: #f0f0f0;
    padding: 1em;
    /*margin: 1em; */
    border-radius: 1em;
}
</style>
