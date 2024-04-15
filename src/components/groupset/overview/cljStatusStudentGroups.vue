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
 * @file: cljStatusStudentGroups.vue
 * @description: Show status of each group in the current group set. 
 * - student groups without staff/student entries ever or recently
 * @todo: 
 * - everything
 */

import { ref, watch } from 'vue'
import { TOOLTIPS, GLOBAL_DEBUG } from '../../../lib/tooltips'
import { getCanvasData } from '../../../lib/canvasApiData'

const DEBUG = false
const FILE_NAME = "cljStatusStudentGroups"

if (DEBUG && GLOBAL_DEBUG) {
    console.log(`${FILE_NAME} TOOLTIPS:`)
    console.log(TOOLTIPS)
}

const props = defineProps<{
    groupSetId: string
}>()

if (DEBUG && GLOBAL_DEBUG) {
    console.log(`${FILE_NAME} groupSetId: ${props.groupSetId}`)
}

const canvasData = getCanvasData();

const promptDataLoaded = ref(false)
const groupSet = ref(canvasData.groupSetsById[props.groupSetId])
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
    <div class="clj-status-student-groups" v-if="isLearningJournal">
        <h3>Group overview
            <a class="clj-th-help" target="_blank" :href="`${TOOLTIPS.cljStatusStudentGroups.title.url}`">
                <sl-tooltip :content="`${TOOLTIPS.cljStatusStudentGroups.title.content}`">
                    <i class="icon-Solid icon-question clj-small-tooltip"></i>
                </sl-tooltip>
            </a>
        </h3>

            <table class="clj-data-table">
                <thead>
                    <tr>
                        <th> </th>
                        <th colspan="2" class="clj-center"># prompts without student entries
            <a class="clj-th-help" target="_blank" :href="`${TOOLTIPS.cljStatusStudentGroups.noStudentEntries.url}`">
                <sl-tooltip :content="`${TOOLTIPS.cljStatusStudentGroups.noStudentEntries.content}`">
                    <i class="icon-Solid icon-question clj-small-tooltip"></i>
                </sl-tooltip>
            </a>

                        </th>
                        <th colspan="2" class="clj-center"># prompts without teacher entries
            <a class="clj-th-help" target="_blank" :href="`${TOOLTIPS.cljStatusStudentGroups.noStaffEntries.url}`">
                <sl-tooltip :content="`${TOOLTIPS.cljStatusStudentGroups.noStaffEntries.content}`">
                    <i class="icon-Solid icon-question clj-small-tooltip"></i>
                </sl-tooltip>
            </a>

                        </th>
                    </tr>
                    <tr>
                        <th> Group name </th>
                        <th class="clj-center"> &lt;7 days </th>
                        <th class="clj-center"> ever </th>
                        <th class="clj-center"> &lt;7 days </th>
                        <th class="clj-center"> ever </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="group in groupSet.groups" :key="group._id">
                        <td style="width:10rem">
                            <a :href="`${canvasData.hostName}/groups/${group._id}`" target="_blank">
                            {{ group.name }}
                            </a>
                        </td>
                        <td class="clj-center">
                            {{ group.stats.numNoStudentEntriesLast7 }}
                        </td>
                        <td class="clj-center">
                            {{ group.stats.numNoStudentEntries }}
                        </td>
                        <td class="clj-center">
                            {{ group.stats.numNoStaffEntriesLast7 }}
                        </td>
                        <td class="clj-center">
                            {{ group.stats.numNoStaffEntries }}
                        </td>
                    </tr>
                </tbody>
            </table>

    </div>
</template>

<style scoped>
.clj-status-student-groups {
    background-color: #f0f0f0;
    padding: 1em;
    border-radius: 1em;
}

</style>