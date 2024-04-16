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
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

/**
 * @function getEnvironmentObject
 * @returns an object containing a select sample of Canvas environment variables
 * @description Implemented as a kludge to allow use of environment variables in TypeScript
 */

export function getEnvironmentObject() {
    const fieldsOfInterest = [
        "current_user_id", "current_user_is_student", "currrent_user"
    ]
    let object = {}

    fieldsOfInterest.forEach(field => {
        object[field] = ENV[field]
    })

    console.log("Environment object created: ")
    console.log(ENV)

    return object
}