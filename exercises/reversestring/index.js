// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Cheater methods

  // function reverse(str) {
  //   let storage = str.split('');
  //   storage.reverse();
  //   return storage.join('');
  // };

  // function reverse(str) {
  //   return str.split('').reverse().join('');
  // }

// Choice methods

  // function reverse(str) {
  //   let reversed = '';
  //   for (let character of str) {
  //     reversed = character + reversed;
  //   };
  //   return reversed;
  // };

  // function reverse(str) {
  //   return str.split('').reduce((reversed, character) => {
  //     return character + reversed;
  //   }, '');
  // };

function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;