// Unit converter
function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

const celsiusTemp = 37;
const fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);
console.log(fahrenheitTemp);

// This function takes an input temperature in Celsius and converts it to Fahrenheit. It does this by first multiplying the Celsius temperature by 9/5, and then adding 32 to the result.
// The function then returns the converted temperature in Fahrenheit.
// To use this function, you can pass in the temperature in Celsius as an argument