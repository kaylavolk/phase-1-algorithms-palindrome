function isPalindrome(word) {
  // Write your algorithm here
  // If the word given is a palindrome, return true. If it's not a palindrome, return false.
  const originalWord = word

  // return a new array of letters
  // [k,a,y,l,a]
  const arrayStrings = word.split("");
  
  // reverse the array of letters
  // [a,l,y,a,k]
  const reverseString = arrayStrings.reverse();

  // join the letters back together
  // "alyak"
  const reversedWord = reverseString.join("")

// if kayla === alyak
  if(originalWord === reversedWord){
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
  If palindrome is true, return true.
  If palindrome is false, return false.
*/ 

/*
  Add written explanation of your solution here
  First, the function isPalindrum is created with word as a parameter. 
  The string is then split into indivudal array elements using the split() method.
  The string elements are reversed using the reverse() method.
  The reversed elements are joined into a single string.
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  // console.log("Input: racecar");
  // console.log("=>", isPalindrome("racecar"));
  // console.log("Expecting: true")

  // console.log("");

  // console.log("Input: robot");
  // console.log("=>", isPalindrome("robot"));
  // console.log("Expecting: false")
  console.log(isPalindrome("mom"))
}

module.exports = isPalindrome;
