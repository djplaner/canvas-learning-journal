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
    App: { 
        loading: {
            content: `Retrieving data from Canvas...`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
    },
    cljEveryone: {
        for_more:  {
            // what is the purpose of the 'everyone' version: overview and create
            content: `Use Canvas groups as (private) student learning journals. Click for more.`,
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
        currentGroupSets: {
            // URL should provide more detail on the columns in the table
            content: `Summary of course's existing group sets.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
        name: {
            content: `Name of the existing group set.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
        selfSignup: {
            content: "Whether students can self-signup to the group set.",
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
        memberLimit: {
            content: `If self signup is enabled, the number of students who can sign-up for a group.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
        numPrompts: {
            content: `Number of prompts (groupset discussion topics) created to guide student contributions.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
        numGroups: {
            content: `Number of groups that exist already in the group set.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
        numNoGroupStudents: {
            content: `Number of students enrolled in the course who are not members of a group.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
        status: {
            content: `Summary of the status of the group set's configuration, including if it's a learning journal.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
    },
    cljStatusLearningJournal: {
        privateLearningJournal: {
            content: `Groupset with single student groups and prompts.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        }, 
        noPrompts: {
            content: `No prompts (groupset discussion topics) created to guide student contributions.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
        noGroups: {
            content: `No groups have been created for this groupset.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
        studentsWithoutGroup: {
            content: `Some enrolled students are not members of a groups (they do not have a learning journal).`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
        multiStudentGroups: {
            content: `Some of the groups have (or could have in the future) more than one student.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
    },
    cljCreateLearningJournal: {
        title: {
            content: `Create a new group set to use for private student learning journals.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
    },
    cljStatusGroupSet: {
        titleGroupSetStatus : {
            content: `Status (Canvas configuration) of this group set.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
        titleLearningJournalStatus: {
            content: `Status of this group set as a learning journal.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        }
    },
    cljStatusDiscussions: {
        title: {
            content: `Statistics for each of the group set's discussion topics.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
        topicTitle: {
            content: `Title of the parent discussion topic assigned to the group set`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        }, 
        numPrompts: {
            content: `Number of prompts (group specific topics).`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
        numNoStudentEntries: {
            content: `Number of prompts without student entries`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
        numNoStaffEntries: {
            content: `Number of prompts without staff entries`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
    },
    cljStatusStudentGroups: {
        title: {
            content: `Participation statistics for each group in the group set.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
    }
}