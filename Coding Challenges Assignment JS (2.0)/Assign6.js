//  Nested Objects
// The function 'extractPersonInfo' takes an object 'person' as input.
function extractPersonInfo(person) {
    const { name, address: { street } } = person;
    return { name, street };
  }
  // We use object destructuring to extract the 'name' property and the 'street' property nested inside the 'address' property of the person object.
  // We create a new object with these extracted properties and return it.
const person = {
    name: "Shubham kumar",
    age: 25,
    address: {
      street: "Ward No-17",
      city: "CHIRIMIRI",
      state: "CG",
      zip: "497451"
    }
  };
  
  const personInfo = extractPersonInfo(person);
  console.log(personInfo);
  