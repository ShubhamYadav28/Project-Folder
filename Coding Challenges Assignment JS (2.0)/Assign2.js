//  Only unique items are allowed.
function removeDuplicates(numbers) {
// Use the Set data structure to store unique elements
    const uniqueNumbers = new Set(numbers);
  
// Convert the Set back to an array and return it
    return [...uniqueNumbers];
  }
console.log(removeDuplicates([2, 4, 6, 4, 1, 8, 7, 9, 6]))  