/**
 * @file: src/main.ts
 * @description: Main entry point for canvas learning journal. 
 * Mount the app on either the people or group set URLs for a Canvas course.
 * Place the app before the div#group_categories_tabs
 * The app will use the URL to determine what information to display
 * - users page <hostname>://courses/<id>/users
 *   Some basic info about how to use the learning journal app
 * - group set page <hostname>://courses/<id>/groups#tab-<groupSetId>
 *   Info depending on the group set configuration
 */
import { createApp } from 'vue'
import { Quasar } from 'quasar'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass' // as recommended


import App from './App.vue'
import './style.css'

// Should only be called if on the
// - users page <hostname>://courses/<id>/users 
// - groups page <hostname>://courses/<id>/groups

const documentUrl = new URL(document.URL);
const peoplePage = isPeople(documentUrl)
const groupSetPage = isGroupSet(documentUrl)

if (!peoplePage && !groupSetPage) {
  console.log("Not on a users or groups page");
  throw new Error("Not on a users or groups page");
}

const groupSetId = groupSetPage ? Number(documentUrl.hash.split('-')[1]) : null;

console.log(`peoplePage: ${peoplePage}, groupSetPage: ${groupSetPage}, groupSetId: ${groupSetId}`)

const observer = new MutationObserver((mutations, obs) => {
  const groupCategoriesTab = document.querySelector('div#group_categories_tabs');
  if (groupCategoriesTab) {
    insertLearningJournalApp(groupCategoriesTab);
  }
});
observer.observe(document, { childList: true, subtree: true });


/**
 * @todo: Finalise where the global "Learning Journal" app gets placed. 
 * Requirements
 * - Same place all the time 
 * - Fits with the Canvas UI
 * Options 
 * - before div#group_categories_tabs
 *   Good for sample place, not so great for Canvas UI as it's outside the tab
 *   Could assuage this with naming, but...
 * - First element of the div.ui-tabs-<id> that matches the aria-controls property of the active tab
 */

//groupCategoriesTabs();


function insertLearningJournalApp(groupCategoriesTab: Element) {
  observer.disconnect();
  const app = createApp(App, { groupSetId: groupSetId } )
  //const app = createApp(App  )
  //const app = createApp(App, { }  )

  const quasarConfig = {
    config: { },
    framework: {
      iconSet: 'material-icons',
    },
    extras: [ 
      'material-icons',
    ],
  }

  app.use(Quasar, quasarConfig )

  app.mount(
    (() => {
      const appElem = document.createElement('div');
      appElem.style.display = 'inline';
      groupCategoriesTab.before(appElem);
      return appElem;
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
  const regex = /https:\/\/.*\/courses\/.*\/users$/;

  return (document.URL.match(regex) !== null);
}

/**
 * @function: isGroupSet
 * @description: returns true iff the current page is a Canvas course's groups page
 * @returns boolean
 */

function isGroupSet(documentUrl: URL): boolean {
  const regex = /https:\/\/.*\/courses\/.*\/groups.*$/;

  return (document.URL.match(regex) !== null);
}
