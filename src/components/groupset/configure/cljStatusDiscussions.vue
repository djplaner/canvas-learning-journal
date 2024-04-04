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
 * @file: cljStatusDiscussions.vue
 * @description: Show a table of status information for each discussion topic that's been
 * assigned to the group set and show related statistics
 * 
 * - loop through canvasApiData.groupSetsById[groupSetId].discussionTopics
 * - show information from the "status" property for the discussionTopic
 *       - it will have to have been calculated from the status properties of each of the
 *         groupset's group discussion topics - which will need to be calculated first
 * @todo: 
 * - everything
 */

import { ref, watch } from 'vue'
import { TOOLTIPS, GLOBAL_DEBUG } from '../../../lib/tooltips'
import getCanvasData from '../../../lib/canvasApiData';

const DEBUG = true
const FILE_NAME = "cljStatusDiscussions"

if (DEBUG && GLOBAL_DEBUG) {
    console.log(`${FILE_NAME} TOOLTIPS:`)
    console.log(TOOLTIPS)
}

const props = defineProps({
    groupSetId: Number
})

if (DEBUG && GLOBAL_DEBUG) {
    console.log(`${FILE_NAME} groupSetId: ${props.groupSetId}`)
}

const promptDataLoaded = ref(false)

const canvasData = getCanvasData();
const groupSet = ref(canvasData.groupSetsById[props.groupSetId])
const isLearningJournal = ref(canvasData.mightBeLearningJournal(props.groupSetId))
const updateProgress = ref(canvasData.groupSetsById[props.groupSetId].updateProgress)

// watch for changes in props.groupSetId 
watch(
    () => props.groupSetId,
    (groupSetId) => {
        if (DEBUG && GLOBAL_DEBUG) {
            console.log(`${FILE_NAME} groupSetId: ${groupSetId}`)
        }
        isLearningJournal.value = canvasData.mightBeLearningJournal(groupSetId)
        groupSet.value = canvasData.groupSetsById[groupSetId]
    }
)

// watch groupSet updateProgress 
watch(
    () => canvasData.groupSetsById[props.groupSetId].updateProgress,
    (progress) => {
        if (DEBUG && GLOBAL_DEBUG) {
            console.log(`groupset updateProgress ${progress}`)
        }
        updateProgress.value = progress
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
    <div class="clj-status-discussions" v-if="isLearningJournal">
        <h3>Discussions Statistics
            <a class="clj-th-help" target="_blank" :href="`${TOOLTIPS.cljStatusDiscussions.title.url}`">
                <sl-tooltip :content="`${TOOLTIPS.cljStatusDiscussions.title.content}`">
                    <i class="icon-Solid icon-question clj-small-tooltip"></i>
                </sl-tooltip>
            </a>
        </h3>

        <div v-if="promptDataLoaded">
            <table class="clj-data-table">
                <thead>
                    <tr>
                        <th>
                            Topic Title
                            <a class="clj-th-help" target="_blank"
                                :href="`${TOOLTIPS.cljStatusDiscussions.topicTitle.url}`">
                                <sl-tooltip :content="`${TOOLTIPS.cljStatusDiscussions.topicTitle.content}`">
                                    <i class="icon-Solid icon-question clj-small-tooltip"></i>
                                </sl-tooltip>
                            </a>
                        </th>
                        <th>
                            Num prompts
                            <a class="clj-th-help" target="_blank"
                                :href="`${TOOLTIPS.cljStatusDiscussions.numPrompts.url}`">
                                <sl-tooltip :content="`${TOOLTIPS.cljStatusDiscussions.numPrompts.content}`">
                                    <i class="icon-Solid icon-question clj-small-tooltip"></i>
                                </sl-tooltip>
                            </a>
                        </th>
                        <th>
                            # without student entries
                            <a class="clj-th-help" target="_blank"
                                :href="`${TOOLTIPS.cljStatusDiscussions.numNoStudentEntries.url}`">
                                <sl-tooltip :content="`${TOOLTIPS.cljStatusDiscussions.numNoStudentEntries.content}`">
                                    <i class="icon-Solid icon-question clj-small-tooltip"></i>
                                </sl-tooltip>
                            </a>
                        </th>
                        <th>
                            # without staff entries
                            <a class="clj-th-help" target="_blank"
                                :href="`${TOOLTIPS.cljStatusDiscussions.numNoStaffEntries.url}`">
                                <sl-tooltip :content="`${TOOLTIPS.cljStatusDiscussions.numNoStaffEntries.content}`">
                                    <i class="icon-Solid icon-question clj-small-tooltip"></i>
                                </sl-tooltip>
                            </a>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="topic in groupSet.discussionTopics" :key="topic.id">
                        <td>
                            <a target="_blank"
                                :href="`${canvasData.hostName}/courses/${canvasData.id}/discussion_topics/${topic.id}`">
                                {{ topic.title }}
                            </a>
                        </td>
                        <td>
                            {{ topic.topic_children.length }}
                        </td>
                        <td>
                            {{ topic.stats.numNoStudentEntries }}
                        </td>
                        <td>
                            {{ topic.stats.numNoStaffEntries }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-else>
            <sl-progress-ring :value="`${updateProgress}`" class="progress-ring-values"
                style="--track-width: 0.5rem; --indicator-width: 1rem; margin-bottom: .5rem;">..loading...</sl-progress-ring>

        </div>
    </div>
</template>

<style scoped>
.clj-status-discussions {
    background-color: #f0f0f0;
    padding: 1em;
    margin: 1em;
    border-radius: 1em;
}
</style>
