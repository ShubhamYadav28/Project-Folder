// Implementing a Person Class with Default Values.
class Person {
    constructor(name = 'Unknown', age = 0) {
      this.name = name;
      this.age = age;
    }
  getDetails() {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
  // Instantiate a Person object with default parameters
  const person1 = new Person();
  // Call the getDetails method
  console.log(person1.getDetails()); 
  // Instantiate a Person object with custom parameters
  const person2 = new Person('Shubham Yadav', 25);
  // Call the getDetails method
  console.log(person2.getDetails());
  
/*
In this code, we define a 'Person' class with two properties: name and age. We also use default parameters in the constructor to set the values of name and age to "Unknown" and 0, if they are not provided.

We then instantiate two instances of the 'Person' class using the 'new' keyword. The first instance does not pass any parameters, so the default parameters are used. The second instance passes in custom values for the name and age properties.
*/   