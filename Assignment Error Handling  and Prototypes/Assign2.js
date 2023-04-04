// Building Robust Functions in JavaScript.
function getPerson(person) {
    try {
      if (typeof person !== 'object' || !('name' in person) || !('age' in person)) {
        throw new Error('Invalid parameter type');
        // console.log('Invalid parameter type');
      }
      return `Name: ${person.name}, Age: ${person.age}`;
    } catch (err) {
      return err.message;
    }
  }
  const person1 = { name: 'Shubham yadav', age: 25 };
  console.log(getPerson(person1)); 
  
  const person2 = { name: 'Shubham Yadav' };
  console.log(getPerson(person2)); 
  
  const person3 = 'Shubham Kumar';
  console.log(getPerson(person3)); 
  
/*
In this function, we use a 'try block' to attempt to retrieve the 'name' and 'age' properties from the input 'person' object. If the object is not valid (i.e., not an object or missing either the name or age property), we throw an Error object with the message "Invalid parameter type".

If an error is thrown, the 'catch block' will catch it and return the error message. Otherwise, we construct the output string using template literals and return it.
*/   