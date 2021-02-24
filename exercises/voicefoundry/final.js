// --- Directions
// Given a phone number with length of n:
// Split phone number, grabbing the last 7 digits
// Take the first 3 digits of that 7, and run the function on them
// Take the last 4 digits of that 7, and run the function on them

// Determine if the input phone number can be a vanity number
// I.E. 1-800-292-FLOW(3569)
// I.E. 1-800-BAT(228)-9799
// When a vanity number can be made from the last 4 digits, those combinations are top priority
// When a vanity number can be made from the first 3 digits, those combinations are secondary priority
// 3569377 would be able to spell flowers

// Return the top 5 results, 4-digits first, then 3-digits


// Function that normalizes input
// Function that takes input and spits out the equivalent array of arrays containing appropriate keypad letters

const data = require('./words_dictionary.json');


function letterCombinations(n) { //input=('(206) 438-2274')
  let map = []; //create the map
  map[2] = ["a", "b", "c"];
  map[3] = ["d", "e", "f"];
  map[4] = ["g", "h", "i"];
  map[5] = ["j", "k", "l"];
  map[6] = ["m", "n", "o"];
  map[7] = ["p", "q", "r", "s"];
  map[8] = ["t", "u", "v"];
  map[9] = ["w", "x", "y", "z"];
  map[0] = "";
  map[1] = "";

  n = validateInput(n); //output=[ '2064382274', '4382274', '2274', '438' ]

  let result = {};
  let digits = [];

  if (n === null || n.length === 0) {
    return result;
  }

  let input = n[0];
  // Create unique map based on the digits - n[1] will be full 7 digits in a string
  let phoneNum = n[0]; // get the original number
  let firstThreeDigits = n[3]; // This will grab the string of the first three digits
  let lastFourDigits = n[2]; // This will grab the string of the last 4 digits
  let mainSeven = n[1]; // This will grab the full seven digit string

  // make a copy of the mainseven variable and split it into an array of separated chars
  // Then loop through and turn str chars back into numbers
  // Use this array of numbers to create the unique map needed - an array of arrays

  let uniqueMap = input.split('').map(x => + x); // output = [4, 3, 8, 2, 2, 7, 4 ]

  // Loop over uniqueMap and create digits array of arrays
  for (let i = 0; i < uniqueMap.length; i++) {
    digits.push(map[uniqueMap[i]]);
  }

  return digits;
}


// Function that takes phone number input and outputs correctly formatted phone number
function validateInput(n) {
  let storage = [];
  let stringified = ""; // Create empty string variable
  if (typeof n !== Number) { // If input is already a string, format it correctly
    stringified = ('' + n).replace(/\D/g, '');
  } else {
    stringified = n.toString();
  }
  storage.push(stringified);

  let fullSeven = stringified.slice(stringified.length - 7);
  storage.push(fullSeven);

  let lastFour = stringified.slice(stringified.length - 4);
  storage.push(lastFour);

  let firstThree = stringified.slice(stringified.length - 7).slice(0, 3);
  storage.push(firstThree);

  return storage;
}
// validateInput: input=('(206) 755 6940'), output=[ '2067556940', '7556940', '6940', '755' ]


function HashTable(length) {
  this.buckets = Array(length);
  this.bucketsLength = this.buckets.length;
}

function HashNode(key, val) {
  this.key = key;
  this.val = val;
  this.next = null;
  this.previous = null;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

LinkedList.prototype.addToList = function (key, val) {
  let node = new Node(key, val);
  if (!this.length) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.previous = this.tail;
    this.tail = node;
  }
  this.length++;
}

HashTable.prototype.hash = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % this.bucketsLength;
};

HashTable.prototype.add = function (key, val) {
  let index = this.hash(key);
  if (!this.buckets[index])
    this.buckets[index] = new HashNode(key, val);
  else {
    let currentNode = this.buckets[index];
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = new HashNode(key, val)
  }
}

HashTable.prototype.get = function (key) {
  let index = this.hash(key);
  let currentNode = this.buckets[index];
  if (!currentNode) return null;
  else if (currentNode.key === key) return this.buckets[index];
  else {
    while (currentNode.next) {
      if (currentNode.key === key) return currentNode.val;
      currentNode = currentNode.next;
    }
  }
  return null;
};

