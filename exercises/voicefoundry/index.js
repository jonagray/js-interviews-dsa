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
    //

    const checkWord = require('check-word'),
    words = checkWord('en'); // setup the language for check, default is en
    const validateInput = require('./validation');
    
    function letterCombinations(digits) {
        let map = []; //create the map
        map[2]="abc";
        map[3]="def";
        map[4]="ghi";
        map[5]="jkl";
        map[6]="mno";
        map[7]="pqrs";
        map[8]="tuv";
        map[9]="wxyz";
        map[0]="";
        map[1]="";
     
        let result = [];
     
        if(digits === null || digits.length === 0)
            return result;
     
        let temp = [];
        getString(digits, temp, result, map);
     
        return result;
    }
     
    function getString(digits, temp, result, map) {
        if(digits.length === 0){ //if digits is empty:
            let arr = []; //create empty arr
            for(let i = 0; i < temp.length; i++) { //loop through temp arr
                arr[i] = temp[i]; //each loop, empty arr assigned to temp's arr at i
            }
            result.push(arr.join('')); //arr is no longer empty, push arr into result arr after joining chars together
            return;
        }
        // if digits length is NOT 0:
        // console.log(typeof digits);
        let curr = parseInt(digits.substring(0,1)); //set curr to 1 letter of str, converted to int
        let letters = map[curr]; //set letters var to obj's 3 chars of current int
        for (let i = 0; i < letters.length; i++) { //loop through the 3 letters (or 4)
            temp.push(letters.charAt(i)); //push current letter "a" into temp arr
            getString(digits.substring(1), temp, result, map); //call the func recursively, taking only 1 digit
            temp.pop(); //pop off what's inside temp arr (this only runs after recursive func will no longer call itself)
        }
    }
    
    function wordCheck(n) {
      if (n === 0 || n === 1) {
        return [];
      }
      let validWords = [];
      let storage = letterCombinations(n);
      for (let i = 0; i < storage.length; i++) {
        if (words.check(storage[i])) {
          validWords.push(storage[i]);
        }
      }
      return validWords;
    }
    
    // wordCheck('28453');
    // console.log(letterCombinations("5754577"));


module.exports = wordCheck;