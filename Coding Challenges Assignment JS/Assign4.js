// Filtering and Capitalizing: Books Published After 2010 with Author Names.
// Sample list of books with authors and publication years
const books = [
    { title: "Inner Engineering", author: "sadhguru", year: 2016 },
    { title: "1984", author: "george orwell", year: 1949 },
    { title: "Harry Potter and the Philosopher's Stone", author: "j.k. rowling", year: 1997 },
    { title: "Half Girlfriend", author: "chetan bhagat", year: 2014 },
    { title: "Rich dad Poor dad", author: "robert t. kiyosaki", year: 2001 },
    { title: "The Lord of the Rings", author: "j.r.r. tolkien", year: 1954 }
  ];
  // Filter out books published before 2010 and capitalize author names
  const filteredBooks = books.filter(book => book.year >= 2010).map(book => {
    return {
      title: book.title,
      author: book.author.toUpperCase(),
      year: book.year
    };
  });
   console.log(filteredBooks);
  