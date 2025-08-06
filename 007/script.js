// functions in javascript
function greet(name) {
    return `Hello, ${name}!`;
}
function add(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
function subtract(a, b) {
    return a - b;
}
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}
function square(num) {
    return num * num;
}   
function cube(num) {
    return num * num * num;
}
function factorial(num) {
    if (num < 0) {
        throw new Error("Cannot compute factorial of a negative number");
    }
    if (num === 0 || num === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}
function avg (numbers) {
    if (numbers.length === 0) {
        throw new Error("Cannot compute average of an empty array");
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}


// note if the result in in blue // it means the function is working correctly
console.log(greet("Alice"));    // Hello, Alice!

// and if the result is in red // it means the function is not working correctly
console.log(add(5, 3));         // 8