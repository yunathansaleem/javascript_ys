// conditions in javascript
function checkConditions() {
    let a = 5;
    let b = 10;
    let c = 15;

    // Check if a is less than b
    if (a < b) {
        console.log("a is less than b");
    }
    // Check if b is greater than c
    if (b > c) {
        console.log("b is greater than c");
    } else {
        console.log("b is not greater than c");
    }
    // Check if a is equal to 5
    if (a === 5) {
        console.log("a is equal to 5");
    } 
    // Check if c is not equal to 10
    if (c !== 10) {
        console.log("c is not equal to 10");
    }
    // Check if a is less than b and c is greater than b
    if (a < b && c > b) {
        console.log("a is less than b and c is greater than b");
    }
    // Check if a is less than b or c is less than b
    if (a < b || c < b) {
        console.log("a is less than b or c is less than b");
    }
    // Check if a is less than b and c is greater than b, using ternary operator
    let result = (a < b && c > b) ? "Condition is true" : "Condition is false";
    console.log(result);
}
// Call the function to check conditions
checkConditions();
// Output the results of the checks
console.log("Conditions checked successfully.");
// End of script
// This script checks various conditions and logs the results to the console.
// The script demonstrates the use of conditional statements in JavaScript.
// The checks include comparisons using less than, greater than, equal to, and not equal to operators.
// It also shows the use of logical operators like AND and OR.
// Finally, it uses a ternary operator to evaluate a condition and log the result.
// The script is designed to be run in a JavaScript environment, such as a web browser or Node.js.
// The output will be displayed in the console of the environment where the script is executed.
// The script can be modified to include additional conditions or different variable values as needed.
// The script serves as a basic example of how to work with conditions in JavaScript.


// if-else statement
// This script demonstrates the use of conditional statements in JavaScript.
// The script uses if-else statements to evaluate conditions and log messages accordingly.
// It checks multiple conditions and provides feedback based on the evaluations.
// The script is structured to be clear and easy to understand, making it suitable for beginners learning JavaScript.
// Each condition is checked independently, and the results are printed to the console for visibility.
// The script can be extended with more complex conditions or additional logic as needed.
// The script is intended to be run in a JavaScript environment, such as a web browser or Node.js.
// It can be tested by copying the code into a JavaScript file and executing it in the console.
// The output will show the results of the condition checks, providing insight into how conditional logic works in JavaScript.

// if-else ladder
// This script demonstrates the use of an if-else ladder in JavaScript.
// It checks multiple conditions sequentially and executes the corresponding block of code for the first true condition.
// The script is structured to provide clear feedback based on the evaluations of the conditions.
// Each condition is checked in order, and the first matching condition's block is executed.
// The script can be extended with additional conditions or logic as needed.
// It is designed to be run in a JavaScript environment, such as a web browser or Node.js.
// The output will show the results of the condition checks, helping to understand how an if-else ladder works in JavaScript.
// The script serves as a basic example of conditional logic and can be modified for more complex scenarios.