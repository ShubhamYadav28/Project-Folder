// Correct a bug
function fixCart(cart) {
    for (let i = 0; i < cart.length; i++) {
      cart[i] *= 2;
    }
    return cart;
  }

 const cart = [11, 20, 63, 34];
const fixedCart = fixCart(cart);
console.log(fixedCart); 

// This function takes an array called 'cart' as its input. It uses a for loop to iterate over each item in the cart array.
// Inside the loop, the function multiplies the current item in the cart array by 2, effectively doubling the quantity. This corrects the bug where the quantity of each item was being recorded incorrectly by reducing it to half.
// Finally, the function returns the corrected cart array.