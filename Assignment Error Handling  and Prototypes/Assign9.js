// Check the presence using closures.
function numberChecker(numbers) {
    return function(num) {
      return numbers.includes(num);
    }
  }
  const nums = [1, 3, 5, 4, 7];
  const checkNum = numberChecker(nums);
  
  console.log(checkNum(5)); 
  console.log(checkNum(2)); 
    
/*
In the above code, we define a function 'numberChecker' that takes an array of numbers as an argument. This function returns another function that takes a number as an argument and returns true if the number is in the original array passed to 'numberChecker', and false otherwise.

We use the 'includes' method of the array to check whether the number is in the array or not. The returned function is an example of a closure, as it "closes over" the 'numbers' parameter of the outer numberChecker function and can access it even after the outer function has finished executing.
*/ 