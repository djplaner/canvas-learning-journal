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

# Conceptual model

The following table summarises the key concepts of the conceptual model that underpins the design of the _Canvas Learning Journal_ (_CLJ_) tool and how that model is translated into [Canvas](https://canvas.instructure.com) functionality.

| _CLJ_ Concept | Description | Canvas |
| --- | --- | --- |
| Learning journal task | A learning task where a specific set of students are asked to reflect on their learning. | Each learning journal task is implemented as a [Canvas Group set](https://lx.uts.edu.au/collections/group-work-and-student-collaboration/resources/groups-in-canvas/) |
| Student learning journal | A space where one (or possibly more) student engages in the learning journal task. | Each learning journal is implemented as a [Canvas group](https://lx.uts.edu.au/collections/group-work-and-student-collaboration/resources/groups-in-canvas/). A group which belongs to the group set associated with the learning journal task. |
| Prompts | A set of questions or other stimuli to which students are expected to respond as part of the learning journal task. | Each prompt is implemented as a [Canvas discussion topic](https://help.canvas.yale.edu/a/1327216-canvas-discussions-overview). Each discussion can be graded or not. |
| Entries | An entry is a response to a prompt by students or instructors. Depending on the learning journal task design students may be expected to make multiple entries. | Each entry is implemented as a [Canvas discussion reply](https://community.canvaslms.com/t5/Student-Guide/How-do-I-view-and-sort-discussion-replies-as-a-student/ta-p/465). |
