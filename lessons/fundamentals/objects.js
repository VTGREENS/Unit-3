/* 
Objects
- contain properties
- Visually you will see them with Key & Value Pairs
- Keys will always be strings "Most of the time Single String" ex: "age", "firstName"
- Values can be of any datatype: strings, booleans, numbers, undefined, null, arrays, objects, functions
*/

let abby = {
    species:"dog",
    color: "brown",
    spayed: true,
    breed: "mutt",
    weight: 40,
    favoriteActivity: "chasing squirrels",
    bestPlayFriends: ["Buster", "Lady", "Daisy"]
}

// ? How do we access the data in the object?
// ! We can use DOT NOTATION

console.log("color:", abby.color);
// How do we access the breed?

console.log("breed:", abby.breed);

// How do we access "Lady"?

console.log("Best Play Friends:", abby.bestPlayFriends[1]);

// ! we can use SQUARE BRACKET NOTATION
// Favorite Activity
console.log("Favorite Activity:", abby["favoriteActivity"]);

// ? How do we add a new property to an object? Ex. add age.

abby.age = 5;
console.log(abby);

// How can I get a list of the key values and have them in an array?

let abbyKeys = Object.keys(abby);
let abbyValues = Object.values(abby);

console.log(abbyKeys);
console.table(abbyKeys);
console.log("abbyValues", abbyValues);


let buster = {
    species:"dog",
    color: "black",
    spayed: false,
    breed: "Husky",
    weight: 40,
    favoriteActivity: "chasing Dogs",
    bestPlayFriends: ["Abby"]
};
abby.name = "abby";
buster.name = "buster";
let combinedObjects = [abby, buster];

console.log("combined", combinedObjects);

let sentence = `${combinedObjects[0].name} is a ${combinedObjects[0].species} and has ${combinedObjects[0].bestPlayFriends.length} friends`;

console.log(sentence);