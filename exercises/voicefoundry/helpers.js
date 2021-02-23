
let mainSeven = '4382274';

let uniqueMap = mainSeven.split('').map(x => + x);

// console.log(uniqueMap);
// console.log(typeof uniqueMap[1])

let digits = [];

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

for (let i = 0; i < uniqueMap.length; i++) {
  digits.push(map[uniqueMap[i]]);
}

console.log(digits);