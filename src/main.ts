/**
 * @file: src/main.ts
 * @description: Main entry point for canvas learning journal. 
 * 1. Checks to see currently looking at the Canvas course's groups page
 * 2. Adds the root component as an invisible div to the body depending
 *    on whether a group set tab is active
 */
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';


if (isUsersPage() || isGroupPage()) {
  //const groupTabs = document.querySelector('div#tab-0');
  const groupTabs = document.querySelector('div#group_categories_tabs');
  console.log("grouptabs")
  console.log(groupTabs);
  if (groupTabs) {
    //const listItems = groupTabs.querySelector('a#addUsers');
    //const listItems = groupTabs.querySelector('ul.collectionViewItems');
    const listItems = groupTabs.querySelector('div.pull-right');
    console.log("List items")
    console.log(listItems);
    if (listItems) {
      const app = createApp(App).mount(
        (() => {
          const app = document.createElement('div');
          // add the style "display:inline" to div
          app.style.display = 'inline';
          listItems.prepend(app);
          // listItems.after(app);
          //listItems.appendChild(app);
          return app;
        })(),
      );
    }
  }
}

/**
 * @function: isUsersPage
 * @description: returns true iff the current page is a Canvas course's users page
 *    <hostname>/courses/<id>/users
 * @returns boolean
 */

function isUsersPage(): boolean {
  const documentUrl = new URL(document.URL);
  const regex = /https:\/\/.*\/courses\/.*\/users$/;

  return (document.URL.match(regex) !== null);
}

/**
 * @function: isGroupPage
 * @description: returns true iff the current page is a Canvas course's groups page
 * @returns boolean
 */

function isGroupPage(): boolean {
  const documentUrl = new URL(document.URL);
  const regex = /https:\/\/.*\/courses\/.*\/groups$/;

  return (document.URL.match(regex) !== null);
}

/**
 * @function: isGroupSetActive
 * @description: returns true iff a groupset tab on the groups page is currently active
 * Tabs are stored in div#group_categories_tabs > ul.collectionViewItems > li.ui-state-active
 * @returns: boolean
 */

function isGroupSetActive(): boolean {
  const groupSetTab = document.querySelector(
    'div#group_categories_tabs > ul.collectionViewItems > li.ui-state-active');
  console.log(groupSetTab)
  // get the content of groupSetTab
  const groupSetTabContent = groupSetTab?.textContent;
  console.log(groupSetTabContent);
  return groupSetTabContent !== 'Everyone';
}