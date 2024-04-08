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
 * @description: CLJ component shown on a group set page. A group set may or may not
 * be considered a CLJ. 
 * 
 * If a CLJ 
 * - start loading all the discussion topic data for the CLJ (if not already cached)
 * - show both the configure and orchestrate tabs 
 * - but hide some of the functionality depending on other status of the CLJ. 
 *   Most of the other status is left to sub-components
 * 
 * If not a CLJ (just a normal group set) show the configure tab only
 * 
 * - checks that the groupSetId prop 
 *      - is numeric 
 *      - matches an existing group set in Canvas data
 * @todo: 
 * - have a "waiting" display whilst the Canvas data is gotten
 * - groupSetId checks
 * - display status of group set as a learning journal
 * - provide access to the clj functionality
 */

import { ref } from 'vue'
import '@shoelace-style/shoelace/dist/components/tooltip/tooltip.js';
import '@shoelace-style/shoelace/dist/components/tab/tab.js';
import '@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js';
import '@shoelace-style/shoelace/dist/components/tab-group/tab-group.js';





import { TOOLTIPS, GLOBAL_DEBUG } from '../lib/tooltips'

import cljOverview from './groupset/cljOverview.vue'
import cljParticipation from './groupset/cljParticipation.vue'

import getCanvasData from '../lib/canvasApiData'

const DEBUG = false
const FILE_NAME = "cljGroupSet"

if (DEBUG && GLOBAL_DEBUG) {
    console.log(`${FILE_NAME}: TOOLTIPS:`)
    console.log(TOOLTIPS)
}

// which group set is being displayed is determined by the active tab in Canvas
let activeGroup = getActiveGroupSet()
if (activeGroup === null) {
    console.error(`${FILE_NAME}: activeGroup is null couldn't determine groupSetId`)
    throw new Error(`${FILE_NAME}: activeGroup is null couldn't determine groupSetId`)
}


const groupSetId = ref(activeGroup)
// Clicking on different group set tabs will change the groupSetId in Canvas, 
// add an event handler so this component keeps up
addEventHandlers()

const canvasData = getCanvasData()

// check to see if the current group set is a CLJ
const isLearningJournal = ref(canvasData.mightBeLearningJournal(groupSetId.value))

if (DEBUG && GLOBAL_DEBUG) {
    console.log(`${FILE_NAME}: isLearningJournal: ${isLearningJournal.value}`)
}


if (DEBUG && GLOBAL_DEBUG) {
    console.log(`${FILE_NAME}: groupSetId: ${groupSetId}`)
}

// if the URL has ?open=1 then display the CLJ component in the open state
const urlParams = new URLSearchParams(window.location.search)
const open = urlParams.get('open')
const configOpen = ref(open !== null)

if (DEBUG && GLOBAL_DEBUG) {
    console.log(`${FILE_NAME}: open: ${open} configOpen: ${configOpen.value}`)
}

/**
 * @function addEventHandlers
 * @description: Listen for clicks on all links 
 *    a.group-category-tab-link 
 * indicating the Canvas user is displaying a different groupSet 
 * - Change the groupSetId reactive variable to match the new group set
 * - move the div#clj to the new active tab
 */

function addEventHandlers() {
    const groupCategoryTabs = document.querySelectorAll('a.group-category-tab-link')
    if (DEBUG && GLOBAL_DEBUG) {
        console.log(`${FILE_NAME}: groupCategoryTabs: ${groupCategoryTabs}`)
    }
    groupCategoryTabs.forEach((tab) => {
        tab.addEventListener('click', (event) => {
            // get the href for event.target
            const href = event.target.getAttribute('href')
            // href == #tab-<number>, extract the number
            const number = href.split('-')[1]
            groupSetId.value = number
            isLearningJournal.value = canvasData.mightBeLearningJournal(number)
            const groupCatTab = document.querySelector('div#group_categories_tabs')
            const clj = document.querySelector('div#clj')
            if (groupCatTab && clj) {
                // 
                let activeTab = groupCatTab.querySelector('div.ui-tabs-panel[aria-expanded=true]')
                activeTab.prepend(clj)
            }
        })
    })
}

