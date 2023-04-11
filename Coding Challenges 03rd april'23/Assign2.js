console.log(multiplyNumbers(3, 5)); // ReferenceError: Cannot access 'multiplyNumbers' before initialization.
//  function expressions
 multiplyNumbers = function(num1, num2) {
  return num1 * num2;
};

/*
This demonstrates how hoisting works with function expressions in JavaScript. Unlike function declarations, which are hoisted to the top of their scope, function expressions are not hoisted. This means that we cannot call a function expression before it is defined.
*/
