// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// My initial solution
  // function maxChar(str) {
  //   let charObj = {};
  //   let highestNum = 0;
  //   let mostFrequent;
  //   for (let char of str) {
  //     charObj[char] = charObj[char] + 1 || 1;
  //   }
  //   for (let char in charObj) {
  //     if (charObj[char] > highestNum) {
  //       highestNum = charObj[char];
  //       mostFrequent = char;
  //     }
  //   }
  //   return mostFrequent;
  // }

// Solution
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}



module.exports = maxChar;
