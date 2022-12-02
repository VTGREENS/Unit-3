// Create the `series` variable
var series = [0, 1];

while (series.length < 100) {
   let num2 = series.pop();
   let num1 = series.pop();
   let num3 = num1 + num2;

   series.push(num1, num2, num3);
}

// Print the Fibonacci sequence to the console
console.log(series);
// the first ten numbers should be
// 0 1 1 2 3 5 8 13 21 34

// function userDefinedFibArray(limit = 100, startingNumberOne = 0, startingNumberTwo = 1) {
    
//    let series = [startingNumberOne, startingNumberTwo]
   
//    while (series.length < limit) {
//        let valueTwo = series.pop()
//        let valueOne = series.pop()
//        let valueThree = valueOne + valueTwo
//        series.push(valueOne, valueTwo, valueThree)
//    }

//    console.log(series)
// }

// userDefinedFibArray(500, 3, 5)
