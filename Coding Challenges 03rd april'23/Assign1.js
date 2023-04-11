console.log(addNumbers(4, 7)); 

function addNumbers(num1, num2) {
  return num1 + num2;
}

/*
In this case, the function call will work correctly, even though 'addNumbers' is not yet defined. This is because the function declaration is hoisted to the top of the code block by the JavaScript engine before the code is executed.
*/