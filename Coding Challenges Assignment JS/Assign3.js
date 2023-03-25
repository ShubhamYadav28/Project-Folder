// Build a feature for Store's Inventory

// Define the original object with items and prices in USD
const originalPrices = {
    item1: 10,
    item2: 20,
    item3: 30
  };
  
  // Define the exchange rate
  const exchangeRate = 80;
  
  // Use map to create a new object with the converted prices in INR
  const convertedPrices = Object.fromEntries(
    Object.entries(originalPrices).map(([item, price]) => [item, price * exchangeRate])
  );
  
  // Log the original and converted objects to the console
  console.log("Original Prices in $:", originalPrices);
  console.log("Converted Prices in Rs:", convertedPrices);

  // The 'Object.fromEntries()' static method transforms a list of key-value pairs into an object.
  // The 'Object.entries()' static method returns an array of a given object's own enumerable string-keyed property key-value pairs.
  // The 'Map()' object holds key-value pairs and remembers the original insertion order of the keys.
  // Any value (both objects and primitive values) may be used as either a key or a value.