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

function generateEntryReplies(entry) {
  let replyHTML = ""

  if (!entry.hasOwnProperty("replies")) {
    return ""
  }

  for (const reply of entry.replies) {
    let replyReplies = ""

    if (reply.hasOwnProperty("replies") && reply.replies.length > 0) {
      replyReplies = generateEntryReplies(reply)
    }

    const author = userNameAndLink(reply.user_id)
    const created = formatDate(reply.created_at)
    replyHTML += `<li>${author} at ${created} ${replyReplies}</li>`
  }

  return `<ul>${replyHTML}</ul>`
}

/**
 * @function: userNameAndLink
 * @param: {Number} userId
 * @description: Return a string with the user's name and a link to their profile
 */

function userNameAndLink(userId) {
  const user = canvasData.getUserDetails(userId)
  if (user) {
    return `<a target="_blank" href="${user.htmlUrl}">${user.name}</a>`
  }
  return "Unknown user"
}

</script>


<template>
  <div>
    <div v-if="entries">
      <ul class="clj-thread">
        <li v-for="entry in entries" :key="entry.id">
          <span class="clj-user-name" v-html="userNameAndLink(entry.user_id)"></span> at
          <a target="_blank"
            :href="`${canvasData.hostName}/groups/${gId}/discussion_topics/${tId}?entry_id=${entry.id}#entry-${entry.id}`">
            {{ formatDate(entry.created_at) }}
          </a>
          <span class="clj-replies" v-html="generateEntryReplies(entry)"></span>
        </li>
      </ul>
    </div>
    <div v-else>
      n/a
    </div>
  </div>

</template>
<style scoped></style>