// Swap the values.
function swapValues(x, y) {
    [x, y] = [y, x];
    return [x, y];
  }
// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
  console.log(swapValues(5, 10));
 // The 'swapValues' function takes two arguments 'x' and 'y', which are the two variables you want to swap. It then uses destructuring assignment to swap the values of 'x' and 'y', without the need for a temporary variable. Finally, the function returns an array containing the swapped values.
    