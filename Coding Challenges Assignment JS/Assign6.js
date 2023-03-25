// LinkedIn Profile URL Validator
// Define the regular expression for a valid LinkedIn profile URL
const linkedinRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,29}[a-zA-Z0-9]$/;
// Define an array of input LinkedIn profile URLs to check
const inputUrls = [
  "https://www.linkedin.com/in/sy339194",
  "https://www.linkedin.com/in/shubh_yad",
  "https://www.linkedin.com/in/shubh-yad-456",
  "https://www.linkedin.com/in/Shubham28",
  "https://www.linkedin.com/in/yadSubham6666667777777888888889",
  "https://www.linkedin.com/in/Yadav28#",
  "https://www.linkedin.com/in/shubham1998/",
];
// Check each input URL against the regular expression and print the result
inputUrls.forEach(url => {
  if (linkedinRegex.test(url)) {
    console.log(`"${url}" is a valid LinkedIn profile URL.`);
  } else {
    console.log(`"${url}" is not a valid LinkedIn profile URL.`);
  }
});
