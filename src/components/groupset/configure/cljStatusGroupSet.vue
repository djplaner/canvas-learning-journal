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
 * @file: cljStatusGroupSet.vue
 * @description: Show status for the current group set
 * @todo: 
 * - everything
 */

import { ref, watch } from 'vue'

import { TOOLTIPS, GLOBAL_DEBUG } from '../../../lib/tooltips'

import getCanvasData from '../../../lib/canvasApiData';

const DEBUG = true
const FILE_NAME = "cljStatusGroupSet"

if (DEBUG && GLOBAL_DEBUG) {
    console.log(`${FILE_NAME} TOOLTIPS:`)
    console.log(TOOLTIPS)
}

const props = defineProps({
    groupSetId: Number
})

const canvasData = getCanvasData();
// @todo use groupSetId to get specific data

const groupSet = ref({})
const numStudents = ref(0)

if (DEBUG && GLOBAL_DEBUG) {
    console.log(`${FILE_NAME} groupSetId: ${props.groupSetId}`)
}

watch(
    () => canvasData.updated,
    (updated) => {
        if (DEBUG && GLOBAL_DEBUG) {
            console.log(`${FILE_NAME} canvasData.updated: ${updated}`)
            console.log(canvasData)
        }
        updateDisplay()
    }
)

function updateDisplay() {
    if (DEBUG && GLOBAL_DEBUG) {
        console.log(`${FILE_NAME} updateDisplay`)
        console.log(`updated is ${canvasData.updated}`)
    }
    if (canvasData.updated) {
        groupSet.value = canvasData.groupSetsById[props.groupSetId]
        numStudents.value = canvasData.students.length
        console.log("------")
        console.log(groupSet.value)
    }
}


</script>

<template>
    <div class="clj-status-group-set">

        <div class="clj-two-column-grid">
            <div class="clj-learning-journal-info">
                <h3>Learning Journal</h3>

            </div>
            <div class="clj-group-set-info">
                <h3>Group Set Status</h3>
                <table class="clj-data-table">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <td>
                                <a :href="`${canvasData.hostName}/courses/${canvasData.id}/groups#tab-${groupSetId}`">
                                    {{ groupSet.name }}
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <th>Self signup</th>
                            <td class="clj-center">{{ groupSet.selfSignup }}</td>
                        </tr>
                        <tr>
                            <th>Member limit</th>
                            <td class="clj-center">{{ groupSet.memberLimit }}</td>
                        </tr>
                        <tr>
                            <th># of groups</th>
                            <td class="clj-center">{{ groupSet.numGroups }}</td>
                        </tr>
                        <tr>
                            <th># members / # course students</th>
                            <td class="clj-center">{{ groupSet.numMembers }} / {{ numStudents }} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped>
.clj-status-group-set {
    background-color: #f0f0f0;
    padding: 1em;
    margin: 1em;
    border-radius: 1em;
}
</style>