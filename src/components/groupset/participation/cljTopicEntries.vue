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
import { TOOLTIPS, GLOBAL_DEBUG, formatDate } from '../../../lib/tooltips'
import getCanvasData from '../../../lib/canvasApiData'

const DEBUG = true
const FILE_NAME = "cljTopicEntries"

if (DEBUG && GLOBAL_DEBUG) {
    console.log(`${FILE_NAME} TOOLTIPS:`)
    console.log(TOOLTIPS)
}

const props = defineProps({
    topicId: Number,
    groupId: Number
})

const tId = ref(props.topicId)
const gId = ref(props.groupId)
const canvasData = getCanvasData()
const entries = ref(canvasData.promptsByTopicId[tId.value].view)

console.log(`${FILE_NAME} topicId: ${tId.value}`) 
console.log(canvasData)

/**
 * @function: generateReplies
 * @param: {Array} entries
 * @description: Return a HTML string representing the threaded structure of replies to a particular entry 
 */

 /**
  * @function: generateThreadedEntries
  * @param: {Array} entries
  * @description Return a HTML string representing the threaded structure of all entries for a particular topic
  * - display the entries at the top level
  */

 </script>


<template>
  <div>
    <div v-if="entries">
      {{ entries.length }} Entries

      <ul class="clj-thread">
        <li v-for="entry in entries" :key="entry.id">
                {{ entry.user_id }} at 
                <a target="_blank" :href="`${canvasData.hostName}/groups/${gId}/discussion_topics/${tId}?entry_id=${entry.id}#entry-${entry.id}`">
                    {{ formatDate(entry.created_at) }}
                </a>
        </li>
      </ul>
    </div>
    <div v-else>
      n/a 
    </div>
  </div>

</template>
<style scoped>
</style>