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

<script lang="ts" setup>
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

import { TOOLTIPS, GLOBAL_DEBUG } from '../../lib/tooltips'

import getCanvasData from '../../lib/canvasApiData'
import cljMissingGroups from './cljMissingGroups.vue'

const DEBUG = true
const FILE_NAME = "cljCreateGroups"

const props = defineProps({
    groupSetId: Number,
    numGroups: Number 
})

const numGroups = ref(props.numGroups)
const groupSetId = ref(props.groupSetId)

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

// watch for changes on props.groupSetId 
watch(
    () => [ props.groupSetId, props.numGroups ],
    (gsId) => {
        if (DEBUG && GLOBAL_DEBUG) {
            console.log(`${FILE_NAME} changes to groupSetId: ${gsId} and props.groupSetId: ${props.groupSetId}`)
        }
        numGroups.value = props.numGroups
        groupSetId.value = props.groupSetId
    }
)

/**
 * @function toggleGroups() 
 * @description Show/hide the #clj-missing-groups dialog
 */
function toggleGroups() {
    const dialog = document.getElementById('clj-missing-groups')
    // if dialog is open, close it
    if (dialog.open) {
        dialog.open = false
    } else {
        dialog.open = true
    }

}


</script>

<template>
    <div class="clj-create-group">
        <sl-button size="small" type="primary" @click="toggleGroups()">
            View {{ numGroups }} students missing a group
        </sl-button>

        <sl-dialog class="dialog-overview" id="clj-missing-groups"
           style="--width: 75vw">
           <div slot="label">
            Students without groups
            <a class="clj-th-help" target="_blank"
                :href="`${TOOLTIPS.cljCreateGroups.studentsWithoutGroups.url}`">
                <sl-tooltip :content="`${TOOLTIPS.cljCreateGroups.studentsWithoutGroups.content}`">
                    <i class="icon-Solid icon-question clj-small-tooltip"></i>
                </sl-tooltip>
            </a>
           </div>
            <cljMissingGroups :groupSetId="groupSetId" :numGroups="numGroups" />

            <sl-button slot="footer" variant="primary" @click="toggleGroups()">Close</sl-button>
        </sl-dialog>
    </div>
</template>


<style scoped>
sl-dialog::part(title) {
    text-align:left;
}
</style>
