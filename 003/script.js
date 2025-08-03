/*
    Data types in javascript
    1. Primitive types: string, number, boolean, null, undefined, symbol, bigint
    2. Reference types: object, array, function
    3. Special types: NaN, Infinity, -Infinity
    4. Type conversion: implicit and explicit
    5. Type checking: typeof, instanceof, Array.isArray()

    primitives:
    - memory efficient, immutable
    - stored directly in the variable
    - passed by value
    - cannot have properties or methods


    - examples:

    - string: "hello", 'world', `template literal`
    - number: 42, 3.14, NaN, Infinity
    - boolean: true, false
    - null: represents no value
    - undefined: variable declared but not assigned
    - symbol: unique identifier, used for object properties
    - bigint: large integers, e.g., 1234567890123456789012345678901234567890n
    - NaN: Not a Number, result of invalid arithmetic operations
    - Infinity: represents positive infinity
    - -Infinity: represents negative infinity

    reference types:
    - memory heavy, mutable
    - stored as a reference to the memory location
    - passed by reference
    - can have properties and methods

    - examples: 
    
    - object: key-value pairs, e.g., { name: "Alice", age: 30 }
    - array: ordered list of values, e.g., [1, 2, 3]
    - function: callable objects, e.g., function() { return "Hello"; }
    - Date: represents date and time, e.g., new Date()
    - RegExp: regular expressions for pattern matching, e.g., /abc/
    - Error: represents runtime errors, e.g., new Error("Something went wrong")
*/
typeof 42; // number
typeof "Hello"; // string
typeof true; // boolean
typeof null; // object (this is a quirk in JavaScript)
typeof undefined; // undefined
typeof Symbol("id"); // symbol
typeof BigInt(1234567890123456789012345678901234567890); // bigint

// e.g
let marks = 90;
console.log('your marks are: ' + (typeof marks) ); // string concatenation

// String
let str = "Hello, i am Johny the almighty sinner!";
console.log(str);

// referenceTypes data types
// arrays
let arr = [1, 2, 3, 4, 5];
console.log(arr);

// objects
let obj = {
    name: "Alice",
    age: 30,
    isStudent: false
};
console.log(obj);

// dates 
let date = new Date();
console.log(date);