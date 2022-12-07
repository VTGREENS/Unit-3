/* 
Classes

- Classes are templates for creating objects.
- They encapsulate data with code.
- To declare a class you must use the keyword 'class' followed by the name of the class.
- The name of the class is typically using PascalCasing
ex: UniversityTeach, CollegeStudent

- When you create a class, the constructor method is invoked first.
*/

class Pizza{
    // inside the constructor () you can put parameters
    constructor(diameter, type){
        this.diameter = diameter;
        this.type = type;
    }
    // method example:
    bake() {
        console.log("The pizza will be ready in 10 mins");
    }
}
    
// In order to use a class you need to create an instance of it.

let myPepperoniPizza = new Pizza(14, "pepperoni");

// ? How do I access the class properties?
//  Use dot notation

console.log(myPepperoniPizza.type);

// ? How do I invoke a method?

myPepperoniPizza.bake();

// Create a sausage pizza with a diameter of 10, type being sausage.

let mySausagePizza = new Pizza(10, "sauasage");

console.log(mySausagePizza.type);

// ! Challenge : Rectangle class
/* 
Rectangle class should accepttwo parameters when creating (height & width)

- create a method called area that will multiply the height and width and return a value
*/


class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
        
    }
        area() {
            return this.height * this.width
        }
        isSquare() {
            return this.height === this.width ? true : false;
        }
} 
// Create a variable called rectangle1 and assign it the height of 10 and the width of 5

let rectangle1 = new Rectangle (10, 5);

console.log(rectangle1);

console.log("Area", rectangle1.area());

console.log("is it a square?:", rectangle1.isSquare());

// Zorkington use?

class Room {
    
    constructor(name, description, inventory){ 
        this.name = name;
        this.description = description;
        this.inventory = inventory;
    }
    
    removeInventory(item){

        this.inventory = this.inventory.filter((inventory) => inventory != item);
        return this.inventory;
    }
}

//  create method to showInventory, 

let livingRoom = new Room ("living room", "You have entered the living room, in there you find...", ["knife", "note", "things"]
);

console.log(livingRoom.description);

let bedroom = new Room("bedoom", "You entered the bedroom...")

// Player class

class Player{
    constructor(inventory){
        this.inventory = inventory;
    }
    addInventory(inventoryToAdd){
        this.inventory.push(inventoryToAdd);
        return this.inventory;
    }

    doesPlayerHaveCorrectItem(item){
        return this.inventory.includes(item);
    }
}

let gamePlayer = new Player ([]);

console.log("add inventory", gamePlayer.addInventory("key"));
console.log("does player have key?", gamePlayer.doesPlayerHaveCorrectItem("key"));

console.log(livingRoom.removeInventory("knife"));
console.log(gamePlayer.addInventory("knife"));

/* 
1. classes and objects creation

2. Rules/ state movement

3.Commands are possible (pickup, move, open, help)

4. Keep like things together, I.e keep constructors together, functions together
*/