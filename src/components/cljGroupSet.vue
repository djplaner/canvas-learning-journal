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
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
-->


<script setup>
/**
 * @file: cljEveryone.vue
 * @description: LJ component shown on a group set page
 * - checks that the groupSetId prop 
 *      - is numeric 
 *      - matches an existing group set in Canvas data
 * - displays the status of the group set as a learning journal in the base component
 * - provides functionality to access the clj functionality
 *      - methods to set up the group set as a learning journal
 *      - reports on student contributions
 * @todo: 
 * - have a "waiting" display whilst the Canvas data is gotten
 * - groupSetId checks
 * - display status of group set as a learning journal
 * - provide access to the clj functionality
 */

import { ref } from 'vue'

import { TOOLTIPS } from '../lib/tooltips'

import cljConfiguration from './cljConfiguration.vue'
import cljOrchestration from './cljOrchestration.vue'

const DEBUG = true

if (DEBUG) {
    console.log(`cljEveryone.vue: TOOLTIPS:`)
    console.log(TOOLTIPS)
}

const props = defineProps({
    groupSetId: Number
})

if (DEBUG) {
    console.log(`cljGroupSet.vue: groupSetId: ${props.groupSetId}`)
}

const configOpen = ref(false)

/**
 * @function toggleConfig
 * @description Event handler for config switch. Show/hide the configuration panel
 * for the current group set/learning journal
 * -
 * @param {} event 
 */

function toggleConfig() {
    configOpen.value = !configOpen.value
    if (DEBUG) {
        console.log(`cljGroupSet.vue: toggleConfig: configOpen: ${configOpen.value}`)
    }

    const configSwitch = document.getElementById('clj-gs-config-switch')
    console.log(`cljGroupSet.vue: toggleConfig: configSwitch: ${configSwitch}`)

    if (configOpen.value) {
        document.getElementById('clj-gs-detail').style.display = 'block'
        if (configSwitch) {
            configSwitch.classList.remove('icon-mini-arrow-end')
            configSwitch.classList.add('icon-mini-arrow-down')
        }
    } else {
        document.getElementById('clj-gs-detail').style.display = 'none'
        if (configSwitch) {
            configSwitch.classList.remove('icon-mini-arrow-down')
            configSwitch.classList.add('icon-mini-arrow-end')
        }
    }
}

</script>

<template>
    <div class="clj-status" id="clj-gs-button">
        <i @click="toggleConfig" id="clj-gs-config-switch" class="icon-Solid icon-mini-arrow-end"></i>
        Canvas (groupset {{ props.groupSetId }}) Learning Journal
        <a target="_blank" :href="TOOLTIPS.group_set_learning_journal.for_more.url">
            <sl-tooltip>
                <div slot="content">
                    {{ TOOLTIPS.group_set_learning_journal.for_more.content }}
                </div>
                <i class="icon-Solid icon-question"></i>
            </sl-tooltip>
        </a>
    </div>
    <!--<div class="learning-journal-detail" style="display:none">-->
    <div class="clj-detail" id="clj-gs-detail" style="display:none">
        <sl-tab-group>
            <sl-tab slot="nav" panel="clj-configuration">
                Configuration
                <a target="_blank" :href="TOOLTIPS.group_set_learning_journal.configuration.url">
                    <sl-tooltip hoist>
                        <div slot="content">
                            {{ TOOLTIPS.group_set_learning_journal.configuration.content }}
                        </div>
                        &nbsp;<i class="icon-solid icon-question"></i>
                    </sl-tooltip>
                </a>
            </sl-tab>
            <sl-tab slot="nav" panel="clj-orchestration">
                Orchestration
                <a target="_blank" :href="TOOLTIPS.group_set_learning_journal.orchestration.url">
                    <sl-tooltip placement="right-start" hoist>
                        <div slot="content">
                            {{ TOOLTIPS.group_set_learning_journal.orchestration.content }}
                        </div>
                        &nbsp;<i class="icon-solid icon-question"></i>
                    </sl-tooltip>
                </a>
            </sl-tab>

            <sl-tab-panel name="clj-configuration">
                <cljConfiguration :groupSetId="props.groupSetId" />
            </sl-tab-panel>
            <sl-tab-panel name="clj-orchestration">
                <cljOrchestration :groupSetId="props.groupSetId" />
            </sl-tab-panel>
        </sl-tab-group>
    </div>
</template>
