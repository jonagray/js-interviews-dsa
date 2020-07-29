// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// First try (doesn't work)
  // function vowels(str) {
  //   // Make a character map
  //   let result = 0;
  //   let strMap = buildCharMap(str);
  //   for (let char in strMap) {
  //     if (Object.keys === 'a' || 'e' || 'o' || 'i' || 'u') {
  //       result += strMap[char];
  //     }
  //   };
  //   return result;
  // };

// Iterative Solution
  // function buildCharMap (str) {
  //   const charMap = {};
  //   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
  //     charMap[char] = charMap[char] + 1 || 1;
  //   };
  //   return charMap;
  // }

  // function vowels(str) {
  //   let counter = 0;
  //   const checker = ['a', 'e', 'i', 'o', 'u'];

  //   for (let char of str.toLowerCase()) {
  //     if (checker.includes(char)) {
  //       counter++;
  //     }
  //   }
  //   return counter;
  // };

// Cheater Solution
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
};

module.exports = vowels;
