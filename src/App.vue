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

//import CanvasCourse from './components/CanvasCourse.vue';

import getCanvasCourse from './lib/canvasApiData';

//import CanvasLearningJournal from './components/CanvasLearningJournal.vue';


console.log("1. just about to call getCanvasCourse")
const canvasData = { updated: 0} //getCanvasCourse();
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
  groupSetTabs.forEach( (groupSetTab) => {
    console.log(groupSetTab)
    const learningJournalButton = document.createElement('button')
    learningJournalButton.id = 'learning-journal-status'
    learningJournalButton.innerText = 'Learning Journals'
    groupSetTab.appendChild(learningJournalButton)
  })
}

</script>


<template>
  <button id="learning-journal-status">Learning Journals</button>
</template>

<style scoped>
</style>
