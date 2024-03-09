<script setup lang="ts">
/*
 * Take the name of a course as a prop and enable changing that name via a input field
 */
import { ref } from 'vue';

const courseName = defineModel('courseName', { type: String, required: true });
const courseId = defineProps(['courseId']);


// this does not work because courseName is modified by an async call and changes
// after this is set initially
//const localCourseName = ref(courseName);

function onInput(e: Event) {
  if (e.target instanceof HTMLInputElement) {
    console.log(`onInput: ${e.target.value}`);
//    emit('update:courseName', $event.target.value) 
  }

//  courseName.value = e.target.value;
}

function onClick( e: Event) {
  courseName.value = 'new name';
}
</script>

<template>
  <h1>Course id is {{ courseId }} course name {{ courseName }}</h1>

  <div class="card">
    <!-- input v-model=localCourseName / -->

    <!--<input :value="courseName" @input="$emit('update:courseName', $event.target.value)" />-->
    <input v-model="courseName" />
    <button @click="onClick">Change</button>
  </div>

</template>

<style scoped>
</style>
