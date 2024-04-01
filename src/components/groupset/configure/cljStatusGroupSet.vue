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

import cljStatusLearningJournal from '../../everyone/cljStatusLearningJournal.vue'

import getCanvasData from '../../../lib/canvasApiData';

const DEBUG = false
const FILE_NAME = "cljStatusGroupSet"

const props = defineProps({
    groupSetId: Number
})

const canvasData = getCanvasData();
// @todo use groupSetId to get specific data

const groupSet = ref(canvasData.groupSetsById[props.groupSetId])
const numStudents = ref(canvasData.students.length)

if (DEBUG && GLOBAL_DEBUG) {
    console.log(`${FILE_NAME} groupSetId: ${props.groupSetId}`)
    console.log(groupSet.value)
}

// watch for changes to canvasData
watch(
    () => canvasData.updated,
    (updated) => {
        if (DEBUG && GLOBAL_DEBUG) {
            console.log(`${FILE_NAME} canvasData.updated: ${updated}`)
            console.log(canvasData)
        }
        update()
    }
)

// watch for changes on props.groupSetId 
watch(
    () => props.groupSetId,
    (gsId) => {
        if (DEBUG && GLOBAL_DEBUG) {
            console.log(`${FILE_NAME} changes to groupSetId: ${gsId} and props.groupSetId: ${props.groupSetId}`)
        }
        update()
    }
)

/**
 * @function update
 * @description: Called by the watchers either when
 * - canvasData is updated
 * - props.groupSetId is updated
 * Updates numStudents and groupSet value 
 */
function update() {
    if (DEBUG && GLOBAL_DEBUG) {
        console.log(`${FILE_NAME} update`)
    }
    if (canvasData.updated) {
        // ensure that there is some data
        groupSet.value = canvasData.groupSetsById[props.groupSetId]
        numStudents.value = canvasData.students.length
    }
}
</script>

<template>
    <div class="clj-status-group-set">

        <div class="clj-two-column-grid">
            <div class="clj-group-set-info">
                <h3>
                    Group Set Status
                    <a target="_blank" :href="`${TOOLTIPS.cljStatusGroupSet.titleLearningJournalStatus.url}`">
                        <sl-tooltip :content="`${TOOLTIPS.cljStatusGroupSet.titleLearningJournalStatus.content}`">
                            <i class="icon-Solid icon-question clj-small-tooltip"></i>
                        </sl-tooltip>
                    </a>
                </h3>
                <table class="clj-data-table">
                    <tbody>
                        <tr>
                            <th>
                                Name
                                <a class="clj-th-tooltip" target="_blank" :href="`${TOOLTIPS.cljGroupSets.name.url}`">
                                    <sl-tooltip :content="`${TOOLTIPS.cljGroupSets.name.content}`">
                                        <i class="icon-Solid icon-question clj-small-tooltip"></i>
                                    </sl-tooltip>
                                </a>
                            </th>
                            <td class="clj-center">
                                {{ groupSet.name }}
                            </td>
                        </tr>
                        <tr>
                            <th>
                                Self signup
                                <a class="clj-th-tooltip" target="_blank"
                                    :href="`${TOOLTIPS.cljGroupSets.selfSignup.url}`">
                                    <sl-tooltip :content="`${TOOLTIPS.cljGroupSets.selfSignup.content}`">
                                        <i class="icon-Solid icon-question clj-small-tooltip"></i>
                                    </sl-tooltip>
                                </a>
                            </th>
                            <td class="clj-center">{{ groupSet.selfSignup }}</td>
                        </tr>
                        <tr>
                            <th>
                                Member limit
                                <a class="clj-th-tooltip" target="_blank"
                                    :href="`${TOOLTIPS.cljGroupSets.memberLimit.url}`">
                                    <sl-tooltip :content="`${TOOLTIPS.cljGroupSets.memberLimit.content}`">
                                        <i class="icon-Solid icon-question clj-small-tooltip"></i>
                                    </sl-tooltip>
                                </a>
                            </th>
                            <td class="clj-center">{{ groupSet.memberLimit }}</td>
                        </tr>
                        <tr>
                            <th>
                                # of groups
                                <a class="clj-th-tooltip" target="_blank"
                                    :href="`${TOOLTIPS.cljGroupSets.numGroups.url}`">
                                    <sl-tooltip :content="`${TOOLTIPS.cljGroupSets.numGroups.content}`">
                                        <i class="icon-Solid icon-question clj-small-tooltip"></i>
                                    </sl-tooltip>
                                </a>
                            </th>
                            <td class="clj-center">{{ groupSet.numGroups }}</td>
                        </tr>
                        <tr>
                            <th>
                                # no group students
                                <a class="clj-th-tooltip" target="_blank"
                                    :href="`${TOOLTIPS.cljGroupSets.numNoGroupStudents.url}`">
                                    <sl-tooltip :content="`${TOOLTIPS.cljGroupSets.numNoGroupStudents.content}`">
                                        <i class="icon-Solid icon-question clj-small-tooltip"></i>
                                    </sl-tooltip>
                                </a>
                            </th>
                            <td class="clj-center">
                                {{ groupSet.numStudents - groupSet.numStudentsMembersOfGroups }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="clj-learning-journal-info">
                <h3>Learning Journal Status
                    <a target="_blank" :href="`${TOOLTIPS.cljStatusGroupSet.titleLearningJournalStatus.url}`">
                        <sl-tooltip :content="`${TOOLTIPS.cljStatusGroupSet.titleLearningJournalStatus.content}`">
                            <i class="icon-Solid icon-question clj-small-tooltip"></i>
                        </sl-tooltip>
                    </a>
                </h3>

                <cljStatusLearningJournal :groupSetId="props.groupSetId" />
            </div>
        </div>
    </div>
</template>

<style scoped>
/*.clj-status-group-set {
    background-color: #f0f0f0;
    padding: 1em; 
    margin-left: 1rem; 
} */

.clj-th-tooltip {
    float: right;
    margin-right: 1rem;
}
</style>