// break statement example
for (let m = 0; m < 5; m++) {
    if (m === 3) {
        break; // exits the loop when m is 3
    }
    console.log(m);
}
// This will print numbers 0, 1, and 2, then exit the loop

// continue statement example
for (let n = 0; n < 5; n++) {
    if (n === 2) {
        continue; // skips the iteration when n is 2
    }
    console.log(n);
}
// This will print numbers 0, 1, 3, and 4, skipping 2