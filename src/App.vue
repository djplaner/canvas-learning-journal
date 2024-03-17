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

import { createApp, reactive } from 'vue';
import { computed, watch } from 'vue';

//import { matLineQuestionCircle } from 'quasar-extras-svg-icons/material-line-icons'
import { fuiQuestionCircle48Filled } from 'quasar-extras-svg-icons/fluentui-system-icons'

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
  <div class="learning-journal-status">
    <a href="https://google.com/">
      <q-icon :name="fuiQuestionCircle48Filled" color="primary" size="1.5em">
        <q-tooltip anchor="bottom left" self="top middle" class="bg-grey-4 text-black text-body2" max-width="20rem">
          <p>Help to create and orchestrate individual student learning journals using a groupset, individual student
            groups, and graded discussions.</p>
          <p>For more, click the question mark.</p>
        </q-tooltip>
      </q-icon>
    </a>
    Canvas Learning Journal
  </div>
</template>

<style scoped>
.learning-journal-status {
  /*margin-top: 1rem;*/
  margin-bottom: 1rem;
  padding: 0.5rem;
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: fit-content;
  /* align to the right */
  margin-left: auto;
  text-align: right;
}

.v-expansion-panel-title,
.fred {
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
