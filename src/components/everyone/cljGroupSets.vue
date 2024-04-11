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

import { ref, watch, computed } from 'vue'

import { TOOLTIPS, GLOBAL_DEBUG } from '../../lib/tooltips'

import cljStatusLearningJournal from './cljStatusLearningJournal.vue'
import cljCreateGroups from '../create/cljCreateGroups.vue'
import cljCreatePrompt from '../create/cljCreatePrompt.vue'

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
        console.log(canvasData)
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

/*function studentsWithoutGroups(numStudents,numStudentsInGroups,returnBoolean=false)  {
    if (returnBoolean) {
        return numStudents - numStudentsInGroups > 0
    }
    return numStudents - numStudentsInGroups
}*/

const studentsWithoutGroups = computed(() => {
    return (numStudents,numStudentsInGroups,returnBoolean=false) => {
        if (returnBoolean) {
            return numStudents - numStudentsInGroups > 0
        }
        return numStudents - numStudentsInGroups
    }
})


</script>

<template>
    <div class="clj-configure">
        <h3>Current groupsets
            <a target="_blank" :href="`${TOOLTIPS.cljGroupSets.currentGroupSets.url}`">
                <sl-tooltip>
                    <div slot="content">
                        {{ TOOLTIPS.cljGroupSets.currentGroupSets.content }}
                    </div>
                    <i class="icon-Solid icon-question"></i>
                </sl-tooltip>
            </a>
        </h3>

        <div class="clj-configure-groupsets">
            <div v-if="numGroupSets === 0">
                No group sets found
            </div>
            <div v-else>
                <table class="clj-data-table">
                    <thead>
                        <th>
                            Name
                            <a class="clj-th-help" target="_blank" :href="`${TOOLTIPS.cljGroupSets.name.url}`">
                                <sl-tooltip :content="`${TOOLTIPS.cljGroupSets.name.content}`">
                                    <i class="icon-Solid icon-question clj-small-tooltip"></i>
                                </sl-tooltip>
                            </a>
                        </th>
                        <th>
                            Self signup
                            <a class="clj-th-help" target="_blank" :href="`${TOOLTIPS.cljGroupSets.selfSignup.url}`">
                                <sl-tooltip :content="`${TOOLTIPS.cljGroupSets.selfSignup.content}`">
                                    <i class="icon-Solid icon-question clj-small-tooltip"></i>
                                </sl-tooltip>
                            </a>

                        </th>
                        <th>
                            Member limit
                            <a class="clj-th-help" target="_blank" :href="`${TOOLTIPS.cljGroupSets.memberLimit.url}`">
                                <sl-tooltip :content="`${TOOLTIPS.cljGroupSets.memberLimit.content}`">
                                    <i class="icon-Solid icon-question clj-small-tooltip"></i>
                                </sl-tooltip>
                            </a>

                        </th>
                        <th># prompts
                            <a class="clj-th-help" target="_blank" :href="`${TOOLTIPS.cljGroupSets.numPrompts.url}`">
                                <sl-tooltip :content="`${TOOLTIPS.cljGroupSets.numPrompts.content}`">
                                    <i class="icon-Solid icon-question clj-small-tooltip"></i>
                                </sl-tooltip>
                            </a>

                        </th>
                        <th># of groups
                            <a class="clj-th-help" target="_blank" :href="`${TOOLTIPS.cljGroupSets.numGroups.url}`">
                                <sl-tooltip :content="`${TOOLTIPS.cljGroupSets.numGroups.content}`">
                                    <i class="icon-Solid icon-question clj-small-tooltip"></i>
                                </sl-tooltip>
                            </a>

                        </th>
                        <th># no group students
                            <a target="_blank" :href="`${TOOLTIPS.cljGroupSets.numNoGroupStudents.url}`">
                                <sl-tooltip :content="`${TOOLTIPS.cljGroupSets.numNoGroupStudents.content}`">
                                    <i class="icon-Solid icon-question clj-small-tooltip"></i>
                                </sl-tooltip>
                            </a>

                        </th>
                        <th>Learning Journal Status
                            <a target="_blank" :href="`${TOOLTIPS.cljGroupSets.status.url}`">
                                <sl-tooltip :content="`${TOOLTIPS.cljGroupSets.status.content}`">
                                    <i class="icon-Solid icon-question clj-small-tooltip"></i>
                                </sl-tooltip>
                            </a>

                        </th>
                    </thead>
                    <tbody>
                        <tr v-for="groupSet in canvasData.groupSets" :key="groupSet._id">
                            <td>
                                <a :href="`${canvasData.hostName}/courses/${canvasData.id}/groups?open=1#tab-${groupSet._id}`">
                                    {{ groupSet.name }}
                                </a>
                            </td>
                            <td class="clj-center">{{ groupSet.selfSignup }}</td>
                            <td class="clj-center">{{ groupSet.memberLimit }}</td>
                            <td class="clj-center">
                                <div v-if="groupSet.numPrompts > 0"> 
                                    {{ groupSet.numPrompts }}
                                </div>
                                <div v-else> 
                                    <cljCreatePrompt :groupSetId="groupSet._id" />
                                </div>
                            </td>
                            <td class="clj-center">{{ groupSet.numGroups }}</td>
                            <td class="clj-center">
                                <div v-if="groupSet.numStudentsWithoutGroup > 0"> 
                                    <cljCreateGroups :groupSetId="groupSet._id" :numGroups="groupSet.numStudentsWithoutGroup" /> 
                                </div> 
                                <div v-else> 0 </div>

                            </td>
                            <td>
                                <cljStatusLearningJournal :groupSetId="groupSet._id" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>


<style scoped>
</style>
