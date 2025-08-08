// settimeout ans setInterval in Javascript
setTimeout(() => {
    console.log("This message is displayed after 2 seconds");
}, 2000);

setInterval(() => {
    console.log("This message is displayed every 3 seconds");
}, 3000);

// Clear the interval after 15 seconds
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval cleared after 15 seconds");
}, 15000);

let intervalId = setInterval(() => {
    console.log("This message is displayed every 3 seconds");
}, 3000);

// Example of using setTimeout with a function
function greet(name) {
    console.log(`Hello, ${name}!`);
}
setTimeout(() => greet("Alice"), 1000);

// Example of using setInterval with a function 
function logTime() {
    const now = new Date();
    console.log(`Current time: ${now.toLocaleTimeString()}`);
}
setInterval(logTime, 5000);

// Example of using setTimeout with a promise
function delayedMessage() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("This message is displayed after 4 seconds");
        }, 4000);
    }); 
}

delayedMessage().then(message => {
    console.log(message);
});
// Example of using setInterval with a promise
function periodicMessage() {
    return new Promise((resolve) => {
        const intervalId = setInterval(() => {
            resolve("This message is displayed every 6 seconds");
        }, 6000);

        // Clear the interval after 18 seconds
        setTimeout(() => {
            clearInterval(intervalId);
            console.log("Periodic message interval cleared after 18 seconds");
        }, 18000);
    });
}