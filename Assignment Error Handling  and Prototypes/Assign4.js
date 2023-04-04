// Employee Class Challenge.
class Employee {
    constructor(name, position, salary) {
      this.name = name;
      this.position = position;
      this.salary = salary;
    }
  getSalary() {
      return this.salary;
   }
}
  
  // Instantiate an Employee object
  const employee1 = new Employee('Shubham Yadav', 'Junior engineer', 25000);
  
  // Call the getSalary method
  console.log(employee1.getSalary()); 
  