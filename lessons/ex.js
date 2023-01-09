let fruits = ["apple", "banana", "tangerine"];
let lastFruit = fruits.pop();
console.log(fruits); // => ["apple", "banana"]
console.log(lastFruit); // => "tangerine"

let fullName = ["Bob", "Saget"];
console.log(fullName.join());   // 'Bob,Saget'
console.log(fullName.join(" "));  // 'Bob Saget'
console.log(fullName.toString()); // 'Bob,Saget'


console.log("Bob Saget".split("")); 
console.log("Bob Saget".split(" ")); 
console.log("Bob Saget".split("o"));

let names = ['Alice', 'Bob', 'Carol', 'Charlie']
function printUpper(name) {
    console.log(name.toUpperCase())
  };
  
  names.forEach(printUpper)

let beginsWithC = function(word) {
  return word.charAt(0).toUpperCase() === 'C';
};

// let cName = names.find(beginsWithC); //=> 'Carol

let cName = names.find(function (word) {
    return word.charAt(0).toUpperCase() === 'C'
}
);

console.log(cName);