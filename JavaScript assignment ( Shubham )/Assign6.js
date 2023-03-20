// Vowel Counter
function countVowels(name) {
    let vowelCount = 0;
  
    // Iterate through each character in the name
    for (let i = 0; i < name.length; i++) {
      // Check if the character is a vowel
      if (/[aeiouAEIOU]/.test(name[i])) {
        vowelCount++;
      }
    }
//   The test() method executes a search for a match between a regular expression and a specified string.
    return vowelCount;
  }

  let name = "Shubham Yadav";
  let vowelCount = countVowels(name);
  console.log(`The name ${name} has ${vowelCount} vowels.`);

//   In this program, the countVowels function takes a 'name' argument as input. It initializes a 'vowelCount' variable to 0, which will be used to keep track of the number of vowels in the name.
// The function then iterates through each character in the name using a for loop. For each character, it checks if it is a vowel by using a regular expression '/[aeiouAEIOU]/' which matches any vowel (lowercase or uppercase) in the character. If the character is a vowel, the vowelCount variable is incremented.
// Finally, the function returns the vowelCount variable, which represents the number of vowels in the name.
