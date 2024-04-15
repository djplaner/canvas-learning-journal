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
 * @file: cljMissingGroups.vue
 * @description: Show configure options/detail for a specific group set
 * - once canvasData has been updated, display info about all available group sets
 * @todo: 
 * Data gathering
 * - get discussion topic data, including all entries for the current group set
 * Stats analysis
 * - Analyse each groups contributions to identify
 *      - groups with no student entries (ever and in last 7 days)
 *      - groups with no teacher entries (ever and in last 7 days)
 */

import { ref, watch, defineProps } from 'vue'
import type { Header, Item } from "vue3-easy-data-table";

import { TOOLTIPS, GLOBAL_DEBUG } from '../../lib/tooltips'

import { user, getCanvasData } from '../../lib/canvasApiData'

const DEBUG = true
const FILE_NAME = "cljMissingGroups"

const props = defineProps<{
    groupSetId: string,
    numGroups: number
}>()

const canvasData = getCanvasData();

const groupSetId = ref(props.groupSetId)
const numGroups = ref(props.numGroups)

const groupSet = ref(canvasData.groupSetsById[groupSetId.value])


if (DEBUG && GLOBAL_DEBUG) {
    console.log(`${FILE_NAME} groupSetId: ${props.groupSetId} numGroups ${numGroups}`)
    console.log('-----')
}


if (DEBUG && GLOBAL_DEBUG) {
    console.log(`${FILE_NAME} 2. just called getCanvasCourse`)
    console.log(canvasData)
}

// Data table variables
// - define contents of the table
let headers: Header[]
let items: Item[]
// - which students have been selected
const studentsSelected = ref<Item[]>([])
// - search on student name
//const searchField = ref("name")
const searchField = ["name", "sections"]
const searchValue = ref("")


updateMissingGroups()


/**
 * @function updateMissingGroups
 * @description Called to update headers/items the content for the data table of students
 * who are missing groups
 */

 function updateMissingGroups() {
    headers = []
    items = []

    // need to test for loaded data??
    headers = [
        { text: "Name", value: "name", sortable: true },
        { text: "Email", value: "email" },
        { text: "Profile", value: "profile"},
        { text: "Sections", value: "sections" },
    ]

    // loop through the keys of groupSet.studentsWithoutGroup
    // and add each student to the items array
    let student : any
    let id: string
    for ([ id, student ] of Object.entries(groupSet.value.studentsWithoutGroup)) {
        let studentData = {
            name: student.name,
            student: student.name, 
            htmlUrl: student.htmlUrl,
            studentData: student,
            sections: getStudentSections(student)
        }
        items.push( studentData )
    }
 }

 /**
  * @function getStudentSections
  * @param {Student} student
  * @returns {String} commas separated list of sections the student belongs
  * @description Generate a comma separated list of sections the student belongs from
  * the array of enrollments property
  */

  function getStudentSections( student: user  ) : string {
        let sections = []
        for (const enrollment of student.enrollments) {
            sections.push(enrollment.section.name)
        }
        return sections.join(", ")
  }

// watch for changes on props.groupSetId 
watch(
    () => [props.groupSetId,props.numGroups],
    (gsId) => {
        if (DEBUG && GLOBAL_DEBUG) {
            console.log(`${FILE_NAME} changes to groupSetId: ${gsId} and props.groupSetId: ${props.groupSetId}`)
        }
        groupSetId.value = props.groupSetId
        numGroups.value = props.numGroups
        groupSet.value = canvasData.groupSetsById[groupSetId.value]
        updateMissingGroups()
    }
)


</script>

<template>
    <div class="clj-missing-groups">
<!--        <span>search field:</span>
  <select v-model="searchField">
    <option>player</option>
    <option>team</option>
  </select>
  
  <br/> -->

  <span>search value: </span>
  <input type="text" v-model="searchValue">
        <EasyDataTable 
            :headers="headers" :items="items" 
            v-model:items-selected="studentsSelected" 
            :search-field="searchField"
            :search-value="searchValue"
            alternating border-cell>
<!--            <template #item-name="item">
                    {{ item.studentData.name }}
            </template> -->
            <template #item-email="item">
                <span v-if="item.studentData.email">
                    <a :href="`mailto:${item.studentData.email}`">
                        {{ item.studentData.email }}
                    </a>
                </span>
            </template>
        </EasyDataTable>
                        <br /> Field: {{ searchField }} value {{ searchValue }}
    </div>
</template>


<style scoped>
</style>
