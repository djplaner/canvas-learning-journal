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
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
-->



<script setup>
/**
 * @file: cljEveryone.vue
 * @description: LJ component shown on the users/everyone page 
 * - (maybe) provide some indication of which current groupsets are learning journals
 * - provide access to basic help with CLJ (i.e. how to use it)
 * @todo: 
 * - Design what, if any indication of group set status will be provided
 **/


// Import SVG icons
import { fuiQuestionCircle48Filled } from 'quasar-extras-svg-icons/fluentui-system-icons'

import { TOOLTIPS } from '../lib/tooltips'

const DEBUG = true

if (DEBUG) {
  console.group(`cljEveryone.vue tooltips`)
  console.log(`cljEveryone.vue: TOOLTIPS:`)
  console.log(TOOLTIPS)
  console.groupEnd()
}


</script>
<template>
  <div class="learning-journal-status">
    Canvas Learning Journal
    <a target="_blank" :href="`${TOOLTIPS.users_learning_journal.for_more.url}`">
      <q-icon :name="fuiQuestionCircle48Filled" color="primary" size="1.5em">
        <q-tooltip anchor="bottom start" self="top left" class="bg-grey-4 text-black text-body2" max-width="20rem">
          {{ TOOLTIPS.users_learning_journal.for_more.content }}
        </q-tooltip>
      </q-icon>
    </a>
  </div>
</template>