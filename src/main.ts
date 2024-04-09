/**
 * @file: src/main.ts
 * @description: Main entry point for canvas learning journal. 
 * Mount the app on either the people or group set URLs for a Canvas course.
 * Place the app 
 *     (deprecatedbefore the div#group_categories_tabs
 *    under the active tabs first thing
 *  
 *       div#group_categories_tabs > div.ui-tabs-panel with aria-expanded=true
 * 
 * The app will use the URL to determine what information to display
 * - users page <hostname>://courses/<id>/users
 *   Some basic info about how to use the learning journal app
 * - group set page <hostname>://courses/<id>/groups#tab-<groupSetId>
 *   Info depending on the group set configuration
 */
import { createApp } from 'vue'


import Vue3EasyDataTable from 'vue3-easy-data-table'
import 'vue3-easy-data-table/dist/style.css'

import "@shoelace-style/shoelace/dist/themes/light.css"
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js'
setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.0/cdn/')

import App from './App.vue'
import './style.css'

import { GLOBAL_DEBUG } from './lib/tooltips'
const DEBUG: boolean = false
const FILE_NAME: string = "CLJ main.ts"

// Should only be called if on the
// - users page <hostname>://courses/<id>/users 
// - groups page <hostname>://courses/<id>/groups

const documentUrl = new URL(document.URL)
const peoplePage = isPeople(documentUrl)
const groupSetPage = isGroupSet(documentUrl)

if (!peoplePage && !groupSetPage) {
  if (DEBUG && GLOBAL_DEBUG) {
    console.log("Not on a users or groups page")
  }
  throw new Error("Not on a users or groups page")
}

const groupSetId = groupSetPage ? Number(documentUrl.hash.split('-')[1]) : null

if (DEBUG && GLOBAL_DEBUG) {
  console.log(`peoplePage: ${peoplePage}, groupSetPage: ${groupSetPage}, groupSetId: ${groupSetId}`)
}

const observer = new MutationObserver((mutations, obs) => {
  const groupCategoriesTab = document.querySelector('div#group_categories_tabs')
  if (groupCategoriesTab) {
    insertLearningJournalApp(groupCategoriesTab)
  }
})
observer.observe(document, { childList: true, subtree: true })


/**
 * @function: insertLearningJournalApp
 * @description: Insert the Learning Journal app into the DOM
 * Currently being added at the top of the users and groupset pages
 */

function insertLearningJournalApp(groupCategoriesTab: Element) {

  // find the div.ui-tabs-panel with aria-expanded=true within groupCategoriesTab
  const activeTab = groupCategoriesTab.querySelector('div.ui-tabs-panel[aria-expanded=true]')

  if (!activeTab) {
    console.error(`${FILE_NAME} - unable to find active tab`)
    throw new Error("Unable to find active tab")
  }

  // call off the mutation observer
  observer.disconnect()

  const app = createApp(App, { groupSetId: groupSetId })

  app.component('EasyDataTable', Vue3EasyDataTable)

  app.mount(
    (() => {
      const appElem = document.createElement('div')
      appElem.id = 'clj'
      appElem.style.display = 'inline'
      //groupCategoriesTab.before(appElem)
      activeTab.prepend(appElem)
      return appElem
    })(),
  )
}

/**
 * @function: isPeople
 * @description: returns true iff the current page is a Canvas course's users page
 *    <hostname>/courses/<id>/users
 * @returns boolean
 */

function isPeople(documentUrl: URL): boolean {
  const regex = /https:\/\/.*\/courses\/.*\/users$/

  return (document.URL.match(regex) !== null)
}

/**
 * @function: isGroupSet
 * @description: returns true iff the current page is a Canvas course's groups page
 * @returns boolean
 */

function isGroupSet(documentUrl: URL): boolean {
  const regex = /https:\/\/.*\/courses\/.*\/groups.*$/

  return (document.URL.match(regex) !== null)
}
