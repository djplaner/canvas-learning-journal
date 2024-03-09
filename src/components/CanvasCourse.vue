<script setup lang="ts">
/*
 * Take the name of a course as a prop and enable changing that name via a input field
 */
import { ref, computed } from 'vue'

import getCanvasCourse from '../lib/canvasApiData';

const canvasCourse = getCanvasCourse();

</script>

<template>
  <!-- <h1>Course id is {{ courseId }} course name {{ courseName }}</h1> -->
  <p>Name: {{ canvasCourse.name }} </p>
  <p>id: {{ canvasCourse.id }} </p>

<!--  <div v-if="canvasCourse.id !== -1"> -->
    <ul>
      <li> Change course name: <input v-model="canvasCourse.name" /> </li>
      <li> course code: <input v-model="canvasCourse.courseObject.course_code" /> </li>
    </ul>
<!--  <div v-else>
    <p>Course not (yet) found</p>
  </div> -->

</template>

<style scoped></style>