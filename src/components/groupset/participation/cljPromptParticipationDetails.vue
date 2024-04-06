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
 */


import { ref, watch } from 'vue'
import { TOOLTIPS, GLOBAL_DEBUG } from '../../../lib/tooltips'
import getCanvasData from '../../../lib/canvasApiData';


const DEBUG = false
const FILE_NAME = "cljPromptParticipationDetails"

if (DEBUG && GLOBAL_DEBUG ) {
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
const prompt = ref(canvasData.groupSetsById[props.groupSetId].discussionTopicsById[props.topicId])


// watch for changes in props.groupSetId 
watch(
    () => [props.groupSetId, props.topicId ],
    (groupSetId,topicId) => {
        if (DEBUG && GLOBAL_DEBUG) {
            console.log(`${FILE_NAME} groupSetId: ${groupSetId}`)
        }
        groupSet.value = canvasData.groupSetsById[groupSetId]
        prompt.value = groupSet.value.discussionTopicsById[topicId]
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
        <h4>Participation by group</h4>

            <p>Table where rows are details for each group</p>

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
</style>
