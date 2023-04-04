//  Adding a Method to a Prototype.
// Create prototype object called Student
function Student(name) {
    this.name = name;
  }
// Add method called printDetails to the prototype
  Student.prototype.printDetails = function() {
    console.log(`Hello, my name is ${this.name}`);
  }
// Instantiate a Student object with name "Mithun"
  const student = new Student("Mithun");
// Call the printDetails method
  student.printDetails(); 

/*
In the above code, we define a constructor function 'Student' which takes a 'name' parameter and assigns it to the 'name' property of the object created by the constructor. We then add a 'printDetails' method to the 'Student' prototype which logs a string containing the student's name to the console. Finally, we create a new Student object with the name "Mithun" and call the 'printDetails' method on it to output the desired string to the console.
*/   
  