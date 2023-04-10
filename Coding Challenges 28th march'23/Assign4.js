// Arrange in alphabetical order.
// Define a list of books
const books = [
    { title: "The God of Small Things", author: "Arundhati Roy", year: 1997 },
    { title: "Inner Engineering", author: "Sadhguru", year: 2020 },
    { title: "Malgudi Days", author: "R.K. Narayan", year: 1943 },
    { title: "Gitanjali", author: "Rabindranath Tagore", year: 1910 },
  ];
  // Define the callback function
  // Pass the new list to the callback function
  function logTitles(titles) {
    titles.sort();
    console.log(`Titles in alphabetical order: ${titles}`);
  }
  // Use the map function to create a new list containing only the titles of the books
  function extractTitles(books, callcack){
    const titles = books.map(book => book.title);
     callcack(titles)
  }
extractTitles(books, logTitles)
  