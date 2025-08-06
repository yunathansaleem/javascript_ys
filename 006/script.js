// operators in javascript
console.log(5 + 5); // Addition
console.log(5 - 5); // Subtraction
console.log(5 * 5); // Multiplication
console.log(5 / 5); // Division
console.log(5 % 2); // Modulus
console.log(5 ** 2);    // Exponentiation
console.log(5 + 5 * 2); // Operator precedence
console.log((5 + 5) * 2);   // Grouping with parentheses
console.log(5 == '5'); // Equality (loose)
console.log(5 === '5'); // Strict equality
console.log(5 != '5'); // Inequality (loose)
console.log(5 !== '5'); // Strict inequality
console.log(5 > 3); // Greater than
console.log(5 < 3); // Less than
console.log(5 >= 5); // Greater than or equal to
console.log(5 <= 5); // Less than or equal to
console.log(5 && 3); // Logical AND
console.log(5 || 3); // Logical OR
console.log(!5); // Logical NOT
console.log(5 ? 'true' : 'false'); // Ternary operator
console.log(typeof 5); // Type of operator
console.log(5 instanceof Number); // Instance of operator
console.log(5 in { a: 1, b: 2 }); // In operator
console.log(5 << 1); // Bitwise left shift
console.log(5 >> 1); // Bitwise right shift
console.log(5 & 3); // Bitwise AND
console.log(5 | 3); // Bitwise OR
console.log(5 ^ 3); // Bitwise XOR
// console.log(5.toString()); // Convert to string
// console.log(5.toFixed(2));  // Convert to fixed-point notation
// console.log(5.toExponential(2)); // Convert to exponential notation
// console.log(5.valueOf()); // Get primitive value
console.log(5 + ''); // Convert to string using concatenation
console.log(5 + 5 + ''); // Convert to string using concatenation
console.log(5 + 5 + 5); // Add multiple numbers
console.log(5 + 5 + 5 + '');    // Add multiple numbers and convert to string


// arthmetic operators
console.log(10 + 20); // Addition
console.log(10 - 5); // Subtraction
console.log(10 * 2); // Multiplication
console.log(10 / 2); // Division
console.log(10 % 3); // Modulus
console.log(10 ** 2); // Exponentiation
console.log(10 + 20 * 2); // Operator precedence
console.log((10 + 20) * 2); // Grouping with parentheses

// comparison operators
console.log(10 == '10'); // Equality (loose)
console.log(10 === '10'); // Strict equality
console.log(10 != '10'); // Inequality (loose)
console.log(10 !== '10'); // Strict inequality
console.log(10 > 5); // Greater than
console.log(10 < 5); // Less than

// assignment operators
console.log(10); // Initial value
let a = 10;
a += 5; // Addition assignment
console.log(a); // 15
a -= 3; // Subtraction assignment
console.log(a); // 12
a *= 2; // Multiplication assignment
console.log(a); // 24
a /= 4; // Division assignment
console.log(a); // 6
a %= 2; // Modulus assignment
console.log(a); // 0
a **= 3; // Exponentiation assignment
console.log(a); // 0 (since 0 raised to any power is still 0)   
a <<= 1; // Bitwise left shift assignment
console.log(a); // 0 (left shift of 0 is still 0)
a >>= 1; // Bitwise right shift assignment
console.log(a); // 0 (right shift of 0 is still 0)
a &= 3; // Bitwise AND assignment

// logical operators
console.log(true && false); // Logical AND
console.log(true || false); // Logical OR
console.log(!true); // Logical NOT
console.log(true ? 'yes' : 'no'); // Ternary operator
console.log(typeof true); // Type of operator
console.log(true instanceof Boolean); // Instance of operator
console.log(true in { a: 1, b: 2 }); // In operator
console.log(true << 1); // Bitwise left shift
console.log(true >> 1); // Bitwise right shift
console.log(true & false); // Bitwise AND
console.log(true | false); // Bitwise OR
console.log(true ^ false); // Bitwise XOR

// string operators
console.log('Hello' + ' ' + 'World'); // String concatenation
console.log('Hello' + 5); // String concatenation with number
console.log('Hello' + 5 + ' World'); // String concatenation with number and text
console.log('Hello' + 5 + 5); // String concatenation with multiple numbers
console.log('Hello' + 5 + 5 + ' World'); // String concatenation with multiple numbers and text
console.log('Hello'.toUpperCase()); // Convert to uppercase
console.log('Hello'.toLowerCase()); // Convert to lowercase
console.log('Hello'.length); // Get string length
console.log('Hello'.charAt(0)); // Get character at index
console.log('Hello'.indexOf('e')); // Find index of character
console.log('Hello'.includes('lo')); // Check if substring exists
console.log('Hello'.startsWith('He')); // Check if string starts with substring
console.log('Hello'.endsWith('lo')); // Check if string ends with substring
console.log('Hello'.replace('l', 'x')); // Replace character in string
console.log('Hello'.split('')); // Split string into array of characters