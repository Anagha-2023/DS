// const arr = [1, 2, 6, 6, 4];
// const t = 20;

// var TwoNumberSum = function (arr, t) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] == t) {
//         console.log([arr[i], arr[j]]);
//       }

//     }
//   }
//   console.log([]);
// }
// TwoNumberSum(arr, t);



// Another way

const arr = [1, 2, 6, 6, 4];
const t = 3;

var TwoNumberSum = function (arr, t) {
  let hashTable = {};

  for (let i = 0; i < arr.length; i++) {
    const value = t - arr[i];

    if (hashTable[value] !== undefined) {
      console.log([arr[i], value]);
      return
    }

    hashTable[arr[i]] = true;

  }
  console.log([]);
}

TwoNumberSum(arr, t);