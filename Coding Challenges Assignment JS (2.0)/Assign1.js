// Count the occurrences.
function countWords(str) {
// It first splits the input string into an array of words using the 'split' method, with a space (" ") as the separator
  const words = str.toLowerCase().split(" ");
// It then initializes an empty 'Map' object to store the word counts.
  const countMap = new Map();
// The function then loops through each word in the array and checks whether it already exists in the 'Map'. If it does, it increments the count for that word. If it doesn't, it adds the word to the 'Map' with a count of 1.
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (countMap.has(word)) {
      countMap.set(word, countMap.get(word) + 1);
    } else {
      countMap.set(word, 1);
    }
  }
// Finally, the function returns the 'Map' object containing the word counts.
  return countMap;
}
const text = "Learn complete web stack programming with React and Node by doing it the way a full-stack professional would do it. Learn how to create whole web apps from start to finish with one of the most trending tech stacks available. You can learn how to create data-driven applications, as well as how to test, protect, and deploy your code, in this thorough study path. MERN stack is one of the most versatile tech stacks available. Learn front-end and server-side support, to build a multi-platform solution. This course will be taught in Hindi language.";
const wordCounts = countWords(text);

console.log(wordCounts);
