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
 * Data gathering
 * - get discussion topic data, including all entries for the current group set
 * Stats analysis
 * - Analyse each groups contributions to identify
 *      - groups with no student entries (ever and in last 7 days)
 *      - groups with no teacher entries (ever and in last 7 days)
 */

import { ref, watch } from 'vue'
import { TOOLTIPS, GLOBAL_DEBUG } from '../../lib/tooltips'

import cljStatusLearningJournal from './cljStatusLearningJournal.vue'

import getCanvasData from '../../lib/canvasApiData'

const DEBUG = true
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
        console.log(canvasData)
        console.debug()
    }
    if (canvasData.updated) {
        numGroupSets.value = canvasData.groupSets.length
        numStudents.value = canvasData.students.length
    }
}

if (DEBUG && GLOBAL_DEBUG) {
    console.log("cljGroupSets.vue: numGroupSets")
    console.log(numGroupSets.value)
    console.log("cljGroupSets.vue: numStudents")
    console.log(numStudents.value)
}


</script>

<template>
    <div class="clj-configure">
        <h3>Current groupsets
            <a target="_blank" :href="`${TOOLTIPS.cljGroupSets.current_group_sets.url}`">
                <sl-tooltip>
                    <div slot="content">
                        {{ TOOLTIPS.cljGroupSets.current_group_sets.content }}
                    </div>
                    <i class="icon-Solid icon-question"></i>
                </sl-tooltip>
            </a>
        </h3>

        <div class="clj-configure-loading" v-if="!canvasData.updated">
            Loading group set data...
        </div>
        <div class="clj-configure-groupsets" v-else>
            <div v-if="numGroupSets === 0">
                No group sets found
            </div>
            <div v-else>

                <table class="clj-data-table">
                    <thead>
                        <th>Name</th>
                        <th>Self signup</th>
                        <th>Member limit</th>
                        <th># prompts</th>
                        <th># of groups</th>
                        <th># no group students</th>
                        <th>Learning Journal Status </th>
                    </thead>
                    <tbody>
                        <tr v-for="group in canvasData.groupSets" :key="group._id">
                            <td>
                                <a :href="`${canvasData.hostName}/courses/${canvasData.id}/groups#tab-${group._id}`">
                                    {{ group.name }}
                                </a>
                            </td>
                            <td class="clj-center">{{ group.selfSignup }}</td>
                            <td class="clj-center">{{ group.memberLimit }}</td>
                            <td class="clj-center">{{ group.numPrompts }}</td>
                            <td class="clj-center">{{ group.numGroups }}</td>
                            <td class="clj-center">{{ numStudents - group.numStudentsMembersOfGroups }} </td>
                            <td class="clj-center"> 
                                {{ group._id }}
                                <!-- <cljStatusLearningJournal :groupSetId="group._id" /> -->
                            </td>
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
</style>
