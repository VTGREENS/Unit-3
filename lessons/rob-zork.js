let Room = require("./room.js");
const readline = require("readline");

let white = "\033[0;39m";
let yellow = "\033[0;33m";

const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

let foyer = new Room({
  name: "foyer",
  inventory: [
    {
      item: "note",
      message: "You picked up the note and it says the following...",
    },
    {
      item: "key",
      message:
        "You picked the key and can be used in the secret passage to the kitchen",
    },
  ],
  description: "You are currently in the foyer and you see a note a key",
  people: ["John", "Peggy"],
  requiredKey: false,
  possibleRooms: ["hallway", "kitchen"],
});

let kitchen = new Room({
  name: "kitchen",
  inventory: [],
  description: "You are currently in the kitchen and you find a cup of tea",
  people: [],
  requiredKey: true,
  possibleRooms: ["foyer"],
});
// console.log(foyer.inventory);

let state = {
  foyer: foyer,
  kitchen: kitchen,
};

let currentLocation = "foyer";
async function start() {
  let answer;
  console.log(state[currentLocation].description);
  while (answer !== "quit") {
    answer = await ask(">_");
    evaluateAnswer(answer);
  }
  process.exit();
}

start();
let commands = {
  movement: ["move", "enter", "walk", "go"],
  pickup: ["pick", "grab", "take", "pickup"],
  drop: ["drop", "discard"],
  examine: ["read", "look", "examine", "inspect", "study"],
  talkTo: ["ask", "speak", "question", "talk"],
  help: ["help"],
  inventory: ["inventory"],
  unlock: ["unlock", "open"],
  solve: ["solve"],
  room: ["room"],
  view: ["view", "look", "see", "read"],
};
function evaluateAnswer(answer) {
  let [action, target] = answer.split(" ");

  //  Viewing and Inventory
  if (commands.view.includes(action) && target == "inventory") {
    state[currentLocation].viewRoomInventory();
  }
  // Picking up Items
  if (commands.pickup.includes(action)) {
    if (
      state[currentLocation].inventory
        .map((inventory) => inventory.item)
        .includes(target)
    ) {
      state[currentLocation].removeInventory(target);
    } else {
      console.log("There is not an item named " + target + " in the room");
    }
  }

  //  Move locations

  if (commands.movement.includes(action)) {
    let currentPossibleRooms = state[currentLocation].possibleRooms;

    if (currentPossibleRooms.includes(target)) {
      // Check to see if door is locked
      if (state[target].isDoorLocked === false) {
        // Update the new Room State
        currentLocation = target;
        // Print to the console the new room description
        console.log(state[currentLocation].description);
        // Update the Door Status to False
        state[currentLocation].isDoorLocked = false;
      } else {
        // If the door is locked then you need to check for a key on the person
        console.log("Door is locked");
      }
    } else {
      // NOT A ROOM
      console.log(
        yellow +
          "That's not a valid room. Your possible choices are the following: " +
          state[currentLocation].possibleRooms.join(", ") +
          white
      );
    }
  }
}
