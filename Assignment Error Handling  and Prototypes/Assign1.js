// Type Conversion
function convertToNumber(str) {
  const num = Number(str);
  if ( isNaN(num)) {
    return "Invalid number";
  } else {
    return num;
  }
}
console.log(convertToNumber("123")); 
console.log(convertToNumber("3.14")); 
console.log(convertToNumber("hello"));

/*
In this function, we first attempt to convert the input 'string' to a 'number' using the Number function. If num is not a valid number (i.e., NaN), we return the string "Invalid number". Otherwise, we return the converted number.
*/ 
