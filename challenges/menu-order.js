let menu = {
    "Burger": 5.00,
    "Fries": 3.50,
    "Shake": 1.11,
    "Salad": 4.25,
    order: function(orderPlaced){
        let orderSplit =(orderPlaced.split(", "));
        console.log(orderSplit);
        let total = 0;
        for (item of orderSplit){
            if(this[item]){
            console.log("item:", item, "price:$", this[item]);
            total = total + this[item];
        } else{
            console.log("No coke, pepsi")
        }
    }
        return total;

        
    },

};

// console.log("$" + (menu["Salad"]));

const order1 = menu.order("Burger, Fries, Shake, Salad");
console.log("Order#1", "$", order1);

const order2 = menu.order("Salad, Fries");
console.log("Order#2", "$", order2);

const order3 = menu.order("Fries, Shake");
console.log("Order#3", "$", order3);

const order4 = menu.order("Coke");