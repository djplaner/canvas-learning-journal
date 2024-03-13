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

// Should only be called if on the
// - users page <hostname>://courses/<id>/users 
// - groups page <hostname>://courses/<id>/groups

const peoplePage = isPeople() 
const groupSetPage = isGroupSet()

if ( !peoplePage && !groupSetPage ) {
  console.log("Not on a users or groups page");
  throw new Error("Not on a users or groups page");
}

// Wait for the 
const observer = new MutationObserver((mutations, obs) => {
  console.log("starting")
  console.log(mutations)
  const activeTab = document.querySelector('li.ui-state-active');
  if (activeTab) {
    // get aria-controls attribute of active tab
    const ariaControls = activeTab.getAttribute('aria-controls');
    console.log(`ariaControls ${ariaControls}`);
    // get the div#<ariaControls> element
    const tabContent = document.querySelector(`div#${ariaControls}`);
    if (tabContent) {
      console.log("Tab content is there")
      insertLearningJournalApp(tabContent);
    }
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


function insertLearningJournalApp(tabContent: Element) {
  observer.disconnect();
  if (tabContent) {
    const app = createApp(App).mount(
      (() => {
        const app = document.createElement('div');
        app.style.display = 'inline';
        tabContent.prepend(app);
        return app;
      })(),
    );
  }
  //  }
}

/**
 * @function: isPeople
 * @description: returns true iff the current page is a Canvas course's users page
 *    <hostname>/courses/<id>/users
 * @returns boolean
 */

function isPeople(): boolean {
  const documentUrl = new URL(document.URL);
  const regex = /https:\/\/.*\/courses\/.*\/users$/;

  return (document.URL.match(regex) !== null);
}

/**
 * @function: isGroupSet
 * @description: returns true iff the current page is a Canvas course's groups page
 * @returns boolean
 */

function isGroupSet(): boolean {
  const documentUrl = new URL(document.URL);
  const regex = /https:\/\/.*\/courses\/.*\/groups.*$/;

  return (document.URL.match(regex) !== null);
}
