const checkWord = require('check-word'),
  words = checkWord('en'); // setup the language for check, default is en
const data = require('./words_dictionary.json');


// const hashtable = require('./hashmap');

// let digits = [["a", "b", "c"], ["d", "e", "f"], ["j", "k", "l"], ["j", "k", "l"]];

let digits = [['d', 'e', 'f'], ['j', 'k', 'l'], ['m', 'n', 'o'], ['w', 'x', 'y', 'z'], ['d', 'e', 'f'], ['p', 'q', 'r', 's'], ['p', 'q', 'r', 's']];

// 234 === "ADG", "BDG", "CDG", "AEG", "BEG", "CEG", "AFG", "BFG", "CFG", "ADH", "BDH", "CDH", "AEH", "BEH", "CEH", "AFH", "BFH", "CFH", "ADI", "BDI", "CDI", "AEI", "BEI", "CEI", "AFI", "BFI", "CFI"

function wordsMatching() {
  let validWords = [];
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




// function iterativeWordCheck() {
//   let validWords = [];
//   let storage = wordsMatching();
//     for (let i = 0; i < storage.length; i++) {
//           if (hashtable.contains(i) === true) {
//             validWords.push(storage[i]);
//           }
//     }
//     return validWords;
// }

function hashEverything() {
  let newHashtable = new HashTable(40000);
  let boof = [];
  for (let key in data) {
    if (key.length >= 3 && key.length < 8) {
      newHashtable.add(`${key}`, `${data[key]}`)
    }
    // console.log(newHashtable.get(`${key}`))
    // console.log(newHashtable.buckets);
  }
  let storage = wordsMatching();
  // console.log(storage, "booooooooooooooork");
  
  for (let i = 0; i < storage.length; i++) {
    // console.log(storage[i], "booooooooooooooork")
    if (newHashtable.get(storage[i]) !== null) {
      boof.push(storage[i]);
    }
  }
  return boof;
}

// function wordCheck() {
//   let storage = wordsMatching();
//   let hashtable = hashEverything();
//   let validWords = [];
//     for (let i = 0; i < storage.length; i++) {
//       console.log(storage[i])
//     }
//     return validWords;
// }

module.exports = hashEverything;