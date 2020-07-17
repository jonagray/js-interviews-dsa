// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// 1. Create new empty array to store results
// 2. Iterate through array
// 3. Make temp variable, which will be equal to the last element in the newly created array
// 4. If last doesn't exist yet, OR if last is equal to the size parameter, push the element into the new array
// 5. Otherwise, push the current element into the "last" temp variable

// Iterative Solution
  // function chunk(array, size) {
  //   const chunked = [];
  //   for (let element of array) {
  //     const last = chunked[chunked.length - 1];
  //     if (!last || last.length === size) {
  //       chunked.push([element]);
  //     } else {
  //       last.push(element);
  //     }
  //   }
  //   return chunked;
  // };

  
// Solution requiring array method slice
  // 1. Create new empty array to store results
  // 2. Create an 'index' variable, starting at 0
  // 3. Create a while loop that runs while index is less than array.length
  // 4. Push a slice of length 'size' from 'array' into newly created array
  // 5. Add 'size' to 'index'

function chunk(array, size) {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
};

module.exports = chunk;
