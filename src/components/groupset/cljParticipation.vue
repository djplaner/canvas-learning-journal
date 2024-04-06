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
 * @file: cljParticipation.vue
 * @description: Show configuration options/detail for a specific group set
 * @todo: 
 * - everything
 */

import { ref, watch } from 'vue'
import { TOOLTIPS, GLOBAL_DEBUG } from '../../lib/tooltips'

import getCanvasData from '../../lib/canvasApiData'


import cljOverviewParticipation from './participation/cljOverviewParticipation.vue'
import cljPromptsParticipation from './participation/cljPromptsParticipation.vue'

const DEBUG = true
const FILE_NAME = "cljParticipation"

const props = defineProps({
    groupSetId: Number
})

if (DEBUG && GLOBAL_DEBUG) {
    console.log(`${FILE_NAME} groupSetId: ${props.groupSetId}`)
}

const canvasData = getCanvasData();

const groupSet = ref(canvasData.groupSetsById[props.groupSetId])
const promptDataLoaded = ref(groupSet.value.updated>0)
const isLearningJournal = ref(canvasData.mightBeLearningJournal(props.groupSetId))
const updateProgress = ref(canvasData.groupSetsById[props.groupSetId].updateProgress)

// watch for changes in props.groupSetId 
watch(
    () => props.groupSetId,
    (groupSetId) => {
        isLearningJournal.value = canvasData.mightBeLearningJournal(groupSetId)
        groupSet.value = canvasData.groupSetsById[groupSetId]
        promptDataLoaded.value = groupSet.value.updated>0
        if (DEBUG && GLOBAL_DEBUG) {
            console.log(`${FILE_NAME} groupSetId: ${groupSetId} promptDataLoaded: ${promptDataLoaded.value}`)
        }
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
    <div class="clj-orchestrate">
        <div v-if="promptDataLoaded">
            <cljOverviewParticipation :groupSetId="groupSet._id" />
            <cljPromptsParticipation :groupSetId="groupSet._id" />
        </div>
        <div v-else>
            <sl-progress-ring :value="`${updateProgress}`" class="progress-ring-values"
                    style="--track-width: 0.5rem; --indicator-width: 1rem; margin-bottom: .5rem;">..loading...</sl-progress-ring>
        </div>
    </div>
</template>

<style scoped>
.clj-orchestrate {
    margin-left: 1rem;
}
</style>
