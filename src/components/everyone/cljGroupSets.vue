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
 * @file: cljGroupSets.vue
 * @description: Show configure options/detail for a specific group set
 * - once canvasData has been updated, display info about all available group sets
 * @todo: 
 * - everything
 */

import { ref, watch } from 'vue'
import { TOOLTIPS, GLOBAL_DEBUG } from '../../lib/tooltips'

import getCanvasData from '../../lib/canvasApiData'

const DEBUG = false
const FILE_NAME = "cljGroupSets"

if (DEBUG && GLOBAL_DEBUG) {
    console.log(`${FILE_NAME} TOOLTIPS:`)
    console.log(TOOLTIPS)
}

const canvasData = getCanvasData();

if (DEBUG && GLOBAL_DEBUG) {
    console.log(`${FILE_NAME} 2. just called getCanvasCourse`)
    console.log(canvasData)
}

const numGroupSets = ref(0)
const numStudents = ref(0)
updateDisplay()

watch(
    () => canvasData.updated,
    (updated) => {
        if (DEBUG && GLOBAL_DEBUG) {
            console.log(`${FILE_NAME} canvasData.updated: ${updated}`)
            console.log(canvasData)
        }
        updateDisplay()
        //addCanvasLearningJournalComponents()
    }
)

function updateDisplay() {
    if (DEBUG && GLOBAL_DEBUG) {
        console.log(`${FILE_NAME} updateDisplay`)
    }
    if (canvasData.updated) {
        numGroupSets.value = canvasData.groupSets.length
        numStudents.value = canvasData.students.length
    }
}
console.log("cljGroupSets.vue: canvasData")
console.log(canvasData)


</script>

<template>
    <div class="clj-configure">
        <div class="clj-configure-loading" v-if="!canvasData.updated">
            Loading group set data...
        </div>
        <div class="clj-configure-groupsets" v-else>
            <div v-if="numGroupSets === 0">
                No group sets found
            </div>
            <div v-else>
                <h3>Current groupsets</h3>
                <table class="clj-current-groupsets">
                    <thead>
                        <th>Name</th>
                        <th>Member limit</th>
                        <th>Self signup</th>
                        <th># of groups</th>
                        <th># members / # course students</th>
                        <th>Learning Journal Status </th>
                    </thead>
                    <tbody>
                        <tr v-for="group in canvasData.groupSets" :key="group._id">
                            <td>
                                <a :href="`${canvasData.hostName}/courses/${canvasData.id}/groups#tab-${group._id}`">
                                {{ group.name }}
                                </a>
                            </td>
                            <td class="clj-center">{{ group.memberLimit }}</td>
                            <td class="clj-center">{{ group.selfSignup }}</td>
                            <td class="clj-center">{{ group.numGroups }}</td>
                            <td class="clj-center">{{ group.numMembers }} / {{  numStudents }} </td>
                            <td class="clj-center">{{ group.learning_journal_status }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>


<style scoped>
.clj-configure {
    margin: 1em;
    padding: 1em;
}

table.clj-current-groupsets {
    width: 100%;
}

.clj-configure-groupsets thead {
    background-color: #cccccc;
}

.clj-current-groupsets th {
    text-align: left;
    border-bottom: solid 2px #d8d8d8;
    margin: 1em;
    padding: 0.5em;
    font-size: smaller;
}

.clj-current-groupsets td {
    font-size: smaller;
    padding: 0.5em;
}

.clj-configure-groupsets tbody tr {
    &:nth-child(odd) {
        background-color: #f8f8f8;
    }

    &:hover {
        background-color: #f0f0f0;
    }
}

td.clj-center {
    text-align: center;
}
</style>
