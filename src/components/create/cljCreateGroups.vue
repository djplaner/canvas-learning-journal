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
 * @file: cljCreateGroups.vue
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

import { ref, watch, defineProps } from 'vue'
import '@shoelace-style/shoelace/dist/components/button/button.js';

import { TOOLTIPS, GLOBAL_DEBUG } from '../../lib/tooltips'

import getCanvasData from '../../lib/canvasApiData'

const DEBUG = true
const FILE_NAME = "cljCreateGroups"

const props = defineProps({
    groupSetId: Number,
    numGroups: Number 
})

const numGroups = ref(props.numGroups)

if (DEBUG && GLOBAL_DEBUG) {
    console.log(`${FILE_NAME} groupSetId: ${props.groupSetId} numGroups: ${numGroups}`)
    console.log(numGroups)
    console.log('-----')
}

const canvasData = getCanvasData();

if (DEBUG && GLOBAL_DEBUG) {
    console.log(`${FILE_NAME} 2. just called getCanvasCourse`)
    console.log(canvasData)
}

function createGroups() {
    console.log("createGroups")
}

</script>

<template>
    <div class="clj-configure">
        <sl-button size="small" type="primary" @click="createGroups">Create {{ numGroups }} groups</sl-button>
    </div>
</template>


<style scoped>
</style>
