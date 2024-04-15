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
 * @file: cljCreatePrompt.vue
 * @prop: groupSetId - the Canvas group set id for the group set to create a prompt for
 * @description: Display form for and handle creation of a new prompts for a group st
 * @todo: 
 */

import { ref } from 'vue'

import { TOOLTIPS, GLOBAL_DEBUG } from '../../lib/tooltips'
import { getCanvasData } from '../../lib/canvasApiData'

const DEBUG = false
const FILE_NAME = "cljCreatePrompt"

if (DEBUG && GLOBAL_DEBUG) {
  console.log(`${FILE_NAME} TOOLTIPS:`)
  console.log(TOOLTIPS)
}

const props = defineProps<{
  groupSetId: string
}>()

const canvasData = getCanvasData()

const groupSet = ref(canvasData.groupSetsById[props.groupSetId])


/**
 * @function toggleForm() 
 * @description Show/hide the #clj-missing-groups dialog
 */
function toggleForm() {
  const dialog : any = document.getElementById('clj-create-prompt')
  // if dialog is open, close it
  if (dialog.open) {
    dialog.open = false
  } else {
    dialog.open = true
  }

}

</script>

<template>
  <div class="clj-create-prompt-button">
    <sl-button size="small" type="primary" @click="toggleForm()">
      Create a prompt
    </sl-button> &nbsp;
    <a class="clj-th-help" target="_blank" :href="`${TOOLTIPS.cljCreatePrompt.button.url}`">
      <sl-tooltip :content="`${TOOLTIPS.cljCreatePrompt.button.content}`">
        <i class="icon-Solid icon-question clj-small-tooltip"></i>
      </sl-tooltip>
    </a>
  </div>

  <div class="clj-create-form">

    <sl-dialog class="dialog-overview" id="clj-create-prompt">
      <div slot="label">
        Create a prompt
        <a class="clj-th-help" target="_blank" :href="`${TOOLTIPS.cljCreatePrompt.title.url}`">
          <sl-tooltip :content="`${TOOLTIPS.cljCreatePrompt.title.content}`">
            <i class="icon-Solid icon-question clj-small-tooltip"></i>
          </sl-tooltip>
        </a>
      </div>
      <div class="clj-create-prompt-form">
        <sl-input class="clj-label-on-left" label="Name" help-text="What will the title of the new propmt?"></sl-input>
        <sl-button class="clj-button" disabled>Create</sl-button>
      </div>

      <sl-button slot="footer" variant="primary" @click="toggleForm()">Close</sl-button>
    </sl-dialog>

  </div>
</template>


<style scoped>
.clj-create-form {
  /*  margin-top: 1rem;
  margin-left: 1rem;
  padding-top: 1rem;
  padding-left: 1rem; */
}

#clj-create-prompt {
  --width: 50vw;
}

.clj-button {
  margin-top: 1rem;
  margin-left: 0.5rem;
}

.clj-create-prompt-form {
  display: flex;
}

.clj-label-on-left {
  --label-width: 3.75rem;
  --gap-width: 1rem;
}

.clj-label-on-left {
  margin-top: 1rem;
  width: 75%;
}

.clj-label-on-left::part(form-control) {
  display: grid;
  grid: auto / var(--label-width) 1fr;
  gap: var(--sl-spacing-3x-small) var(--gap-width);
  align-items: center;
}

.clj-label-on-left::part(form-control-label) {
  text-align: right;
}

.clj-label-on-left::part(form-control-help-text) {
  grid-column-start: 2;
}

.clj-create-prompt-button {
  display: flex;
  justify-content: space-between;
    width: max-content;
    align-items: center;

}
</style>
