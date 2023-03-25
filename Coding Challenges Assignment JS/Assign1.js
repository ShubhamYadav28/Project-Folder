let input = "hello! Good Morning";
// Reversed string 
setTimeout(function (){
  let revStr = input.split(" ").reverse().join(" ");
  console.log(revStr);
}, 2000);
//The 'split()' method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern,
//puts these substrings into an array, and returns the array.

// The 'reverse()' method reverses an array in place and returns the reference to the same array, the first array element 
//now becoming the last, and the last array element becoming the first.

// The 'join()' method creates and returns a new string by concatenating all of the elements in an array, 
// separated by commas or a specified separator string.