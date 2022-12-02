// Example string you can start with
let myString = 'the rain in spain falls MAINLY on the PLAIN';

// Your Code Goes Here

function capitalize(myString) {
    let firstLetter = myString.charAt(0).toUpperCase();
    let restOfWord = myString.slice(1).toLowerCase();
    return firstLetter + restOfWord;    
}

// console.log(capitalize(myString));

function titleize(myString) {
    // split the myString into individual words by splitting it based on an empty space
    let strcopy = myString.split(' ');
    console.log("strcopy", strcopy);
//    create a variable to store the return values from the .map
    let aOCLW = strcopy.map(capitalize)
    console.log("aOCLW", aOCLW);
//  Using Join you can combine the array into a single string.

let combinedaOCLW = aOCLW.join(" ");
console.log("combinedaOCLW", combinedaOCLW);

}

titleize(myString);
// Should print: 'The Rain In Spain Falls Mainly On The Plain


//! Refactor remix!

function titleizeRefactored(myString){
    return myString.split(" ").map(capitalize).join(" ")
}
console.log("function refactored", titleizeRefactored(myString));

// ! Refactor with arrow function

const arrowFunctionRefactored =(myString) => myString.split(" ").map(capitalize).join(" ");

console.log("Arrow Function Refactored", arrowFunctionRefactored(myString));