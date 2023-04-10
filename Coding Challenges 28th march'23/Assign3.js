//  Age in Days.
function ageInDays(person) {
    const fullName = `${person.firstName} ${person.lastName}`;
    const ageInDays = person.age * 365;
  function logMessage() {
    console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
  }
  return logMessage;
};
const person = {
  firstName: 'Shubham',
  lastName: 'Yadav',
  age: 25,
};
const callback = ageInDays(person);
callback(); 

/*
In this function, the 'fullName' variable is created by concatenating the person's first and last name with a space in between.
The 'ageInDays' variable is then calculated by multiplying the person's age in years by the number of days in a year (365).
The 'ageInDays' function then defines a nested function called 'logMessage', which logs a message to the console containing the person's full name and age in days.
Finally, the 'ageInDays' function returns the 'logMessage' function as a callback.
*/ 
    