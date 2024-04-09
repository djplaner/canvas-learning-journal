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
 * @file: cljStatusLearningJournal.vue
 * @description: Display form for and handle creation of a new learning journal groupset.
 * @todo: 
 * Form entry
 * - disable the create button until something typed in the input
 * - on create, check that the name doesn't match any existing group set
 * - add some contextual help
 * Group category creation 
 * - add a div below the form to show progress creating the group set
 * - modify the div to show progress
 *          1. Requesting group set creation
 *          2. Group set created || Error creating group set
 *               ?? question about whether this should refresh the page to see the new
 *                  tab
 *  ?? question about whether this should refresh the page to see the new
 *                  tab. That would also reload the courseData from Canvas?
 */

import { watch, ref } from 'vue'

import { TOOLTIPS, GLOBAL_DEBUG  } from '../../lib/tooltips'

import type { learningJournalStatus } from '../../lib/canvasApiData'

import getCanvasData from '../../lib/canvasApiData'

import { Header, Item } from "vue3-easy-data-table";

const headers: Header[] = [
  { text: "PLAYER", value: "player", sortable: true },
  { text: "TEAM", value: "team"},
  { text: "NUMBER", value: "number"},
  { text: "POSITION", value: "position"},
  { text: "HEIGHT", value: "indicator.height"},
  { text: "WEIGHT (lbs)", value: "indicator.weight", sortable: true},
  { text: "LAST ATTENDED", value: "lastAttended", width: 200},
  { text: "COUNTRY", value: "country"},
];

const items: Item[] = [
  { player: "Stephen Curry", team: "GSW", number: 30, position: 'G', indicator: {"height": '6-2', "weight": 185}, lastAttended: "Davidson", country: "USA"},
  { player: "Lebron James", team: "LAL", number: 6, position: 'F', indicator: {"height": '6-9', "weight": 250}, lastAttended: "St. Vincent-St. Mary HS (OH)", country: "USA"},
  { player: "Kevin Durant", team: "BKN", number: 7, position: 'F', indicator: {"height": '6-10', "weight": 240}, lastAttended: "Texas-Austin", country: "USA"},
  { player: "Giannis Antetokounmpo", team: "MIL", number: 34, position: 'F', indicator: {"height": '6-11', "weight": 242}, lastAttended: "Filathlitikos", country: "Greece"},
];

const DEBUG = false
const FILE_NAME = "cljStatusLearningJournal"

const canvasData = getCanvasData()

const props = defineProps({
    groupSetId: String
})

if (DEBUG && GLOBAL_DEBUG) {
    console.log(`${FILE_NAME}: groupSetId ${props.groupSetId} status:`)

    console.log(canvasData.groupSetsById[props.groupSetId])
}

const privateLJ = ref(false)
const studentsWithoutGroup = ref(false)
const noPrompts = ref(false)
const multiStudentGroups = ref(false)
const noGroups = ref(false)


showStuff()

watch(
    () => canvasData.updated,
    (updated) => {
        showStuff()
    }
)

// watch for changes on props.groupSetId
watch(
    () => props.groupSetId,
    (gsId) => {
        if (DEBUG && GLOBAL_DEBUG) {
            console.log(`${FILE_NAME} changes to groupSetId: ${gsId} and props.groupSetId: ${props.groupSetId}`)
        }
        showStuff()
    }
)

/**
 * @function showStuff
 * @description: update the variables necessary to show the status of the specified
 * group set as a learning journal
 * 
 */
function showStuff() {
    const groupSet = canvasData.groupSetsById[props.groupSetId]
    if (DEBUG && GLOBAL_DEBUG) {
        console.log(`${FILE_NAME}: status: ${props.groupSetId}`)
        console.log(groupSet.learningJournalStatus)
    }

    if (groupSet.hasOwnProperty('learningJournalStatus') && groupSet.learningJournalStatus.hasOwnProperty('privateJournal')) {
        privateLJ.value = groupSet.learningJournalStatus.privateJournal
        studentsWithoutGroup.value = groupSet.learningJournalStatus.studentsWithoutGroup
        noPrompts.value = !groupSet.learningJournalStatus.promptsCreated
        multiStudentGroups.value = groupSet.learningJournalStatus.multiStudentGroups
        noGroups.value = !groupSet.learningJournalStatus.groupsCreated
    }

}


</script>

<template>
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet">

    <div class="clj-learning-journal-status">
    <a :href="`${TOOLTIPS.cljStatusLearningJournal.privateLearningJournal.url}`">
        <sl-tooltip :content="`${TOOLTIPS.cljStatusLearningJournal.privateLearningJournal.content}`">
            <sl-badge v-if="privateLJ" variant="success">Private Learning Journal</sl-badge>
        </sl-tooltip>
    </a>
    <a :href="`${TOOLTIPS.cljStatusLearningJournal.studentsWithoutGroup.url}`">
        <sl-tooltip :content="`${TOOLTIPS.cljStatusLearningJournal.studentsWithoutGroup.content}`">
            <sl-badge v-if="studentsWithoutGroup" variant="warning">Students without a group</sl-badge>
        </sl-tooltip>
    </a>
    <a :href="`${TOOLTIPS.cljStatusLearningJournal.noPrompts.url}`">
        <sl-tooltip :content="`${TOOLTIPS.cljStatusLearningJournal.noPrompts.content}`">
            <sl-badge variant="warning" v-if="noPrompts">No prompts</sl-badge>
        </sl-tooltip>
    </a>
    <a :href="`${TOOLTIPS.cljStatusLearningJournal.multiStudentGroups.url}`">
        <sl-tooltip :content="`${TOOLTIPS.cljStatusLearningJournal.multiStudentGroups.content}`">
            <sl-badge variant="warning" v-if="multiStudentGroups">Multi-student groups</sl-badge>
        </sl-tooltip>
    </a>
    <a :href="`${TOOLTIPS.cljStatusLearningJournal.noGroups.url}`">
        <sl-tooltip :content="`${TOOLTIPS.cljStatusLearningJournal.noGroups.content}`">
            <sl-badge variant="danger" v-if="noGroups">No groups</sl-badge>
        </sl-tooltip>
    </a>
    </div>
    <EasyDataTable
    :headers="headers"
    :items="items"
  />
</template>


<style scoped></style>
