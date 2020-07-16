// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// My first iteration (doesn't work)
  // function reverseInt(n) {
  //   let storage;
  //   let reversed;
  //   storage = n.toString().split('');
  //   for (let char of storage) {
  //     reversed = reversed + char;
  //   };
  //   return parseInt(reversed);
  // };

// Cheater implementation
  // function reverseInt(n) {
  //   const reversed = n.toString().split('').reverse().join('');
  //   // if (n < 0) {
  //   //   return parseInt(reversed) * -1;
  //   // };
  //   // return parseInt(reversed);
  //   return parseInt(reversed) * Math.sign(n);
  // }

function reverseInt(n) {
  let reversed = '';
  let stringified = n.toString().split('');
  for (let character of stringified) {
    reversed = character + reversed;
  };
  return parseInt(reversed) * Math.sign(n);
};

module.exports = reverseInt;