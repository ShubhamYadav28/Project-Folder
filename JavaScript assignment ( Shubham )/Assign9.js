//  Check for divisibility
const numbers = [50, 76, 99, 10, 12, 15, 18, 21];

for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  if (num % 2 === 0) {
    continue;
  }
  if (num % 3 === 0) {
    console.log(num);
  }
}

// This program first defines an array of numbers called numbers. Then it uses a for loop to iterate over each number in the array.
// Inside the loop, the program uses an if statement to check if the current number is even (divisible by 2). If the number is even, the program skips to the next iteration of the loop using the continue statement.
// If the number is not even, the program uses another if statement to check if the current number is divisible by 3. If the number is divisible by 3, the program prints out the number using the console.log function.