/**
 * @function getActiveGroupSet
 * @returns groupSetId
 * @description: Determine the active group set by checking which of the 
 * group set tabs in the Canvas interface are active
 * groupSetId will be set by determining the aria-control attribute of the
 * div#group_categories_tabs > ul.collectionViewItems > li with the class ui-tabs-active
*/

function getActiveGroupSet() {
    const activeGroupSet = document.querySelector('div#group_categories_tabs > ul.collectionViewItems > li.ui-tabs-active')
    if (DEBUG && GLOBAL_DEBUG) {
        console.log(`${FILE_NAME}: activeGroupSet: ${activeGroupSet}`)
    }

    if (activeGroupSet) {
        const value = activeGroupSet.getAttribute('aria-controls')
        console.log(`${FILE_NAME}: activeGroupSet aria-controls: ${value}`)
        // extract the number from value where value == tab-<number>
        const number = value.split('-')[1]
        console.log(`${FILE_NAME}: activeGroupSet number: ${number}`)
        return number
    }
    // default to current group set
    console.error(`${FILE_NAME}: getActiveGroupSet - activeGroupSet is null`)
    throw new Error(`${FILE_NAME}: getActiveGroupSet - activeGroupSet is null`)
}


</script>

<template>
    <div v-if="!configOpen">
        <div class="clj-status" id="clj-gs-button">
            <i @click="configOpen = !configOpen" id="clj-gs-config-switch" class="icon-Solid icon-mini-arrow-end"></i>
            Canvas (groupset {{ groupSetId }}) Learning Journal
            <a target="_blank" :href="TOOLTIPS.cljGroupSet.for_more.url">
                <sl-tooltip>
                    <div slot="content">
                        {{ TOOLTIPS.cljGroupSet.for_more.content }}
                    </div>
                    <i class="icon-Solid icon-question"></i>
                </sl-tooltip>
            </a>
        </div>
    </div>
    <div v-else>
        <div class="clj-status" id="clj-gs-button">
            <i @click="configOpen = !configOpen" id="clj-gs-config-switch" class="icon-Solid icon-mini-arrow-end"></i>
            Canvas (groupset {{ groupSetId }})Learning Journal
            <a target="_blank" :href="TOOLTIPS.cljGroupSet.for_more.url">
                <sl-tooltip>
                    <div slot="content">
                        {{ TOOLTIPS.cljGroupSet.for_more.content }}
                    </div>
                    <i class="icon-Solid icon-question"></i>
                </sl-tooltip>
            </a>
        </div>
        <div class="clj-detail" id="clj-gs-detail">
            <sl-tab-group>
                <sl-tab slot="nav" panel="clj-configure">
                    Overview
                    <a target="_blank" :href="TOOLTIPS.cljGroupSet.configure.url">
                        <sl-tooltip hoist>
                            <div slot="content">
                                {{ TOOLTIPS.cljGroupSet.configure.content }}
                            </div>
                            &nbsp;<i class="icon-Solid icon-question"></i>
                        </sl-tooltip>
                    </a>
                </sl-tab>
                <sl-tab slot="nav" panel="clj-orchestrate" v-if="isLearningJournal">
                    Participation
                    <a target="_blank" :href="TOOLTIPS.cljGroupSet.orchestrate.url">
                        <sl-tooltip placement="right-start" hoist>
                            <div slot="content">
                                {{ TOOLTIPS.cljGroupSet.orchestrate.content }}
                            </div>
                            &nbsp;<i class="icon-Solid icon-question"></i>
                        </sl-tooltip>
                    </a>
                </sl-tab>

                <sl-tab-panel name="clj-configure">
                    <cljOverview :groupSetId="groupSetId" />
                </sl-tab-panel>
                <sl-tab-panel name="clj-orchestrate" v-if="isLearningJournal">
                    <cljParticipation :groupSetId="groupSetId" />
                </sl-tab-panel>
            </sl-tab-group>
        </div>
    </div>
</template>
