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
 * @file: cljCreateLearningJournal.vue
 * @description: Display form for and handle creation of a new learning journal groupset.
 * @todo: 
 * Form entry
 * - disable the create button until something typed in the input
 * - on create, check that the name doesn't match any existing group set
 * - add some contextual help
 * Group category creation 
 * - add a div below the form to show progress creating the group set
 * - modify the div to show progress
 *          1. Requesting group set creation
 *          2. Group set created || Error creating group set
 *               ?? question about whether this should refresh the page to see the new
 *                  tab
 *  ?? question about whether this should refresh the page to see the new
 *                  tab. That would also reload the courseData from Canvas?
 */

import { TOOLTIPS, GLOBAL_DEBUG } from '../../lib/tooltips'

const DEBUG = false
const FILE_NAME = "cljCreateLearningJournal"

if (DEBUG && GLOBAL_DEBUG) {
    console.log(`${FILE_NAME} TOOLTIPS:`)
    console.log(TOOLTIPS)
}

</script>

<template>
    <div class="clj-configure">
        <h3>Create Learning Journal</h3>
    </div>

    <div class="clj-create-form">
    <sl-input class="clj-label-on-left" label="Name" help-text="What will the new learning journal group set be called?"></sl-input>
    <sl-button class="clj-button" disabled>Create</sl-button>
    </div>
</template>


<style scoped>
.clj-button {
    margin-top: 1rem;
    margin-left: 0.5rem;
}
.clj-create-form {
    display: flex;
}
.clj-label-on-left {
    --label-width: 3.75rem;
    --gap-width: 1rem;
}

.clj-label-on-left {
    margin-top: 1rem;
    width: 50%;
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
</style>
