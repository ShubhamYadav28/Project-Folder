// Calculator
function operation(num1, num2 , operator){
switch(operator){
    case "+":
        console.log(`the addition of ${num1} and ${num2} is ${num1 + num2}`);
        break;
    case "-":
            console.log(`the Substraction of ${num1} and ${num2} is ${num1 - num2}`);
            break;
    case "*":
            console.log(`the Multiplication of ${num1} and ${num2} is ${num1 * num2}`);
            break;
    case "/":
        console.log(`the Division of ${num1} and ${num2} is ${num1 / num2}`);
        break;
default:
    console.log("Invalid Inputs");
    break;
}}
 
let result = operation(98, 43, "-")
