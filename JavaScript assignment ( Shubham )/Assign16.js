// Generate a random number
const randomNumber = (() => {
    return Math.floor(Math.random() * 100) + 1;
  })();
  
  console.log(randomNumber);

//   This program defines an arrow function that generates a random number between 1 and 100 using the 'Math.random()' function, and then multiplies it by 100 to get a number between 0 and 99. It then adds 1 to this number to get a number between 1 and 100, and rounds it down to the nearest integer using the 'Math.floor()' function.
// The arrow function is immediately invoked using the parentheses at the end, which causes it to generate a random number and return it as soon as the program starts. The returned value is then stored in the 'randomNumber' constant.