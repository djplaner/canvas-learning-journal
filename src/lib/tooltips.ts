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

import dayjs from 'dayjs'

export const GLOBAL_DEBUG = true;

/**
 * @function formatDate
 * @param dateString 
 * @param invalidMessage : string message to be returned if date is invalid
 * @description Simple date format inspired by
 *   https://jerickson.net/how-to-format-dates-in-vue-3/
 * @returns 
 */
export function formatDate( dateString : string, invalidMessage: string = "Invalid date") : string {
    const date = dayjs(dateString)
    if (!date.isValid()) {
        return invalidMessage
    }
    return date.format("DD/MM/YYYY h:mm:ss a")
}

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
        },
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
            content: `Overview of student and teacher contributions (entries) to each group's prompts (discussion topics).`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
        noStudentEntries: {
            content: `Number of prompts for each group that are missing entries from students. Both in the last 7 days and ever.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
        noStaffEntries: {
            content: `Number of prompts for each group that are missing entries from staff. Both in the last 7 days and ever.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
    },
    cljOverviewParticipation: {
        title: {
            content: `Gain an overview of group participation with prompts for the whole groupset.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
    },
    cljPromptParticipationSummary: {
        title: {
            content: `Title of parent discussion topic for all groups.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
        assessable: {
            content: `Whether the discussion topic is assessable.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
        pointsPossible: {
            content: `Max points possible for the assignment.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
        dueDate: {
            content: `Time/date when the assignment is due.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
        needsGrading: { 
            content: `Number of submissions requiring grading.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
        num0StudentEntries: {
            content: `Number of groups with no student entries for this topic.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
        num0StaffEntries: {
            content: `Number of groups with no staff entries for this topic.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
        totalStudentEntries: {
            content: `Count of all student entries from all groups.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
        totalStaffEntries: {
            content: `Count of all staff entries from all groups.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
    },
    cljPromptParticipationDetails: {
        title: {
            content: `Title of the group specific discussion topic.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
        group: {
            content: `Name and members of each group, with member specific links.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
        numStudents: {
            content: `Number of students in the group.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
        daysSinceLastEntry: {
            content: `Number of days since the last student entry.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
        daysUnanswered: {
            content: `Number of days since the last staff entry.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
        numStudentEntries: {
            content: `Number of student entries in the prompt for this group.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
        numStaffEntries: {
            content: `Number of staff entries in the prompt for this group.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
        entries: {
            content: `Threaded display of all entries this group.`,
            url: "https://djplaner.github.io/canvas-learning-journal/"
        },
    }
}