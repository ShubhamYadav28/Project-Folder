//  Greeting Promise.
function greetWithName(name) {
    return new Promise((resolve, reject) => {
        resolve(`Hello! ${name} `);
    });
  }
  greetWithName('Shubham')
  .then(greeting => {
    console.log(greeting); 
  })

/*
In this function, we create a new Promise and return it. The Promise takes a function with two arguments: 'resolve' and 'reject'. The resolve function is called if the promise is fulfilled successfully, and the reject function is called if the promise is rejected.
Inside the function, we pass  the 'name' as a argument.
n this example, we call the 'greetWithName' function with the name "Shubham". We then use the then method to handle the resolved value, which is the greeting message. Inside the then method, we log the greeting message to the console.
*/   
  