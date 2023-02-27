function isPalindrome(word) {
  // Write your algorithm here
  const wordArray = word.split("");
  const reverseWordArray = [];
  for (let i = wordArray.length - 1; i >= 0; i--) {
    reverseWordArray.push(wordArray[i]);
  }
  return wordArray.toString() == reverseWordArray.toString();
}

/* 
  Add your pseudocode here
  
  new array from word
  iterate through array from the end, pushing to another new array
  compare arrays are the same
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
