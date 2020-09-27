// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Cheater methods
  // function reverse(str) {
  //   const arr = str.split('');
  //   arr.reverse();
  //   return arr.join('');
  // }

  // function reverse(str) {
  //   return str.split('').reverse().join('');
  // };

// Array helper method
  // function reverse(str) {
  //   return str.split('').reduce((reversed, character) => character + reversed, '');
  // }

// Iterative solution
function reverse(str) {
  // Create empty string called 'reversed'
  // For each character in the string, take the character and add it to the start of the str
  let reversed = '';
  for (let character of str) {
    reversed = character + reversed;
  };
  return reversed;
};

module.exports = reverse;