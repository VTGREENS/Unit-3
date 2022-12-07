// ? Arrays

/* 
    ? Array is a list-like object whose prototype has methods to perform:
        * traversal
        * mutation
        * other operations
    ? Arrays are:
        * denoted by [ ]
        * hold multiple data types
        * mutable (can be modified)
        * contents can be accessed by their index
*/

// ? Creating an array literal

let arr = []

console.log(arr instanceof Array, arr) // returns true [ ]

// ? Holding multiple data types
let arrManyDataTypes = ["string", true, 90210, ["John", "Jeff", "James"], undefined, null]

console.log(arrManyDataTypes)

// ? Accessing Single Dimension Array by index

console.log(arrManyDataTypes[0], arrManyDataTypes[2], arrManyDataTypes[4])

// ? Accessing Multi Dimensional Array by index

// What if I want to access "James" out of the nested array?
// ? Chain top-level index to inner-array index
console.log(arrManyDataTypes[3][2])

// ? What if I want to access "i" of string? No methods allowed
console.log(arrManyDataTypes[0][3])

// ? What if I want to acces "ing" of string?
console.log(arrManyDataTypes[0].slice(3))

// ? Arrays are Mutable

// ! Challenge

/* 
    ! Modify our arrManyDataTypes to replace our nested array with an array of your favorite friends. This will require replacement of DA J's

    ! Extrapolate the data and assign it to a new variable called best friends

    ! 11AM
*/

arrManyDataTypes[3] = ["Kevin", "Charlie", "Art"]
console.log(arrManyDataTypes[3])

// ? Array Methods

/* 
    * Array methods are functions that work on Array constructor
    * Allow us to mutate, traverse, and do other things to arrays
    * Denoted by a . at the end of an array we're working on
    * ex: educationTeam.length
*/

// ? Array Length Methods

// ? Checks the length of an array

let educationTeam = [
    ["Paul Niemczyk", "Rob Vanarsdall", "Josh Burke", "Eric Winebrenner"],
    ["Elena Bilodeau", "Ben Villa", "Dave Landey"],
    ["Matt Nolan"]
]

console.log(educationTeam.length)

for (let i = 0; i < educationTeam.length; i++) {
    console.log(i, educationTeam[i])
}

// ? Get the last item of our education team array
console.log(educationTeam[educationTeam.length - 1])

// ! Off-by-one error - very common due to index and "normal" counting

/* 
    ? Array.push()
    * Adds an element to the end of an array
    * Returns new length of an array
*/

educationTeam.push(["Benny Boas", "Kate Sweeney"]) // Returns the length of new array

/* 
    ? Array.pop()
    * Removes last array element and returns it
*/

let cSuite = educationTeam.pop()

console.log(cSuite) // Returns removed item

/* 
    ? Array.shift()
    * Removes the first element from an array
    * Returns the removed item
*/

let cancelledTeam = educationTeam.shift()

/* 
    ? Array.unshift()
    * Adds an element to the beginning of an array
    * Returns new length of an array
*/

educationTeam.unshift(cancelledTeam)

console.log(educationTeam)


// ? Advanced Array Methods

// Arrays are iterable

let bulldogTypes = ["English Bulldog", "French Bulldog", "Victorian Bulldog", "Old English Bulldog", "Bullmastiff", "American Bulldog"]

// for (i of bulldogTypes) {
//     console.log(i)
// }

/* 
    ? Array.forEach()
    * Fires a callback function on each element of an array
    * takes item parameter (each iterable)
    * takes index parameter (index of each iterable)
    * takes array parameter (original array on which .forEach() is working)
*/

// bulldogTypes.forEach((item, index, array) => {
//     console.log(item, index, array)
// })


bulldogTypes.forEach(function(bully, index, array) {
    console.log(array[index][2])
    let newBully = `${bully.slice(0, 2)}${bully[2].toUpperCase()}${bully.slice(3)}`
    array[index] = newBully
})
console.log(bulldogTypes)

/* 
    ? Array.map()
    * Creates an array with elements resulting from the callback function
*/

let marvelCharacters = ["Captain America", "Black Widow", "Doctor Strange", "Ant Man", "Spider Man"]

let capitalized = marvelCharacters.map(i => i.toUpperCase())

capitalized.push("Hawkeye")

// ! .map creates a copy of an array. It will not modify the original
console.log("original", marvelCharacters, "new", capitalized)

/* 
    ? Array.filter()
    * Creates a new array based on a filter function
*/

let startsA = marvelCharacters.filter(function(i) { return i.startsWith("A") })

console.log(startsA)

// ! Mini Challenge

let grades = [56, 78, 96, 41, 22, 7, 15, 10, 89]

/* 
    ? Utilize one of the array methods to raise the grade by 15 points for everyone
    ? Those above 90 should not get any points.
*/
grades.forEach((grade, index, array) => grade > 90 ? null : array[index] = grade + 15)
console.log(grades)