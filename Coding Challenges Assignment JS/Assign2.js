// Random Number Generator with Delay and Progress Indication:
 
// Define the delay in milliseconds
const delay = 3000;
// Define a function to generate a random number after a delay
function generateRandomNumberDelayed(delay) {
  // Set a variable to store the remaining time
  let remainingTime = delay / 1000;
  console.log(`Generating random number in ${remainingTime} second(s)`)
// Display a countdown message every second until the delay is up
  const countdownInterval = setInterval(() => {
    remainingTime--;
    console.log(`Generating random number in ${remainingTime} second(s)`);
    if (remainingTime === 0) {
      clearInterval(countdownInterval);
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      console.log(`Generated random number is ${randomNumber}`);
    }
  }, 1000);
}
// Call the function with the delay as an argument
generateRandomNumberDelayed(delay);
