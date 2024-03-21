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



import { TOOLTIPS } from '../lib/tooltips'

//import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js'
//setBasePath('/node_modules/@shoelace-style/shoelace/dist')
//setBasePath('../node_modules/@shoelace-style/shoelace/dist/')
//setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.14.0/cdn/')


//import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.14.0/cdn/components/tooltip/tooltip.js';
//import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.14.0/cdn/components/icon/icon.js';


const DEBUG = true

if (DEBUG) {
  console.group(`cljEveryone.vue tooltips`)
  console.log(`cljEveryone.vue: TOOLTIPS:`)
  console.log(TOOLTIPS)
  console.groupEnd()
}


</script>
<template>
  <div class="clj-status" id="clj-eo-button">
    Canvas Learning Journal
    <a target="_blank" :href="`${TOOLTIPS.users_learning_journal.for_more.url}`">
      <sl-tooltip>
        <div slot="content">
          {{ TOOLTIPS.users_learning_journal.for_more.content }}
        </div>
        <i class="icon-Solid icon-question"></i> 
      </sl-tooltip>
    </a>
  </div>
</template>