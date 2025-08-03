/* String properties Methods & templaes
    * String.prototype.toUpperCase()
    * String.prototype.toLowerCase()
    * String.prototype.trim()
    * String.prototype.includes()
    * String.prototype.startsWith()
    * String.prototype.endsWith()
    * String.prototype.repeat()
    * String.prototype.replace()
    * String.prototype.split()
    * String.prototype.match()
    * String.prototype.search()
    * String.prototype.slice()
*/

const str = "  Hello, World!  ";

// Convert to uppercase
console.log(str.toUpperCase()); // "  HELLO, WORLD!  "
// Convert to lowercase
console.log(str.toLowerCase()); // "  hello, world!  "
// Trim whitespace from both ends
console.log(str.trim()); // "Hello, World!"
// Check if string includes a substring 
console.log(str.includes("World")); // true
// Check if string starts with a substring
console.log(str.startsWith("  Hello")); // true
// Check if string ends with a substring
console.log(str.endsWith("World!  ")); // true

// concat 
console.log(str.concat(" How are you?")); // "  Hello, World!  How are you?"
// Repeat the string
console.log(str.repeat(2)); // "  Hello, World!    Hello, World!  "
// Replace a substring
console.log(str.replace("World", "Universe")); // "  Hello, Universe!  "
// Split the string into an array
console.log(str.split(", "));
// ["  Hello", "World!  "]
// Match a regex pattern
console.log(str.match(/Hello/));
// ["Hello"]
// Search for a substring
console.log(str.search("World")); // 9
// Slice the string
console.log(str.slice(2, 14)); // "Hello, World"