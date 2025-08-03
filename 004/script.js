/*type conversion and type coerction
    * Type conversion is the process of converting a value from one type to another.
    * Type coercion is the automatic or implicit conversion of values from one type to another.
    * JavaScript performs type coercion when it needs to convert a value to a different type for an operation.
    * For example, when you use the `+` operator with a string and a number, JavaScript converts the number to a string.
    * Type coercion can lead to unexpected results, so it's important to be aware of how it works.
    * You can use functions like `Number()`, `String()`, and `Boolean()` to explicitly convert types.
    * Always be cautious with type coercion, especially in comparisons and arithmetic operations.
*/

console.log("Type Conversion and Coercion in JavaScript");

// Example of type conversion
let num = "42"; // string
let convertedNum = Number(num); // converts string to number
console.log(convertedNum, typeof convertedNum); // 42 'number'
// Example of type coercion
let str = "5";
let result = str + 10;
console.log(result, typeof result); // "510" 'string'
// Example of coercion in arithmetic operation
let coercedResult = str * 2; // string is coerced to number
console.log(coercedResult, typeof coercedResult); // 10 'number'
// Example of coercion in boolean context
let truthyValue = "Hello";
let falsyValue = "";
console.log(Boolean(truthyValue), Boolean(falsyValue)); // true false
// Example of coercion in comparison
let comparisonResult = "5" == 5;
console.log(comparisonResult); // true, because of type coercion
// Example of explicit type conversion
let explicitConversion = String(123);

// .tofixed
console.log(explicitConversion, typeof explicitConversion); // "123" 'string'
// Example of coercion with null and undefined
let nullValue = null;   