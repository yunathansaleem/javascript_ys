// Local Storage in JavaScript
// Check if localStorage is supported
if (typeof(Storage) !== "undefined") {
    // Store data
    localStorage.setItem("username", "Johny");
    // Retrieve data
    var user = localStorage.getItem("username");
    console.log("Username: " + user);
    // Remove data
    localStorage.removeItem("username");
    console.log("Username after removal: " + localStorage.getItem("username"));
}else {
    console.log("Sorry, your browser does not support Web Storage...");
}
// Clear all local storage
localStorage.clear();
console.log("All local storage cleared.");
// Example of using localStorage with JSON
var userData = {
    name: "Johny",
    age: 20,
    email: "something@gmail.com"
};
// Store user data as a JSON string
localStorage.setItem("userData", JSON.stringify(userData));