// array methods in javascript
const numbers = [1, 2, 3, 4, 5];

// Using forEach to log each number
numbers.forEach((number) => {
    console.log(number);
});
// Using map to create a new array with each number squared
const squaredNumbers = numbers.map((number) => number * number);
console.log(squaredNumbers);
// Using filter to create a new array with numbers greater than 2
const filteredNumbers = numbers.filter((number) => number > 2);
console.log(filteredNumbers);
// Using reduce to sum all numbers in the array
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);
// Using find to get the first number greater than 3
const firstGreaterThanThree = numbers.find((number) => number > 3);
console.log(firstGreaterThanThree);
// Using some to check if there is any number greater than 4
const hasGreaterThanFour = numbers.some((number) => number > 4);
console.log(hasGreaterThanFour);
// Using every to check if all numbers are greater than 0
const allGreaterThanZero = numbers.every((number) => number > 0);
console.log(allGreaterThanZero);
// Using sort to sort the numbers in descending order
const sortedNumbers = [...numbers].sort((a, b) => b - a);
console.log(sortedNumbers);
// Using slice to get a subarray of the first three numbers
const slicedNumbers = numbers.slice(0, 3);
console.log(slicedNumbers); 
// Using splice to remove the first two numbers from the array
const splicedNumbers = [...numbers];
splicedNumbers.splice(0, 2);
console.log(splicedNumbers);
// Using includes to check if the array contains the number 3
const containsThree = numbers.includes(3);
console.log(containsThree);
// Using join to create a string from the array elements
const joinedNumbers = numbers.join(', ');
console.log(joinedNumbers);
// Using indexOf to find the index of the number 4
const indexOfFour = numbers.indexOf(4);
console.log(indexOfFour);


// for more deep understanding, you can refer to the MDN documentation on [Array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).