// Calculate rental cost
function calculateRentalCost(daysRented, carType) {
    let rentalCost;
    switch(carType) {
      case 'economy':
        rentalCost = 4000;
        break;
      case 'midsize':
        rentalCost = 10000;
        break;
      case 'luxury':
        rentalCost = 20000;
        break;
      default:
        return 'Invalid car type';
    }
    return rentalCost * daysRented;
  }

const daysRented = 7;
const carType = 'economy';
const rentalCost = calculateRentalCost(daysRented, carType);
console.log(`The Rental Cost Of ${carType} car for ${daysRented} day(s) is ${rentalCost}`);

// This function takes two arguments: the number of days rented (daysRented) and the type of car (carType). It uses a switch statement to determine the rental cost based on the car type.
// If the car type is 'economy', the rental cost is set to 4000. If the car type is 'midsize', the rental cost is set to 10000. If the car type is 'luxury', the rental cost is set to 20000. If the car type is anything other than these three values, the function returns the string 'Invalid car type'.
// Finally, the function returns the total rental cost by multiplying the rental cost by the number of days rented.