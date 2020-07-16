// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Cheater implementation
  // function palindrome(str) {
  //   const reversed = str.split('').reverse().join('');
  //   return str === reversed;
  // };

// My first iteration
  // function palindrome(str) {
  //   let reversed = '';
  //   for (let character of str) {
  //     reversed = character + reversed;
  //   };
  //   return (reversed === str ? true : false);
  // };

// One-liner
function palindrome(str) {
  return str.split('').every((char, i) => char === str[str.length - i - 1]);
};

module.exports = palindrome;