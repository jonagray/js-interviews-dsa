const validateInput = require('./validation');
const wordCheck = require('./index');

function formattedNumWords(n) {
  let numArr = validateInput(n); // This will create a variable arr with the phone number input, formatted to have the 4 nums
  let phoneNum = numArr[0]; // get the original number
  let firstThreeDigits = numArr[3]; // This will grab the string of the first three digits
  let lastFourDigits = numArr[2]; // This will grab the string of the last 4 digits
  let mainSeven = numArr[1]; // This will grab the full seven digit string
  let viableThreeDigitWords = wordCheck(firstThreeDigits); // This will grab all viable words from first three digits as input
  let viableFourDigitWords = wordCheck(lastFourDigits); // This will grab all viable words from last 4 digits as input
  let viableSevenDigitWords = wordCheck(mainSeven); // This will grab all viable words from last 7 digits as input
  let storageArr = []; // This will be the arr that stores all the subarrays
  let storageArrThree = [];
  let storageArrFour = [];
  let storageArrSeven = [];
  let finalStorage = [];

    // Get original phone number into final array
    storageArr.push(phoneNum);

    // Loop through the viable words and concat with the digits of the original number (excluding last 7)
    for (let i = 0; i < viableSevenDigitWords.length; i++) {
      if (storageArr.length < 6) {
        storageArr.push(`${phoneNum.slice(0, phoneNum.length - 7)}-${viableSevenDigitWords[i]}`);
      }
    }
    
    // Loop through the viable words and concat with the digits of the original number (excluding last 4)
    for (let i = 0; i < viableFourDigitWords.length; i++) {
      if (storageArr.length < 6) {
        storageArr.push(`${phoneNum.slice(0, phoneNum.length - 7)}-${phoneNum.slice(phoneNum.length - 7, phoneNum.length - 4)}-${viableFourDigitWords[i]}`);
      }
    }

    // Loop through the three-digit viable words and concat with the digits of the original number (excluding first three)
    for (let i = 0; i < viableThreeDigitWords.length; i++) {
      if (storageArr.length < 6) {
        storageArr.push(`${phoneNum.slice(0, phoneNum.length - 7)}-${viableThreeDigitWords[i]}-${phoneNum.slice(phoneNum.length - 4)}`);
      }
    }

  // Combine arrays
  // storageArr.push(storageArrSeven, storageArrFour, storageArrThree);
  console.log(storageArr);
  return storageArr; // Need to combine all the different arrays with options in them
}

module.exports = formattedNumWords;