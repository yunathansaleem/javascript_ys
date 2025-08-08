// DOM manupilation in javascript
document.addEventListener("DOMContentLoaded", function() {
    // Create a new div element
    var newDiv = document.createElement("div");
    // Add text content to the new div
    newDiv.textContent = "This is a new div element created by JavaScript!";
    // Set an ID for the new div
    newDiv.id = "myNewDiv";
    // Style the new div
    newDiv.style.backgroundColor = "lightblue";
    newDiv.style.padding = "20px";
    newDiv.style.margin = "10px 0";
    newDiv.style.border = "1px solid #000";
    // Append the new div to the body
    document.body.appendChild(newDiv);
    // Log a message to the console
    console.log("New div element has been created and added to the document.");
});
// This script will run after the DOM is fully loaded and will create a new div element, style it, and append it to the body of the document.
// The new div will have a light blue background, some padding, and a border.
// The script also logs a message to the console indicating that the new div has been created and added.
// This is a simple example of DOM manipulation in JavaScript.
// The script is designed to run after the DOM content is fully loaded to ensure that the body element is available for manipulation.
// This is a simple example of DOM manipulation in JavaScript.
// The script is designed to run after the DOM content is fully loaded to ensure that the body element is available for manipulation.


// Query selector 
document.addEventListener("DOMContentLoaded", function() {
    // Select the first paragraph element
    var firstParagraph = document.querySelector("p");
    // Change the text content of the first paragraph
    firstParagraph.textContent = "This paragraph has been modified by JavaScript!";
    // Log a message to the console
    console.log("First paragraph text has been changed.");
    // Select all paragraph elements
    var allParagraphs = document.querySelectorAll("p");
    // Change the text content of all paragraphs
    allParagraphs.forEach(function(paragraph) {
        paragraph.textContent = "This paragraph has been modified by JavaScript!";
    });
    // Log a message to the console
    console.log("All paragraphs text has been changed.");
});
// This script will run after the DOM is fully loaded and will modify the text content of the first paragraph and all paragraphs in the document.
// The first paragraph will have its text changed to "This paragraph has been modified by JavaScript!".
// All paragraphs will also have their text changed to the same message.
// The script logs messages to the console indicating that the text has been changed.
// This is a simple example of using query selectors in JavaScript for DOM manipulation.
 

// for more information on query selectors, you can refer to the MDN documentation: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector