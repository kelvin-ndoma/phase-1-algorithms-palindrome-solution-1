function isPalindrome(word) {
  return word.split("").reverse().join("");
}

/* 
  Add your pseudocode here
*/


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));


  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

  
}

module.exports = isPalindrome;
