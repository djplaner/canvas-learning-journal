<script setup lang="ts">

/**
 * @file: App.vue 
 * @description: Root component for Canvas Learning Journal
 * Optionally passed a groupSetId which modifies the component's behaviour
 * - groupSetId == 0
 *   On the people (everyone) Canvas page, component provides basic info on CLJ
 * - groupSetId != 0 
 *   On the group set page for the given groupSetId. Component provides status info
 *   about the group set as a learning journal and access to the CLJ functionality
 * 
 * @prop: groupSetId: Number - Canvas id for current group set (if on group set page)
 */

//import { reactive } from 'vue';
import { watch } from 'vue';

import { GLOBAL_DEBUG } from './lib/tooltips';
import cljEveryone from './components/cljEveryone.vue'
import cljGroupSet from './components/cljGroupSet.vue'

const DEBUG: boolean = true

// props 
// - groupSetId: Number
//   Canvas id for the group set on which the app has been added

const props = defineProps({
  groupSetId: Number
})

const peoplePage: boolean = props.groupSetId === null

if (DEBUG && GLOBAL_DEBUG) {
  console.log(`App.vue: props.groupSetId: ${props.groupSetId}`)
  console.log(`App.vue: peoplePage: ${peoplePage}`)
}

import getCanvasData from './lib/canvasApiData'

const canvasData = getCanvasData();

if (DEBUG && GLOBAL_DEBUG) {
  console.log("2. just called getCanvasCourse")
  console.log(canvasData)
}


/**
 * Watch for the canvasData object to be updated (successful retrieved), 
 * @todo 
 * - working, but not sure if/how will be used
 * - leaving for later reference
 */
watch(
  () => canvasData.updated,
  (updated) => {
    if (DEBUG && GLOBAL_DEBUG) {
      console.log(`canvasData.updated: ${updated}`)
      console.log(canvasData)
    }
    //addCanvasLearningJournalComponents()
  }
)

</script>


<template>
  <cljEveryone v-if="peoplePage" />
  <cljGroupSet v-else :groupSetId="props.groupSetId" />
</template>

<style scoped></style>
