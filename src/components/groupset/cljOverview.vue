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
 * @file: cljOverview.vue
 * @description: Show configure options/detail for a specific group set
 * @todo: 
 * - everything
 */

import { ref, watch } from 'vue'
import { TOOLTIPS, GLOBAL_DEBUG } from '../../lib/tooltips'

import { getCanvasData } from '../../lib/canvasApiData'

import cljStatusGroupSet from './overview/cljStatusGroupSet.vue'
import cljStatusStudentGroups from './overview/cljStatusStudentGroups.vue'
import cljStatusDiscussions from './overview/cljStatusDiscussions.vue'

const DEBUG = true
const FILE_NAME = "cljOverview"

if (DEBUG && GLOBAL_DEBUG) {
    console.log(`${FILE_NAME} TOOLTIPS:`)
    console.log(TOOLTIPS)
}

const props = defineProps<{
    groupSetId: string
}>()


const canvasData = getCanvasData();

const groupSetId = ref(props.groupSetId)
const groupSet = ref(canvasData.groupSetsById[groupSetId.value])
const isLearningJournal = ref(canvasData.mightBeLearningJournal(groupSetId.value))
const updateProgress = ref(canvasData.groupSetsById[groupSetId.value].updateProgress)
const promptDataLoaded = ref(groupSet.value.updated>0)

if (DEBUG && GLOBAL_DEBUG) {
    console.log(`${FILE_NAME} groupSetId: ${props.groupSetId}`)
}

// watch for changes in props.groupSetId 
watch(
    () => props.groupSetId,
    (gsId) => {
        if (DEBUG && GLOBAL_DEBUG) {
            console.log(`${FILE_NAME} groupSetId: ${gsId}`)
        }
        groupSetId.value = gsId
        isLearningJournal.value = canvasData.mightBeLearningJournal(groupSetId.value)
        promptDataLoaded.value = canvasData.groupSetsById[groupSetId.value].update
    }
)


// watch groupSet updateProgress 
watch(
    () => canvasData.groupSetsById[groupSetId.value].updateProgress,
    (progress) => {
        if (DEBUG && GLOBAL_DEBUG) {
            console.log(`${FILE_NAME} updateProgress ${progress}`)
        }
        updateProgress.value = progress
    }
)

// Watch for the groupSet prompts data to be loaded 

watch(
    () => canvasData.groupSetsById[groupSetId.value].updated,
    (updated) => {
        if (DEBUG && GLOBAL_DEBUG) {
            console.log(`${FILE_NAME} updated ${updated} groupSetId ${groupSetId.value}`)
            console.log(canvasData)
        }
        promptDataLoaded.value = true
    }
)


</script>

<template>
    <div class="clj-configure">
        <cljStatusGroupSet :groupSetId="groupSetId" />
        <div v-if="isLearningJournal">
            <div v-if="promptDataLoaded">
                <cljStatusStudentGroups :groupSetId="groupSetId" />
                <cljStatusDiscussions :groupSetId="groupSetId" />
            </div>
            <div v-else>
                <sl-progress-ring :value="`${updateProgress}`" class="progress-ring-values"
                    style="--track-width: 0.5rem; --indicator-width: 1rem; margin-bottom: .5rem;">..loading...</sl-progress-ring>
            </div>
        </div>
    </div>
</template>

<style scoped>
.clj-configure {
    margin-left: 1rem;
    margin-top: 0rem;
}
</style>
