// Bill splitter
function calculateBill(dishes, people) {
    // Calculate total cost of dishes
    const totalCost = dishes.reduce((acc, curr) => acc + curr, 0);
    // const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    // Calculate cost per person
    const costPerPerson = totalCost / people;
    
    // Return an object containing total bill and cost per person
    return {
      totalBill: totalCost,
      costPerPerson: costPerPerson
    };
  }
  
  // Example usage
  const dishes = [122, 875, 102, 199];
  const people = 4;
  const bill = calculateBill(dishes, people);
  console.log(bill); 

//   In this implementation, the 'calculateBill' function takes two parameters: an array of 'dishes' containing the cost of each dish, and an integer 'people' indicating the number of people sharing the dishes. 
//   First, the function calculates the 'totalCost' of all the dishes by using the 'reduce()' method to add up all the values in the dishes array.  
//   Next, it calculates the 'costPerPerson' by dividing the 'totalCost' by the 'people' parameter. 
//   Finally, the function returns an object containing 'the totalBill' and the 'costPerPerson'.  
//   In the example usage, we pass in an array of 'dishes' and the number of people sharing them, and store the returned object in a bill variable. We then log the bill object to the console.
  
  
  
  
  