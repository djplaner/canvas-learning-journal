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
 * @file: cljCreateLearningJournal.vue
 * @description: Display form for and handle creation of a new learning journal groupset.
 * 
 * A learning journal is a Canvas group set somewhat constrained. This component limits groupset
 * creation to 
 * - providing a name for the group set (that doesn't match an existing group set)
 * - self_signup is restricted and hence auto_leader is not provided, and group_limit is not provided
 * - sis_group_category_id, create_group_count, and split_group_count also not provided
 * 
 * It does provide an option to subsequently create a group for each student in the course, or
 * from a one or more course sections
 * @todo: 
 * - get a list of all course sections
 * - get a list of all existing group sets
 * 
 */


import { ref } from 'vue'

import { TOOLTIPS, GLOBAL_DEBUG } from '../../lib/tooltips'

import { getCanvasData } from '../../lib/canvasApiData'

import { createGroupsetRequest, groupSetCreator } from '../../lib/groupSetCreator'


const DEBUG = true
const FILE_NAME = "cljCreateLearningJournal"

const ALL_STUDENTS = "All students in the course"

const canvasData = getCanvasData();

if (DEBUG && GLOBAL_DEBUG) {
  console.log(`${FILE_NAME} canvas data`)
  console.log(canvasData)
}

const groupSetNames = ref(canvasData.getGroupSetNames()) // list of all existing group set names
const newGroupsetName = ref("") // name of new group set
const duplicateGroupsetName = ref(false) // flag to indicate if new group set name is a duplicate
const sections = ref(canvasData.sections) // array of current section objects
const createGroups = ref(false) // flag to indicate if groups are to be created for each student
const whichStudents = ref(ALL_STUDENTS)
const canCreateGroupSet = ref(false)
const stage = ref("form") // represent stage of create process "form" or "results"
const dialogOpen = ref(false)

/**
 * @function toggleForm() 
 * @description Show/hide the #clj-missing-groups dialog
 */
function toggleForm() {
  dialogOpen.value = !dialogOpen.value

  const dialog: any = document.getElementById('clj-create-learning-journal')
  // if dialog is open, close it
  if (dialog.open) {
    dialog.open = false
    resetForm()
  } else {
    dialog.open = true
  }
}

/**
 * @function resetForm()
 * @description Reset the form to its initial state
 */
function resetForm() {
  stage.value = "form"
  newGroupsetName.value = ""
  duplicateGroupsetName.value = false
  createGroups.value = false
  whichStudents.value = ALL_STUDENTS
  canCreateGroupSet.value = false
}

/**
 * @function createLearningJournal() 
 * @description Create a new learning journal group set matching content
 * of form. Called when the "Create learning journal" button is clicked.
 * 
 * Process 
 * - Canvas API create group category (aka group set)
 *      Should return details of the new group set, including memberships
 * - Get a list of students matching the selected sections
 * - For each student
 *    - create a group within the group category/set 
 */
function createLearningJournal() {
  // show the results output in the dialog
  stage.value = "results"

  // get form data and create parameter
  const groupSetRequest: createGroupsetRequest = {
    name: newGroupsetName.value,
  }

  console.log(`${FILE_NAME} createLearningJournal groupSetRequest`)

  const creator = new groupSetCreator(
    newGroupsetName.value
  )

  // At this stage the async nature will return here before the group set is created
  // Raising the question of if we want to use the .then approach here

  /**
   * TODO
   * - disable the close button so that the user can't close the dialog until completion (or error)
   * - Update the progress of work being done 
   *    - ? can this be done with the "then" approach?
   * - Get the groups being created
   */
  console.log(`${FILE_NAME} createLearningJournal groupSetCreator created`)
  console.log(`${FILE_NAME} createLearningJournal complete ${creator.complete}`)
  /*  creator.createGroupSet().then(() => {
      // get the list of students in the selected sections
      // for each student, create a group
      if (createGroups.value) {
        creator.createGroups(whichStudents.value)
      }
    }) */
}

/**
 * @function checkGroupSetName()
 * @description Ensures that the name of the group set to be created does not match
 * any of the existing group set names. Called on every input to the name field.
 * Compares the input to the list of existing group set names. If there is a match,
 * disable the create button. If no match, enable it.
 * Maybe display some sort of alert.
 */

function checkGroupSetName() {
  if (DEBUG && GLOBAL_DEBUG) {
    console.log(`${FILE_NAME} checkGroupSetName`)
  }
  // get the current name entered by user and update newGroupsetName
  const nameElement: any = document.getElementById('clj-groupset-name')
  if (!nameElement) {
    throw new Error(`${FILE_NAME} No group name element`)
    return
  }
  const name: string = nameElement.value
  newGroupsetName.value = name

  // check to see if it's a duplicate and if we can create the group set

  if (groupSetNames.value.includes(name) || name === "") {
    // if the new name is already in the current list of group set names or
    // it's empty then we can't create a group set
    canCreateGroupSet.value = false
    if (name !== "") {
      duplicateGroupsetName.value = true
    }
  } else {
    // we can create a group set with the current name value
    canCreateGroupSet.value = true
    duplicateGroupsetName.value = false
  }
}

const checkMenuSelect = (event: any) => {
  if (DEBUG && GLOBAL_DEBUG) {
    console.log(`${FILE_NAME} checkMenuSelect `)
    console.log(event)
  }
  // loop through each of the children of event.target
  let sections = []
  for (let i = 0; i < event.target.children.length; i++) {
    // if the child is checked, add it to the list of selected students
    if (event.target.children[i].checked) {
      sections.push(event.target.children[i].value)
    }
  }
  whichStudents.value = sections.join(", ")

  if (sections.length === 0) {
    whichStudents.value = ALL_STUDENTS
  }
}

</script>

<template>
  <!-- wrapper around component - button and dialgo -->
  <div class="clj-create-form">
    <!-- button to open dialog -->
    <sl-button size="small" type="primary" @click="toggleForm()">
      Create a Learning Journal task
    </sl-button>
    <a class="clj-th-help" target="_blank" :href="`${TOOLTIPS.cljCreateLearningJournal.page.url}`">
      <sl-tooltip :content="`${TOOLTIPS.cljCreateLearningJournal.page.content}`">
        <i class="icon-Solid icon-question clj-small-tooltip"></i>
      </sl-tooltip>
    </a>

    <!-- dialog -->
    <sl-dialog class="dialog-overview" id="clj-create-learning-journal">
      <div slot="label">
        Create a learning journal task
        <a class="clj-th-help" target="_blank" :href="`${TOOLTIPS.cljCreateLearningJournal.title.url}`">
          <sl-tooltip :content="`${TOOLTIPS.cljCreateLearningJournal.title.content}`">
            <i class="icon-Solid icon-question clj-small-tooltip"></i>
          </sl-tooltip>
        </a>
      </div>

      <!-- div containing form for getting new group set details -->
      <div class="clj-create-learning-journal-form" id="clj-form" v-if="stage === 'form'">
        <div class="clj-create-group-div">
          <h3>Name
            <a class="clj-th-help" target="_blank" :href="`${TOOLTIPS.cljCreateLearningJournal.name.url}`">
              <sl-tooltip :content="`${TOOLTIPS.cljCreateLearningJournal.name.content}`">
                <i class="icon-Solid icon-question clj-small-tooltip"></i>
              </sl-tooltip>
            </a>
          </h3>

          <sl-input id="clj-groupset-name" class="clj-label-on-left" @input="checkGroupSetName()"
            :value="newGroupsetName">
            <span id="clj-groupset-name-help" slot="help-text">
              <sl-badge variant="danger" v-if="duplicateGroupsetName">
                A groupset with that name already exists
              </sl-badge>
            </span>
          </sl-input>
        </div>

        <div class="clj-create-group-div">
          <sl-checkbox id="clj-create-groups" @sl-change="createGroups = !createGroups">
            Create a single member group for each student
            <a class="clj-th-help" target="_blank"
              :href="`${TOOLTIPS.cljCreateLearningJournal.createStudentGroups.url}`">
              <sl-tooltip :content="`${TOOLTIPS.cljCreateLearningJournal.createStudentGroups.content}`">
                <i class="icon-Solid icon-question clj-small-tooltip"></i>
              </sl-tooltip>
            </a>
          </sl-checkbox>
        </div>

        <div class="clj-which-students" v-if="createGroups">
          <sl-dropdown stayOpenOnSelect hoist>
            <sl-button slot="trigger" caret id="clj-student-choice-button">{{ whichStudents }}</sl-button>
            <sl-menu @sl-select="checkMenuSelect" id="clj-student-choice-menu">
              <sl-menu-item v-for="section in sections" :key="section.id" :value="section.name" type="checkbox">
                {{ section.name }}
              </sl-menu-item>
            </sl-menu>
          </sl-dropdown>
          <div class="clj-which-students-text">&nbsp;For which students?
            <a class="clj-th-help" target="_blank" :href="`${TOOLTIPS.cljCreateLearningJournal.courseOrSections.url}`">
              <sl-tooltip :content="`${TOOLTIPS.cljCreateLearningJournal.courseOrSections.content}`">
                <i class="icon-Solid icon-question clj-small-tooltip"></i>
              </sl-tooltip>
            </a>
          </div>
        </div>
        <div class="clj-which-students" v-else style="opacity:0.5">
          <sl-dropdown stayOpenOnSelect hoist>
            <sl-button disabled slot="trigger" caret id="clj-student-choice-button">{{ whichStudents }}</sl-button>
            <sl-menu @sl-select="checkMenuSelect" id="clj-student-choice-menu">
              <sl-menu-item v-for="section in sections" :key="section.id" :value="section.name" type="checkbox">
                {{ section.name }}
              </sl-menu-item>
            </sl-menu>
          </sl-dropdown>
          <div class="clj-which-students-text">&nbsp;For which students?
            <a class="clj-th-help" target="_blank" :href="`${TOOLTIPS.cljCreateLearningJournal.courseOrSections.url}`">
              <sl-tooltip :content="`${TOOLTIPS.cljCreateLearningJournal.courseOrSections.content}`">
                <i class="icon-Solid icon-question clj-small-tooltip"></i>
              </sl-tooltip>
            </a>
          </div>
        </div>
      </div>
      <div class="clj-create-form" v-else>
        <div class="clj-create-learning-journal-form">
          <div class="clj-create-group-div">
            <h3>Creating learning journal task (group set) named <em>{{ newGroupsetName }}</em>
              <a class="clj-th-help" target="_blank" :href="`${TOOLTIPS.cljCreateLearningJournal.results.url}`">
              <sl-tooltip :content="`${TOOLTIPS.cljCreateLearningJournal.results.content}`">
                <i class="icon-Solid icon-question clj-small-tooltip"></i>
              </sl-tooltip>
            </a>
            </h3>

            <p v-if="createGroups">
              Creating a learning journal (group) for each student
                <span v-if="whichStudents !== ALL_STUDENTS">
                  in sections {{ whichStudents }}
                </span>
                <span v-else>
                  for all students in the course
                </span>
            </p>
            <p v-else>
              Groups are not being created
            </p>
          </div>
          <div class="clj-create-group-div">
            <h4>Progress</h4>
            </div>
        </div>
      </div>
      <sl-button :disabled="!canCreateGroupSet" variant="success" slot="footer" class="clj-button"
          @click="createLearningJournal()" v-if="stage==='form'">Create
          Learning
          Journal</sl-button>
        <sl-button slot="footer" variant="neutral" @click="toggleForm()">Close</sl-button>
    </sl-dialog>
  </div>

</template>


<style scoped>
.clj-create-group-div {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.clj-create-form {
  margin-top: 1rem;
  margin-left: 1rem;
  padding-top: 1rem;
  padding-left: 1rem;
}

#clj-create-learning-journal {
  --width: 50vw;
}

.clj-button {
  margin-top: 1rem;
  margin-left: 0.5rem;
}

.clj-create-learning-journal-form {
  /*display: flex; */
  margin-left: 1rem;
  margin-right: 1rem;
}

.clj-which-students {
  display: flex;
}

.clj-which-students-text {
  padding-top: 0.5rem;
  font-size: 1rem;
}

/*.clj-label-on-left {
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
} */

.clj-label-on-left::part(form-control-label) {
  text-align: right;
}

.clj-label-on-left::part(form-control-help-text) {
  grid-column-start: 2;
}
</style>
