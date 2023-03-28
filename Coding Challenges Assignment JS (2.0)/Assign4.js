// Access random elements
function extractElements(arr) {
    const [first, second, ...rest] = arr;
    const last = rest.pop();
    return [first, second, last];
  }
console.log(extractElements([3, 2, 7, 9, 6]));
// This function takes an array 'arr' as an argument, and uses destructuring assignment to extract the first two elements of the array into separate variables 'first' and 'second'. The rest of the elements are then collected into a new array 'rest' using the spread operator .... The last element is then extracted from rest using the 'pop()' method and assigned to the variable 'last'. Finally, the function returns an array containing the extracted first, second, and last elements.
  