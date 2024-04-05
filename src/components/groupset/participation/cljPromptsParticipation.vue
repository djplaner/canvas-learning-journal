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

import { ref, watch } from 'vue'
import { TOOLTIPS, GLOBAL_DEBUG } from '../../../lib/tooltips'
import getCanvasData from '../../../lib/canvasApiData';


const DEBUG = false
const FILE_NAME = "cljPromptsParticipation"

if (DEBUG && GLOBAL_DEBUG ) {
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
    <div class="clj-status-prompts">
        <h3>Prompts participation - {{ groupSet.name }}</h3>

        <p><em>1 tab per prompt</em> - <em>each tab as per file</em></p>

        <sl-tab-group>
                <sl-tab v-for="prompt in groupSet.discussionTopics" key="prompt.id" slot="nav" :panel="`${prompt.title}`"> 
                    {{ prompt.title }}
                </sl-tab>

                <sl-tab-panel v-for="prompt in groupSet.discussionTopics" key="prompt.id" :name="`${prompt.title}`">
                    <h3>{{ prompt.title }}</h3>
                </sl-tab-panel>
            </sl-tab-group>


    </div>
</template>

<style scoped>
.clj-status-prompts {
    background-color: #f0f0f0;
    padding: 1em;
    margin: 1em;
    border-radius: 1em;
}
</style>
