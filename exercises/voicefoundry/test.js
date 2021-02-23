const wordCheck = require('./index');
const validateInput = require('./validation');
const formattedNumWords = require('./formattedNumWords');
const iterativeWordCheck = require('./iterative');
const hashEverything = require('./iterative');

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

// test('formattedNumWords - four digit word combinations', () => {
//   // expect(formattedNumWords("2535783647")[1]).toEqual([ '253-578-dogs', '253-578-dohs', '253-578-emir', '253-578-engs', '253-578-fogs' ]);
//   expect(formattedNumWords("2535782355")[1]).toEqual([ '253-578-bell', '253-578-cell' ]);
// });

// test('formattedNumWords - four digit word combinations', () => {
//   expect(formattedNumWords("2535782355")[1]).toEqual([ '253-578-bell', '253-578-cell' ]);
// });

// test('formattedNumWords - three digit word combinations', () => {
//   expect(formattedNumWords("2532283647")[2]).toEqual([ '253-act-3647', '253-bat-3647', '253-cat-3647' ]);
// });

// Test for seven digit words - commented out for now because it's v slow
// test('formattedNumWords - seven digit word combinations', () => {
//   expect(formattedNumWords("2533569377")[0]).toEqual([ '253-flowers' ]);
// });

// test('formattedNumWords - works for three and four digit word combinations together', () => {
//   expect(formattedNumWords("2533282355")).toEqual([
//     '2533282355',
//     '253-328-bell',
//     '253-328-cell',
//     '253-eat-2355',
//     '253-eau-2355',
//     '253-ecu-2355'
//   ]);
// });

test('iterativeWordCheck speed test', () => {
  // expect(hashEverything()).toEqual([ 'belk', 'bell', 'cell' ]);
  expect(hashEverything()).toEqual([ 'flowers' ]);

  // expect(wordCheck("3569377")).toEqual([ 'flowers' ]); // 25 secs
});

// test('iterativeWordCheck speed test', () => {
//   expect(iterativeWordCheck()).toEqual([ 'flowers' ]);
  
//   // expect(wordCheck("3569377")).toEqual([ 'flowers' ]); // 25 secs
// });