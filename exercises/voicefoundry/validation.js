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

  let firstThree = stringified.slice(stringified.length - 7).slice(0,3);
  storage.push(firstThree);

  return storage;
}

// validateInput('1+ (253) 345 8854')

module.exports = validateInput;