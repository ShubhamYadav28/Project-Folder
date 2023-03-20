// Calculate the final order price
const calculateTotalCost = cart => {
    let totalCost = 0;
    for (let i = 0; i < cart.length; i++) {
      const item = cart[i];
      totalCost += item.unitPrice * item.quantity;
    }
     return totalCost;
  };

  const cart = [
    { unitPrice: 10, quantity: 12 },
    { unitPrice: 5, quantity: 1 },
    { unitPrice: 0, quantity: 10 }
  ];
  
  const totalCost = calculateTotalCost(cart);
  console.log(totalCost);

//   This function first initializes a 'totalCost' variable to 0. It then loops through each item in the 'cart' array using a for loop. For each item, it multiplies the 'unitPrice' and 'quantity' properties together to get the total cost of that item, and adds that cost to the 'totalCost' variable. Finally, it returns the 'totalCost' variable once all items in the cart have been accounted for.