HashTable.prototype.contains = function (key) {
  let index = this.hash(key);
  let currentNode = this.buckets[index];
  if (currentNode) {
    return true;
  } else {
    return false;
  }
}


function wordsMatching(n) { // Input is basic phone number => call the function that will turn into array of arrays
  let digits = letterCombinations(n)
  // console.log(digits)
  // outer loop is for each digit in the number, inner loop is the letter possibilities for the digit you're on
  // I want an array of the different digits you can get from the input
  let result = digits[0];
  for (let i = 1; i < digits.length; i++) { // loop through arrays inside letters array
    //
    let subresult = [];
    let letters = digits[i];

    for (let j = 0; j < letters.length; j++) {
      // create map with letter appended to end
      subresult = subresult.concat(result.map(str => str + letters[j]));
    }

    result = subresult;
  }
  return result;
}


function hashEverything(n) { // Call this function with => ('(206) 438-2274')
  let storage = wordsMatching(n); // Storage needs to be the array of gibberish

  let newHashtable = new HashTable(40000);
  let boof = [];
  for (let key in data) {
    if (key.length === storage[0].length) { // This will make sure the words in hashtable are same length as input words
      newHashtable.add(`${key}`, `${data[key]}`)
    }
  }

  for (let i = 0; i < storage.length; i++) {
    if (newHashtable.get(storage[i]) !== null) {
      boof.push(storage[i]);
    }
  }
  return boof;
}

// function getRekt(n) {
//   let gob = validateInput(n);
//   let oof = [];
//   for (let i = 1; i < gob.length; i++) {
//     oof.push(hashEverything(gob[i]))
//   }
//   return console.log(oof, gob[0]);
// }

// // getRekt('2066973736')
// // getRekt('2063569377')
// getRekt('253285337')
// boog(['226', '234'])
// hashEverything('226');
// hashEverything('(206) 356-9377'); // Output will get you the array of arrays with phone number digits

function formattedNumWords(n) {
  let numArr = validateInput(n);
  let phoneNum = numArr[0]; // get the original number
  let tempArr = [];

  // console.log(numArr)
  // console.log(phoneNum)

  for (let i = 1; i < numArr.length; i++) {
    tempArr.push(hashEverything(numArr[i]))
  }
  // console.log(tempArr)

  let viableThreeDigitWords = tempArr[2]; // This will grab the string of the first three digits
  let viableFourDigitWords = tempArr[1]; // This will grab the string of the last 4 digits
  let viableSevenDigitWords = tempArr[0]; // This will grab the full seven digit string

  let storageArr = [];

  // Get original phone number into final array
  storageArr.push(phoneNum);

  // Loop through the viable words and concat with the digits of the original number (excluding last 7)
  if (viableSevenDigitWords) {
    for (let i = 0; i < viableSevenDigitWords.length; i++) {
      if (storageArr.length < 6) {
        storageArr.push(`${phoneNum.slice(0, phoneNum.length - 6)}-${viableSevenDigitWords[i]}`);
      }
    }
  }

  // Loop through the viable words and concat with the digits of the original number (excluding last 4)
  if (viableFourDigitWords) {
    for (let i = 0; i < viableFourDigitWords.length; i++) {
      if (storageArr.length < 6) {
        storageArr.push(`${phoneNum.slice(0, phoneNum.length - 6)}-${phoneNum.slice(phoneNum.length - 7, phoneNum.length - 4)}-${viableFourDigitWords[i]}`);
      }
    }
  }

  // Loop through the three-digit viable words and concat with the digits of the original number (excluding first three)
  if (viableThreeDigitWords) {
    for (let i = 0; i < viableThreeDigitWords.length; i++) {
      if (storageArr.length < 6) {
        storageArr.push(`${phoneNum.slice(0, phoneNum.length - 6)}-${viableThreeDigitWords[i]}-${phoneNum.slice(phoneNum.length - 4)}`);
      }
    }
  }

  // Combine arrays
  // storageArr.push(storageArrSeven, storageArrFour, storageArrThree);
  // console.log(viableThreeDigitWords, "booooooooooooork!!");
  return console.log(storageArr);
  // return storageArr; // Need to combine all the different arrays with options in them
}

// formattedNumWords('253285337');
formattedNumWords('2532266253');