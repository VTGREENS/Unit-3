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
let lights = {
    "green": ["yellow"],
    "yellow": ["red"],
    "red":["green"],
};

//  Initializing our current light to be green
let currentLight = "green";





async function respond() {
  // your code here
  // remember to use `await` and `ask`
    let answer;
    while (answer !== "exit") {
    answer = await ask(
      `What traffic light color would you like to change to? Your current status is ${currentLight}. >_`
      );

        updateLight(answer);
    }

  process.exit();
}

respond();

function updateLight(newLight) {
    let possibleOptionsToUpdateLight =
    lights[currentLight];
    if (possibleOptionsToUpdateLight.includes(newLight)){
        currentLight = newLight
        console.log( yellow + "You have successfuylly changed the light color!" + white);

    }else {
        console.log(yellow + "What you have typed is not a valid choice. The valid option is " + possibleOptionsToUpdateLight.join (", ") + white);
    }
}

