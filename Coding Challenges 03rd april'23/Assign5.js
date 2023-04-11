{
    console.log(a); // Throws an error: "Uncaught ReferenceError: Cannot access 'a' before initialization"
  
    let a = 'PW skills';
  
    console.log(a); // Output: 1
  }

/*
In this example, we're using a block scope defined by curly braces '{}' to enclose our variable. Inside the block scope, we attempt to log the value of a to the console before it's declared.
Since a is declared using 'let', it will not be hoisted to the top of the block scope. Instead, trying to access it before it's declared will result in a ReferenceError due to the temporal dead zone.
After declaring 'a' with a value of 'PW skills', we then log its value to the console again, which should output 'PW skills'.
Note that this behavior only applies to variables declared using 'let' and 'const', not 'var'. var-declared variables are hoisted to the top of their enclosing function or global scope and are assigned a value of undefined until they're assigned a value.
*/   
  