// loops in javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// This loop will print numbers from 0 to 4

// while loop example
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}
// This while loop will also print numbers from 0 to 4

// do-while loop example
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);
// This do-while loop will print numbers from 0 to 4 as well

// for...of loop example
const array = ['apple', 'banana', 'cherry'];
for (const fruit of array) {
    console.log(fruit);
}
// This for...of loop will print each fruit in the array

// for...in loop example
const object = { a: 1, b: 2, c: 3 };
for (const key in object) {
    console.log(`${key}: ${object[key]}`);
}
// This for...in loop will print each key-value pair in the object

// nested loops example
for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 2; y++) {
        console.log(`x: ${x}, y: ${y}`);
    }
}
// This nested loop will print combinations of x and y values

// for each loop example
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
    console.log(number);
});
// This forEach loop will print each number in the array

// labeled loop example
outerLoop: for (let a = 0; a < 3; a++) {
    for (let b = 0; b < 3; b++) {
        if (b === 1) {
            break outerLoop; // exits the outer loop when b is 1
        }
        console.log(`a: ${a}, b: ${b}`);
    }
}
// This labeled loop will print combinations of a and b until b is 1