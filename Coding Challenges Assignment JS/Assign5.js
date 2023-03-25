// URL validation.

// Define a regular expression for matching valid URLs
const urlRegex = /^(http|https):\/\/[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+\.[a-zA-Z]+$/;
// Define some test cases
const urls = [
  "http://www.google.com",
  "https://www.pwskills.com",
  "https://www.pwlive.com/path/to/file.html",
  "ftp://example.com",
  "https://www.bhaskar.com/epaper",
  "https://example",
];
// Test each URL against the regular expression and print a message
urls.forEach(url => {
  if (urlRegex.test(url)) {
    console.log(`${url} is a valid URL`);
  } else {
    console.log(`${url} is not a valid URL`);
  }
});
