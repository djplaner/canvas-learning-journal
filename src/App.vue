<script setup lang="ts">

/**
 * @file: App.vue 
 * @description: Implement the Learning Journal Status component in the "EveryOne" tab for the Canvas course's groups page. Add the "Learning Journal" component to each group set tab existing
 * - Set up Canvas data store
 * - Check for any groupsets and add the "Learning Journal" component 
 * @todo 
 * - Figure out what the "Learning Journal" component will do
 * - just some help, but how
 */

import { createApp } from 'vue';
import { computed, watch } from 'vue';

// props 
// - groupSetId: Number
//   Canvas id for the group set on which the app has been added

const props = defineProps({
  groupSetId: Number
})

//import CanvasCourse from './components/CanvasCourse.vue';

import getCanvasCourse from './lib/canvasApiData';

//import CanvasLearningJournal from './components/CanvasLearningJournal.vue';


console.log("1. just about to call getCanvasCourse")
const canvasData = { updated: 0 } //getCanvasCourse();
console.log("2. just called getCanvasCourse")
console.log(canvasData)


/**
 * @description: Watch for the canvasData object to be updated, once it is add a CanvasLearningJournal component to the group set tab for each group set
 */
watch(
  () => canvasData.updated,
  (updated) => {
    console.log(`canvasData.updated: ${updated}`)
    //addCanvasLearningJournalComponents()
  }
)

function addCanvasLearningJournalComponents() {
  console.log("3. addCanvasLearningJournalComponents")
  const groupSetTabs = document.querySelectorAll('.group-set-tab')
  console.log(groupSetTabs)
  groupSetTabs.forEach((groupSetTab) => {
    console.log(groupSetTab)
    const learningJournalButton = document.createElement('button')
    learningJournalButton.id = 'learning-journal-status'
    learningJournalButton.innerText = 'Learning Journals'
    groupSetTab.appendChild(learningJournalButton)
  })
}

</script>


<template>
  <link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css" rel="stylesheet">

  <div class="learning-journal-status">
    <p>
        <v-icon icon="mdi-menu-down"></v-icon> - oneX <br />
        <i class="mdi-menu-down mdi v-icon v-icon--size-default" aria-hidden="true"></i> - with v-icon and v-icon--size-default<br />
        <i class="mdi-menu-down mdi v-icon" aria-hidden="true"></i> - with v-icon<br />
        <i class="mdi-menu-down mdi" aria-hidden="true"></i> - no v-icon<br />
    </p>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-title expand-icon="mdi-menu-down">
        <v-icon icon="mdi-menu-down"></v-icon>
        <i class="mdi-menu-down mdi v-theme--dark" aria-hidden="true"></i>
        About&nbsp;<em>Canvas Learning Journal</em> 
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <p>ipsum lorem</p>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</div>
</template>

<style scoped>
.learning-journal-status {
  /*margin-top: 1rem;*/
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.v-expansion-panel-title, .fred {
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  padding: 0.5rem;
}

/*.v-icon {
    --v-icon-size-multiplier: 1;
    align-items: center;
    display: inline-flex;
    font-feature-settings: "liga";
    height: 1em;
    justify-content: center;
    letter-spacing: normal;
    line-height: 1;
    position: relative;
    text-indent: 0;
    text-align: center;
    user-select: none;
    vertical-align: middle;
    width: 1em;
    min-width: 1em;
}

.v-icon--size-default {
    font-size: calc(var(--v-icon-size-multiplier) * 1.5em);
}*/
</style>
