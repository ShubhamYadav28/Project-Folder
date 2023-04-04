//  Filter by Category
function filterByCategory(products) {
    return function(category) {
      return products.filter(product => product.category === category);
    }
  }
  const products = [
    {  name: "Shirt", category: "Clothing" },
    {  name: "Pants", category: "Clothing" },
    {  name: "Hat", category: "Accessories" },
    {  name: "Shoes", category: "Footwear" },
  ];
  const filterByClothing = filterByCategory(products);
  console.log(filterByClothing("Clothing")); 
  console.log(filterByClothing("Accessories")); 

/*
In the above code, we define a function 'filterByCategory' that takes an array of products as an argument. This function returns another function that takes a category as an argument and filters the products array by that category. We use the 'filter' method of the array to create a new array that only contains products with the same category as the input.

The returned function is an example of a closure, as it "closes over" the products parameter of the outer 'filterByCategory' function and can access it even after the outer function has finished executing.
*/   
    