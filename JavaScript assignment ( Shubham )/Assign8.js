//  Inverted right-angled triangle pattern with asterisks
const i = 6;

for (let row = i; row >= 1; row--) {
  let pattern = "";
  for (let col = 1; col <= row; col++) {
    pattern += "*";
  }
  console.log(pattern);
}

// This program first sets the value of i to 6. Then it uses a for loop to iterate over each row of the inverted right-angled triangle pattern. The loop starts at i and goes down to 1.
// Inside the outer loop, there's another for loop that generates the asterisks for each row. This loop starts at 1 and goes up to the value of row. Each time the inner loop runs, an asterisk is added to the pattern string.
// Finally, the program prints out the pattern string for each row using the console.log function.