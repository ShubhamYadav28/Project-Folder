// Calculate the percentage of the discount
const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const discountAmount = originalPrice - discountedPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;
    const roundedDiscountPercentage = discountPercentage.toFixed(2);
    //The toFixed() method formats a number using fixed-point notation.
    return `${roundedDiscountPercentage}%`;
  };

//   const originalPrice = 55;
//   const discountedPrice = 07;
  const discountPercentage = calculateDiscountPercentage(499, 324);
  console.log(discountPercentage); 

//   This function first calculates the discount amount by subtracting the discounted price from the original price. It then calculates the percentage discount by dividing the discount amount by the original price and multiplying by 100. Finally, it uses the toFixed method to round the discount percentage to two decimal places and returns it as a string with a percent sign.