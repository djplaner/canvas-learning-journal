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

import { defineProps, watch } from 'vue'

import { TOOLTIPS, GLOBAL_DEBUG } from '../../lib/tooltips'

import { learningJournalStatus } from '../../lib/canvasApiData'

import getCanvasData from '../../lib/canvasApiData'

const DEBUG = true
const FILE_NAME = "cljStatusLearningJournal"

const canvasData = getCanvasData()

const props = defineProps({
    groupSetId: String
})

//const groupSet = canvasData.groupSetById[props.groupSetId]
if (DEBUG && GLOBAL_DEBUG) {
    console.log(`${FILE_NAME}: groupSetId ${groupSetId} status:`)

    console.log( canvasData.groupSetsById)
}


/*showStuff()

watch(
    () => canvasData.updated,
    (updated) => {
        showStuff()
    }
)

function showStuff() {

if (DEBUG && GLOBAL_DEBUG) {
    console.log(`${FILE_NAME}: status:`)
    console.log( props.status)
}
} */

</script>

<template>
    <div class="clj-configure">
      (learning journal status {{ groupSetId }})
    </div>
</template>


<style scoped>

</style>
