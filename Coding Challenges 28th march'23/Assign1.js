// Double using callback.
function doubleArray(arr, callback) {
  const doubledArr = arr.map(callback);
  return doubledArr;
}
const arr = [1, 3, 5, 7, 9];
function doubleValue(value) {
  return value * 2;
} 
const doubledArr = doubleArray(arr, doubleValue);
console.log(doubledArr);

/*
In this function, the 'map' method is used to create a new array called 'doubledArr' that contains the doubled values of each element in the original array 'arr'. The 'callback' function is passed as an argument to the 'map' method and is used to double each element in the array. Finally, the new 'doubledArr' is returned.
The 'doubleValue' function is passed as the callback argument to the 'doubleArray' function, which returns a new array where each element is doubled.
*/