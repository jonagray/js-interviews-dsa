const wordCheck = require('./index');
const validateInput = require('./validation');
const formattedNumWords = require('./formattedNumWords');

test('wordCheck function exists', () => {
  expect(wordCheck).toBeDefined();
});

test('wordCheck handles 0 as an input', () => {
  expect(wordCheck(0)).toEqual([]);
});

test('wordCheck handles 1 as an input', () => {
  expect(wordCheck(1)).toEqual([]);
});

test('wordCheck creates array of valid words from a positive number of length 3, 4, and 7 digits', () => {
  // expect(wordCheck("23")).toEqual([ 'ad', 'ae', 'be' ]);
  expect(wordCheck("235")).toEqual([ 'bel', 'cel' ]);
  expect(wordCheck("3647")).toEqual([ 'dogs', 'dohs', 'emir', 'engs', 'fogs' ]);
  
  // expect(wordCheck("3569377")).toEqual([ 'flowers' ]); // 25 secs
});

test('validateInput is a function', () => {
  expect(typeof validateInput).toEqual('function');
});

test('validateInput can handle a string as an input', () => {
  expect(validateInput('2067556940')).toEqual([ '2067556940', '7556940', '6940', '755' ]);
});

test('validateInput can handle a number as an input', () => {
  expect(validateInput(2067556940)).toEqual([ '2067556940', '7556940', '6940', '755' ]);
});

test('validateInput can remove all special characters from a string input', () => {
  expect(validateInput('(206) 755-6940')).toEqual([ '2067556940', '7556940', '6940', '755' ]);
});

test('formattedNumWords - four digit word combinations', () => {
  // expect(formattedNumWords("23")).toEqual([ 'ad', 'ae', 'be' ]);
  // expect(formattedNumWords("235")).toEqual([ 'bel', 'cel' ]);
  expect(formattedNumWords("2535783647")[1]).toEqual([ '253-578-dogs', '253-578-dohs', '253-578-emir', '253-578-engs', '253-578-fogs' ]);
});

test('formattedNumWords - three digit word combinations', () => {
  // expect(formattedNumWords("23")).toEqual([ 'ad', 'ae', 'be' ]);
  // expect(formattedNumWords("235")).toEqual([ 'bel', 'cel' ]);
  expect(formattedNumWords("2532283647")[0]).toEqual([ '253-act-3647', '253-bat-3647', '253-cat-3647' ]);
});

test('formattedNumWords - seven digit word combinations', () => {
  expect(formattedNumWords("2533569377")[2]).toEqual([ '253-flowers' ]);
});

