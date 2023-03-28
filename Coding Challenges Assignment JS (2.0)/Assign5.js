//  Min and max values.
function findMinMax(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return { max, min };
  }
console.log(findMinMax([11, 5, 91, 8, 13])) 

// The 'findMinMax' function takes an array 'arr' as an argument, and uses the spread operator ... to spread the elements of the array as individual arguments to the 'Math.max()' and 'Math.min()' methods. These methods return the maximum and minimum values in the array, respectively. The function then returns an object containing two properties, max and min, which hold the maximum and minimum values, respectively.