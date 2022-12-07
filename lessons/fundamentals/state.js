const readline = require("readline");
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);
let white = "\033[0;39m";
let yellow = "\033[0;33m";

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}
// Don't change anything above this line!!!

/* Create an object called states

- keys: elementary, middle school, high school, college, & military
- each key will have a value that is in an array format
- elementary  you can only go to middle school
- middle school you can only go to high school
- high school - you can go to college, work, military
- college - you can go to work
- military - you can go to work or college
*/
let states = {
  elementary: ["middle school"],
  "middle school": ["high school"],
  "high school": ["college", "military"],
  military: ["work", "college"],
  college: ["work"],
};
// Initialize our current state to be elementary
let currentState = "elementary";

async function respond() {
  // your code here
  // remember to use `await` and `ask`
  let answer;
  while (answer !== "exit") {
    answer = await ask(
      `What status would you like to go to next? Your current status is ${currentState}. >_`
    );
    updateState(answer);
  }
  process.exit();
}
''
respond();
/* 
- function should check to see if the current new state selection is an option to move to the next state options.
-Ex: I can only go to Middle School if it's on the list
-if we do not have a match then display that to the user what are valid paths they can go
*/
function updateState(newState) {
    let possibleOptionsToUpdateState = states[currentState];
  if (possibleOptionsToUpdateState.includes(newState)){
        currentState = newState 
        console.log(yellow + "You have successfully moved to a new status!" + white);

  }else {
    // Let user know that they typed in a wrong response
    console.log(yellow + "What you have typed is not a valid option. Valid options are " + possibleOptionsToUpdateState.join (", ") + white);
  } 

}

