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
 * @file: cljOverviewParticipation.vue
 * @description: Given a groupSetId display some basic overview of how students
 * are participating in the topics/prompts for this group set.
 * @todo: 
 * - everything
 */

import { ref, watch } from 'vue'
import { TOOLTIPS, GLOBAL_DEBUG } from '../../../lib/tooltips'
import getCanvasData from '../../../lib/canvasApiData';

const DEBUG = false
const FILE_NAME = "cljOverviewParticipation"

if (DEBUG && GLOBAL_DEBUG) {
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
    <div class="clj-status-learning-journal">
        <h3>Participation overview - {{ groupSet.name }}
            <a class="clj-th-help" target="_blank" :href="`${TOOLTIPS.cljOverviewParticipation.title.url}`">
                <sl-tooltip :content="`${TOOLTIPS.cljOverviewParticipation.title.content}`">
                    <i class="icon-Solid icon-question clj-small-tooltip"></i>
                </sl-tooltip>
            </a>

        </h3>

        <table class="clj-data-table">
            <thead>
                <tr>
                    <th> </th>
                    <th colspan="2" class="clj-center">
                        # groups without student entries
                        <a class="clj-th-help" target="_blank"
                            :href="`${TOOLTIPS.cljStatusDiscussions.numNoStudentEntries.url}`">
                            <sl-tooltip :content="`${TOOLTIPS.cljStatusDiscussions.numNoStudentEntries.content}`">
                                <i class="icon-Solid icon-question clj-small-tooltip"></i>
                            </sl-tooltip>
                        </a>
                    </th>
                    <th colspan="2" class="clj-center">
                        # groups without staff entries
                        <a class="clj-th-help" target="_blank"
                            :href="`${TOOLTIPS.cljStatusDiscussions.numNoStudentEntries.url}`">
                            <sl-tooltip :content="`${TOOLTIPS.cljStatusDiscussions.numNoStudentEntries.content}`">
                                <i class="icon-Solid icon-question clj-small-tooltip"></i>
                            </sl-tooltip>
                        </a>
                    </th>
                </tr>
                <tr>
                    <th class="clj-center">
                        Num prompts
                        <a class="clj-th-help" target="_blank"
                            :href="`${TOOLTIPS.cljStatusDiscussions.numPrompts.url}`">
                            <sl-tooltip :content="`${TOOLTIPS.cljStatusDiscussions.numPrompts.content}`">
                                <i class="icon-Solid icon-question clj-small-tooltip"></i>
                            </sl-tooltip>
                        </a>
                    </th>
                    <th class="clj-center"> < 7 days </th>
                    <th class="clj-center"> ever </th>
                    <th class="clj-center"> < 7 days </th>
                    <th class="clj-center"> ever </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="clj-center">
                        {{ groupSet.numPrompts }}
                    </td>
                    <td class="clj-center">
                        {{ groupSet.stats.numNoStudentEntriesLast7 }}
                    </td>
                    <td class="clj-center">
                        {{ groupSet.stats.numNoStudentEntries }}
                    </td>
                    <td class="clj-center">
                        {{ groupSet.stats.numNoStaffEntriesLast7 }}
                    </td>
                    <td class="clj-center">
                        {{ groupSet.stats.numNoStaffEntries }}
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<style scoped>
.clj-status-learning-journal {
    background-color: #f0f0f0;
    padding: 1em;
    margin: 1em;
    border-radius: 1em;
}
</style>
