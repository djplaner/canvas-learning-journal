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
 * Initiates the Canvas API calls to retrieve all data necessary. Only displays sub-components
 * when data is retrieved.
 * 
 * @prop: groupSetId: Number - (optional) Canvas id for current group set (if on group set page)
 */

import { watch, defineProps, ref } from 'vue';

import cljEveryone from './components/cljEveryone.vue'
import cljGroupSet from './components/cljGroupSet.vue'
import getCanvasData from './lib/canvasApiData'
import { GLOBAL_DEBUG, TOOLTIPS } from './lib/tooltips';

import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.0/cdn/');


const DEBUG: boolean = true
const FILE_NAME: string = "App"

// props 
// - groupSetId: Number
//   Canvas id for the group set on which the app has been added
//   One the "everyone" page if no group set id

let props = defineProps({
  groupSetId: Number
})

const peoplePage: boolean = props.groupSetId === null

if (DEBUG && GLOBAL_DEBUG) {
  console.log(`${FILE_NAME} props.groupSetId: ${props.groupSetId}`)
  console.log(`${FILE_NAME} peoplePage: ${peoplePage}`)
  console.log(`${FILE_NAME} TOOLTIPS:`)
  console.log(TOOLTIPS.App)
}

// initiate the canvas API data call
const canvasData = getCanvasData();
const dataLoaded = ref(false)

// Watch for the canvasData object to be updated (successful retrieved) 

watch(
  () => canvasData.updated,
  (updated) => {
    if (DEBUG && GLOBAL_DEBUG) {
      console.log(`canvasData.updated: ${updated}`)
      console.log(canvasData)
    }
    dataLoaded.value = true
  }
)

</script>


<template>
  <div class="clj-status" v-if="!dataLoaded">
    Canvas Learning Journal 
    <a target="_blank" :href="`${TOOLTIPS.App.loading.url}`"> 
      <sl-tooltip :content="`${TOOLTIPS.App.loading.content}`">
        <i class="icon-Solid icon-clock"></i>
      </sl-tooltip>
    </a> 
  </div>
  <div class="clj-root" v-else>
    <cljEveryone v-if="peoplePage" />
    <cljGroupSet v-else :groupSetId="props.groupSetId" />
  </div>
</template>

<style scoped></style>
