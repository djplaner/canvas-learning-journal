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
 along with this program.  If not, see <https://www.gnu.org/licenses/>.
-->

# Software - reference overview

The _software_ section of the [Reference documentation](../) provides a detailed reference to the interface and operation of the _Canvas Learning Journal_ (_CLJ_) software. Since the _CLJ_ software interface provides direct links to information within the software documentation. The software documentation is structured to match software interface.

_CLJ_ is designed to run when instructors are accessing [the _People_ page](https://community.canvaslms.com/t5/Instructor-Guide/How-do-I-use-the-People-page-in-a-course-as-an-instructor/ta-p/667) in a Canvas course. On this page instructors are able to access information via two different types of tabs 

1. The _Everyone_ tab.

    Information and functionality to search and filter data about the people enrolled in the course.

2. Additional _Groupset_ tabs.

    To create groups of users in Canvas you create groupsets. Each groupset contains multiple groups. THe People page will have a tab for each groupset within a course.

The _CLJ_ interface is different on each of these two types of tabs. The _software_ section of the reference documentation is divided into sub-sections to reflect this as summarised in the following table.

| Sub-section | Canvas tab | Documentation |
| ------------ | ----------- | ----------- |
| [Everyone](./everyone/index.md) | Everyone tab | Explanation of the learning journal specific overviews of existing groupsets and the ability to create a new groupset provided by _CLJ_. |
| [Groupsets](./groupsets/index.md) | Groupset tab | Explanation of the _CLJ_ functionality to create and manage learning journal activities. 
| [Shared](./shared/index.md) | Both tabs | Explanation of features shared between both tabs |

!!! abstract "Page purpose"

    Provide basic overview to software reference. Pointing to other sections.

    Also including some higher level stuff, e.g. Loading





## Loading

Before _Canvas Learning Journal_ can display any information it was must retrieve information about the current course and its students, teaching staff, groupsets, and groups. Whilst retrieving data some functionality will be unavailable.

There are different stages to loading. Each stage happens at a different time and retrieves different types of data. The following table summarises those stages.

| Stage | When | Data retrieved |
|-------|------|----------------|
| 1. Initial | Whenever the _CLJ_ is first loaded | Initial course information, details of students and teachers, details of current groupsets and groups. |
| 2. Groupset | When a groupset is selected | Detailed information about contributions to group discussion topics. |
