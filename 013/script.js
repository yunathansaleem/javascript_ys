// Dates in javascript 
const date = new Date();
console.log(date.toString());
// Output: current date and time in string format
console.log(date.toISOString());
// Output: current date in ISO format
console.log(date.getFullYear());
// Output: current year
console.log(date.getMonth() + 1); // Months are zero-indexed
// Output: current month (1-12)
console.log(date.getDate());
// Output: current day of the month (1-31)
console.log(date.getHours());
// Output: current hour (0-23)
console.log(date.getMinutes());
// Output: current minutes (0-59)
console.log(date.getSeconds());
// Output: current seconds (0-59)
console.log(date.getMilliseconds());
// Output: current milliseconds (0-999)
console.log(date.getTime());
// Output: current time in milliseconds since January 1, 1970
console.log(date.getTimezoneOffset());
// Output: time zone offset in minutes
console.log(date.toLocaleDateString());
// Output: current date in locale-specific format
console.log(date.toLocaleTimeString());

