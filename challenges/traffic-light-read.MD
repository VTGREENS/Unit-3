/* 

We will have a lookup table that maps the state of the traffic light to the possible next valid states of the traffic light.

We will also have a function that changes the current valie state to the next valid state, and prints output to show us what state the system is in. If there is an attempt to put the system in an invalid state, the function will prevent the transition and print some output to tell us that an error occured.

Variables
[ ] Create a lightCurrent variable and set it equal to redLight.
[ ] Create a lightLookUp lookup table that maps the Strings of the color and state of our objects to their Object.
LightStates
[ ] Create a lightStates state machine that maps the states of our objects to their possible next states.
[ ] Create a console log that informs the user of the state of the traffic light.
[ ] Create a changeLight function that accepts the parameter of newLight.
[ ] Inside of changeLight, set up an if statement that checks if lightStates[lightCurrent] includes newLight.
[ ] Inside of this if statement, set lightCurrent to newLight.
[ ] Inside of this if statement, console log the color and state of lightCurrent by checking it in lightLookUp using bracket notation.
[ ] Outside of this if, else console log a message informing the user they cannot go from lightCurrent to newLight.

*/
