<script setup lang="ts">

/**
 * @file: App.vue 
 * @description: Implement the Learning Journal Status component in the "EveryOne" tab for the Canvas course's groups page. Add the "Learning Journal" component to each group set tab existing
 * 1. Set up Canvas data store
 * 2. Implement the "Learning Journal Status" component
 * 3. Check for any groupsets and add the "Learning Journal" component 
 */


//import CanvasCourse from './components/CanvasCourse.vue';

import getCanvasCourse from './lib/canvasApiData';


const canvasData = getCanvasCourse();

</script>


<template>
  <button id="learning-journal-status">Learning Journal</button>
</template>

<style scoped>
</style>
