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
 * @file: cljStatusStudentGroups.vue
 * @description: Show status for the current group set
 * @todo: 
 * - everything
 */

 import { TOOLTIPS, GLOBAL_DEBUG } from '../../../lib/tooltips'

const DEBUG = false
const FILE_NAME = "cljStatusStudentGroups"

if (DEBUG && GLOBAL_DEBUG ) {
    console.log(`${FILE_NAME} TOOLTIPS:`)
    console.log(TOOLTIPS)
}

const props = defineProps({
    groupSetId: Number
})

if (DEBUG && GLOBAL_DEBUG) {
    console.log(`${FILE_NAME} groupSetId: ${props.groupSetId}`)
}


</script>

<template>
    <div class="clj-status-student-groups">
        <h3>Student groups Status</h3>

        <table class="clj-data-table">
        <thead>
            <tr>
            <th colspan="2"># groups without student entries</th>
            <th colspan="2"># groups without teacher entries</th>
            </tr>
            <tr>
                <th> &lt;7 days </th>
                <th> ever </th>
                <th> &lt;7 days </th>
                <th> ever </th>
            </tr>
        </thead>
    </table>

    </div>
</template>

<style scoped>
.clj-status-student-groups {
    background-color: #f0f0f0;
    padding: 1em;
    margin: 1em;
    border-radius: 1em;
}
</style>