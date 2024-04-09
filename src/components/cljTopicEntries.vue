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
 * @file: cljTopicEntries.vue
 * @prop: {Number} topicId
 * @description: Show all threaded view of all entries for a specific Canvas discussion topic
 */

 import { ref, watch, computed } from 'vue'
import { TOOLTIPS, GLOBAL_DEBUG } from '../../../lib/tooltips'

const DEBUG = true
const FILE_NAME = "cljTopicEntries"

if (DEBUG && GLOBAL_DEBUG) {
    console.log(`${FILE_NAME} TOOLTIPS:`)
    console.log(TOOLTIPS)
}

const props = defineProps({
    topicId: Number
})

console.log("hello ")


 </script>

<template>
  <div>
    <h2>cljTopicEntries.vue</h2>
  </div>

</template>
<style scoped>
</style>