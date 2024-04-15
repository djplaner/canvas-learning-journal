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

<script setup lang="ts">

import { ref, watch } from 'vue'
import { TOOLTIPS, GLOBAL_DEBUG } from '../../../lib/tooltips'
import { getCanvasData } from '../../../lib/canvasApiData';


import cljPromptParticipationDetails from './cljPromptParticipationDetails.vue'
import cljPromptParticipationSummary from './cljPromptParticipationSummary.vue'

const DEBUG = false
const FILE_NAME = "cljPromptsParticipation"

if (DEBUG && GLOBAL_DEBUG ) {
    console.log(`${FILE_NAME} TOOLTIPS:`)
    console.log(TOOLTIPS)
}

const props = defineProps<{
    groupSetId: string
}>()

const canvasData = getCanvasData();
const groupSet = ref(canvasData.groupSetsById[props.groupSetId])

if (DEBUG && GLOBAL_DEBUG) {
    console.log(`${FILE_NAME} groupSetId: ${props.groupSetId}`)
    console.log(`${FILE_NAME} groupSet.updated: ${groupSet.value.updated}`)
}




// watch for changes in props.groupSetId 
watch(
    () => props.groupSetId,
    (groupSetId) => {
        if (DEBUG && GLOBAL_DEBUG) {
            console.log(`${FILE_NAME} update from watch groupSetId: ${groupSetId}`)
        }
        groupSet.value = canvasData.groupSetsById[groupSetId]
    }
)

</script>

<template>
    <div class="clj-status-prompts">
        <h3>Prompts participation - {{ groupSet.name }}</h3>

        <p>Each of the tabs below provides a summary of student and staff participation in each of the {{ groupSet.numPrompts }} prompts for this learning journal.</p>

        <sl-tab-group>
                <sl-tab v-for="topic in groupSet.discussionTopics" key="topic.id" slot="nav" :panel="`${topic.title}`"> 
                    {{ topic.title }}
                </sl-tab>

                <sl-tab-panel v-for="topic in groupSet.discussionTopics" key="topic.id" :name="`${topic.title}`">
                    <cljPromptParticipationSummary :groupSetId="groupSet._id" :topicId="topic.id" />
                    <cljPromptParticipationDetails :groupSetId="groupSet._id" :topicId="topic.id" />
                </sl-tab-panel>
            </sl-tab-group>


    </div>
</template>

<style scoped>
.clj-status-prompts {
    background-color: #f0f0f0;
    padding: 1em;
    margin: 1em;
    border-radius: 1em;
}

sl-tab::part(base) {
    font-size: 0.8rem;
    padding: 0.8rem;
    background: #f0f0f0;
}
</style>
