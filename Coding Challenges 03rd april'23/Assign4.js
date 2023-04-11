{
    console.log(a); // Output: undefined
    console.log(b); // Output: undefined
    console.log(c); // Throws an error: "Uncaught ReferenceError: Cannot access 'c' before initialization"
  
    let a = "shubham";
    var b = 'PW';
    const c = 3;
  
    console.log(a); // Output: shubham
    console.log(b); // Output: PW
    console.log(c); // Output: 3
  }
  