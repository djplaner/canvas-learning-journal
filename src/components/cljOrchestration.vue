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
 * @file: cljOrchestration.vue
 * @description: Show configuration options/detail for a specific group set
 * @todo: 
 * - everything
 */

import { TOOLTIPS } from '../lib/tooltips'

const DEBUG = true
const FILE_NAME = "cljOrchestration"

const props = defineProps({
    groupSetId: Number
})

if (DEBUG) {
    console.log(`${FILE_NAME} groupSetId: ${props.groupSetId}`)
}
</script>

<template>
    <div class="clj-orchestration">
        <h3>Orchestration</h3>
    </div>
</template>

