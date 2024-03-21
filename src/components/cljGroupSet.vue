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


// Import SVG icons
import { fuiQuestionCircle48Filled } from 'quasar-extras-svg-icons/fluentui-system-icons'

import { TOOLTIPS } from '../lib/tooltips'

const DEBUG = true

if (DEBUG) {
    console.log(`cljEveryone.vue: TOOLTIPS:`)
    console.log(TOOLTIPS)
}

const props = defineProps({
    groupSetId: Number
})


console.log(`cljGroupSet.vue: groupSetId: ${props.groupSetId}`)

</script>
<template>
    <div class="learning-journal-status">
        <q-icon name="thumbs_up" />
        <q-expansion-item>
            <template v-slot:header>
                <q-item-section>
                    Canvas (groupset {{ props.groupSetId }}) Learning Journal
                    <a target="_blank" :href="`${TOOLTIPS.group_set_learning_journal.for_more.url}`">
                        <q-icon :name="fuiQuestionCircle48Filled" color="primary" size="1.5em">
                            <q-tooltip anchor="bottom start" self="top left" class="bg-grey-4 text-black text-body2"
                                max-width="20rem">
                                {{ TOOLTIPS.group_set_learning_journal.for_more.content }}
                            </q-tooltip>
                        </q-icon>
                    </a>
                </q-item-section>
            </template>
            <q-card>
                <q-card-section>
                    Adipisicing officia aliquip cupidatat veniam in reprehenderit commodo elit eiusmod sint eu. Deserunt eu ad commodo sunt aliqua cupidatat Lorem. Excepteur sunt aliquip nulla consectetur magna ipsum eu elit.
                </q-card-section>
                <q-card-section>
                    Consequat pariatur incididunt magna exercitation. Deserunt sit cupidatat elit amet exercitation exercitation laborum sunt in non officia anim. Eu dolore est occaecat ut amet consequat id eiusmod consectetur consequat.
                </q-card-section>
                <q-card-section>
                    Adipisicing sint ad irure excepteur aute labore. Ad minim voluptate deserunt laborum commodo est elit id. Lorem do ex aliquip do.
                </q-card-section>
            </q-card>
        </q-expansion-item>
    </div>
</template>
