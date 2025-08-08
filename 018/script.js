// About JSon IN Javascript
// JSON (JavaScript Object Notation) is a lightweight data interchange format
// that is easy for humans to read and write, and easy for machines to parse and generate.
// It is often used to transmit data between a server and a web application.
// JSON is language-independent, but it uses conventions that are familiar to programmers of the C family of languages,
// which includes C, C++, C#, Java, JavaScript, Perl, Python, and many others.
// JSON is built on two structures:
// 1. A collection of name/value pairs (often realized as an object in JavaScript).
// 2. An ordered list of values (often realized as an array in JavaScript).
// JSON is often used in web applications to send data from the server to the client and vice versa.

// Example of a JSON object 
const jsonObject = {
    "name": "John",
    "age": 20,
    "isStudent": true,
    "courses": ["Math", "Science", "History"],
    "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "state": "PK"
    }
};
// JSON can be converted to a JavaScript object using JSON.parse() and vice versa using JSON.stringify().
const jsonString = JSON.stringify(jsonObject);
console.log(jsonString); // Convert object to JSON string
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject); // Convert JSON string back to object
// JSON is often used in APIs to exchange data.
// For example, a web API might return data in JSON format when you make a request to it.
// Here's an example of how you might fetch JSON data from an API using the Fetch API:
fetch('https://api.example.com/data')
    .then(response => response.json()) // Parse JSON from the response
    .then(data => {
        console.log(data); // Use the JSON data
    })
    .catch(error => {
        console.error('Error fetching data:', error); // Handle errors
    });