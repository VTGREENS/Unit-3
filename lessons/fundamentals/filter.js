/* 
Filter: 
- Does not destroy the original array
- Typically store the filtered array in a new variable
- Takes call back function that returns either true or false
- Loops through the array
- Must have a RETURN (Arrow functions the return is implied if only one line of code)
*/

let fruits = ["apple", "pear", "mango", "orange", "pineapple"]

// ? How can I use a filter to remove the mango?

const filteredFruit = fruits.filter((fruit) => fruit !== "mango" );

console.log(filteredFruit);

//  ? How can I remove any fruit that has the word "apple" in it?

let fruit1 = "pineapple"

console.log(fruit1.includes("apple"));

const filteredFruit1 = fruits.filter((fruit) => !fruit.includes("apple"));
console.log(filteredFruit1);

//  Function example

const filteredFruitFunctionExample = fruits.filter(removeMango)

function removeMango(fruit) {
    return fruit !== "mango";
}

console.log("Filtered Function", filteredFruitFunctionExample);


// Challenge



let myNumberArray = [3, 5, 7, 3, 5, 5, 5, 2, 7, 2, 12, 5];
let noFives = myNumberArray.filter((num) => num !== 5);
console.log(noFives);

// TODO: Come back here for JEOPARDY

let movies = [
    {name: "Top Gun 2", category: "Action"},
    {name: "Scary Movie 5", category: "Horror"},
];

movies.push({name: "It", category:"Horror"});
movies.push({name:"Get Out", category: "Horror" });
movies.push({name: "Taken", category: "Action"});

console.log(movies);

// ? How can I get a filtered array of just the action movies?

const actionMovies = movies.filter((movie)=> movie.category == "Action");

console.log(actionMovies);

const horrorMovies = movies.filter((movie) => movie.category == "Horror");

console.log(horrorMovies);