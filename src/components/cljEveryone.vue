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


import { ref } from 'vue'

import '@shoelace-style/shoelace/dist/components/tooltip/tooltip.js';


import { TOOLTIPS, GLOBAL_DEBUG, BLUR } from '../lib/tooltips'

import cljGroupSets from './everyone/cljGroupSets.vue'
import cljCreateLearningJournal from './create/cljCreateLearningJournal.vue'

const DEBUG = false

if (DEBUG && GLOBAL_DEBUG) {
  console.group(`cljEveryone.vue tooltips`)
  console.log(`cljEveryone.vue: TOOLTIPS:`)
  console.log(TOOLTIPS)
  console.groupEnd()
}

const configOpen = ref(false)

// if BLUR add "filter: blur(0.5rem)" to table.roster
if (BLUR) {
  document.querySelector('table.roster').style.filter = 'blur(0.5rem)'
}

</script>
<template>
  <div class="clj-status" id="clj-eo-button">
    <i v-if="configOpen" @click="configOpen = !configOpen" id="clj-gs-config-switch" class="icon-Solid icon-mini-arrow-down"></i>
    <i v-else @click="configOpen = !configOpen" id="clj-gs-config-switch" class="icon-Solid icon-mini-arrow-end"></i>
    Canvas Learning Journal
    <a target="_blank" :href="`${TOOLTIPS.cljEveryone.for_more.url}`">
      <sl-tooltip>
        <div slot="content">
          {{ TOOLTIPS.cljEveryone.for_more.content }}
        </div>
        <i class="icon-Solid icon-question"></i>
      </sl-tooltip>
    </a>
  </div>
  <div v-if="configOpen" class="clj-detail" id="clj-gs-detail">
    <cljCreateLearningJournal />
    <cljGroupSets />
  </div>
  <div v-else class="clj-detail" id="clj-gs-detail" style="display:none">
    <cljCreateLearningJournal />
    <cljGroupSets />
  </div> 
</template>