// Copyright (C) 2024 David Jones
// 
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
// 
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
// 
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

/**
 * @file src/lib/tooltips.ts
 * @description Export a TOOLTIPS object that is used by individual components
 * and their embedded links to the CLJ documentation site.
 */

export const GLOBAL_DEBUG = true;

// define the TOOLTIPS object containing all internal tooltips and documentation links
export const TOOLTIPS = {
    cljEveryone: {
        for_more:  {
            // what is the purpose of the 'everyone' version: overview and create
            content: `Use Canvas groups as private student learning journals. Click for more.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        }
    },
    cljGroupSet: {
        for_more: {
            // the 'group_set' component allows configure and orchestration of a possible learning journal
            content: `Determine if and how this group set can be used to provide private student learning journals. Click for more.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
        configure: {
            content: `Design if/how this groupset will work as a learning journal.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
        orchestrate: {
            content: `Understanding student contributions to their learning journals and take appropriate action.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        }
    },
    cljGroupSets: {
        current_group_sets: {
            // URL should provide more detail on the columns in the table
            content: `Summary of course's existing group sets.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
    }
}