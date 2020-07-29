// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


// How is (n) related to the number of columns??
  // Times (n) by itself, and then minus 1

// Store variable as the midpoint of of n using Math.floor formula

function pyramid(n) {
  // Set the midpoint, which will always remain the same 
  const midpoint = Math.floor((2 * n - 1) / 2);
  // Start first for loop, which will iterate over the total amount of rows needed
  for (let row = 0; row < n; row++) {
    // Initialize the string variable, which will start with nothing inside
    let level = '';
    // Start the second for loop, which will continue until we're at 2x n, minus 1 (see above reasoning)
    for (let column = 0; column < 2 * n - 1; column ++) {
      // If the midpoint minus row is equal to or less than what column we're on
      // AND the midpoint plus row is equal to or greater than what column we're on
        // We need to add a # symbol on our current position
      if (midpoint - row <= column && midpoint + row >= column) {
        level += '#';
        // Otherwise, we need to add a space to our current position
      } else {
        level += ' ';
      }
    }
    console.log(level);
  }
}

// Iterative Solution
  // function pyramid(n) {
  //   const midpoint = Math.floor((2 * n - 1) / 2);
  //   for (let row = 0; row < n; row++) {
  //     let level = '';
  //     for (let column = 0; column < 2 * n - 1; column++) {
  //       if (midpoint - row <= column && midpoint + row >= column) {
  //         level += '#';
  //       } else {
  //         level += ' ';
  //       }
  //     }
  //     console.log(level);
  //   }
  // };

// Recursive Solution
// function pyramid(n, row = 0, level = '') {
//   if (row === n) {
//     return;
//   }
//   if (level.length === 2 * n - 1) {
//     console.log(level);
//     return pyramid(n, row + 1);
//   }
//   const midpoint = Math.floor((2 * n - 1) / 2);
//   let add;
//   if (midpoint - row <= level.length && midpoint + row >= level.length) {
//     add = '#';
//   } else {
//     add = ' ';
//   }
//   pyramid(n, row, level + add);
// };

module.exports = pyramid;
