// string methods in JavaScript
// 1. toUpperCase
let str = "hello world";
let upperStr = str.toUpperCase();
console.log(upperStr); // Output: "HELLO WORLD"
// 2. toLowerCase
let lowerStr = upperStr.toLowerCase();
console.log(lowerStr); // Output: "hello world"
// 3. charAt
let firstChar = str.charAt(0);
console.log(firstChar); // Output: "h"
// 4. indexOf
let index = str.indexOf("world");
console.log(index); // Output: 6
// 5. substring
let subStr = str.substring(0, 5);
console.log(subStr); // Output: "hello"
// 6. split
let words = str.split(" ");
console.log(words); // Output: ["hello", "world"]
// 7. replace
let newStr = str.replace("world", "JavaScript");
console.log(newStr); // Output: "hello JavaScript"
// 8. trim
let paddedStr = "   hello world   ";
let trimmedStr = paddedStr.trim();
console.log(trimmedStr); // Output: "hello world"
// 9. includes
let hasHello = str.includes("hello");
console.log(hasHello); // Output: true
// 10. startsWith
let startsWithHello = str.startsWith("hello");
console.log(startsWithHello); // Output: true
// 11. endsWith
let endsWithWorld = str.endsWith("world");
console.log(endsWithWorld); // Output: true
// 12. repeat
let repeatedStr = str.repeat(2);
console.log(repeatedStr); // Output: "hello worldhello world"
// 13. search
let searchIndex = str.search("world");  
console.log(searchIndex); // Output: 6
// 14. match
let matched = str.match(/hello/);
console.log(matched); // Output: ["hello"]
// 15. localeCompare
let compareResult = "apple".localeCompare("banana");
console.log(compareResult); // Output: -1 (apple comes before banana)


// these are the most commonly used string methods in JavaScript.
// They allow you to manipulate and work with strings effectively.
// Each method serves a specific purpose, such as changing case, searching for substrings, or modifying the string content.
// Understanding these methods is essential for effective string manipulation in JavaScript.

// for deep learning, you can explore the official documentation or resources like MDN Web Docs, which provide detailed explanations and examples for each method. Additionally, practicing with these methods in real-world scenarios will help solidify your understanding and improve your coding skills.
