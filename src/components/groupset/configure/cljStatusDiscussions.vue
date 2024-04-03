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
 * @description: Show status for the current group set
 * @todo: 
 * - everything
 */

 import { ref, watch } from 'vue'
 import { TOOLTIPS, GLOBAL_DEBUG } from '../../../lib/tooltips'
 import getCanvasData from '../../../lib/canvasApiData';

const DEBUG = false
const FILE_NAME = "cljStatusDiscussions"

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

const canvasData = getCanvasData();

const isLearningJournal = ref(canvasData.mightBeLearningJournal(props.groupSetId))

// watch for changes in props.groupSetId 
watch(
    () => props.groupSetId,
    (groupSetId) => {
        if (DEBUG && GLOBAL_DEBUG) {
            console.log(`${FILE_NAME} groupSetId: ${groupSetId}`)
        }
        isLearningJournal.value = canvasData.mightBeLearningJournal(groupSetId)
    }
)



</script>

<template>
    <div class="clj-status-discussions" v-if="isLearningJournal">
        <h3>Discussions Status</h3>
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
