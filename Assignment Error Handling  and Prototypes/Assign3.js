//  Car Description Class.
class Car {
    constructor(company, model, year) {
      this.company = company;
      this.model = model;
      this.year = year;
    }
    
    getDescription() {
      return `This is a ${this.year} ${this.company} ${this.model}`;
    }
  }
  // Instantiate a Car object
  const myCar = new Car('Maruti Suzuki', 'Swift Dzire', 2023);
   // Call the getDescription method
  console.log(myCar.getDescription()); 

/*
In this code, we define a 'Car' class with three properties: company, model, and year. We also define a method called 'getDescription' which returns a string describing the car's properties in the specified format.

We then instantiate an instance of the 'Car' class using the 'new' keyword and pass in values for the company, model, and year properties. Finally, we call the 'getDescription' method on the instance and log the output to the console.
*/   
  