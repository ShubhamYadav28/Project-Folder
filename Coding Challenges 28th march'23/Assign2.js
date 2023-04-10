// String Manipulation.
function manipulateString(str) {
    const manipulatedStr = str.toUpperCase();
  function logString() {
     console.log(`The manipulated string is: ${manipulatedStr}`);
  }
    return logString;
};
const callback = manipulateString('Namaste!');
callback(); 
 
/*
In this function, the 'toUpperCase' method is used to convert all characters in the input string to uppercase letters. This new manipulated string is then stored in the 'manipulatedStr' variable.
The 'manipulateString' function then defines a nested function called 'logString', which logs the manipulated string to the console along with a message.
Finally, the 'manipulateString' function returns the 'logString' function as a callback.
*/