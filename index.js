// // Import stylesheets
// import './style.css';

// // Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

// // Program to find sum of elements in a given array

// const arr = [15, 12, 13, 10];
// const sum = arr.reduce((a, b) => a + b, 0);
// console.log(sum);

// function calSum(array, lenght) {
//   if (lenght <= 0) {
//     return 0;
//   }
//   return calSum(array, lenght - 1) + array[lenght - 1];
// }

// console.log(calSum(arr, arr.length));

// //For all Array elements find Product of Sum of all smaller and Sum of all greater elements

// let sumOf = [8, 4, 9, 3];
// let result = [];

// for (let i = 0; i < sumOf.length; i++) {
//   let sm = [];
//   let lg = [];
//   for (let j = 0; j < sumOf.length; j++) {
//     if (sumOf[i] !== sumOf[j]) {
//       if (sumOf[i] > sumOf[j]) {
//         sm.push(sumOf[j]);
//       } else {
//         lg.push(sumOf[j]);
//       }
//     }
//   }
//   console.log(sm, lg);
//   result.push(sm.reduce((a, b) => a + b, 0) * lg.reduce((a, b) => a + b, 0));
// }
// console.log(result);

// //For all Array elements find Product of Sum of all smaller and Sum of all greater elements using binary search

// function sortedArrayVal(array) {
//   let sortedArray = [...array];
//   sortedArray.sort((a, b) => a - b);
//   console.log('sortedArray', sortedArray);
//   let prefixArray = new Array().fill(0);
//   console.log(prefixArray.length);
//   prefixArray[0] = sortedArray[0];

//   for (let i = 1; i < sortedArray.length; i++) {
//     prefixArray[i] = prefixArray[i - 1] + sortedArray[i];
//   }
//   for (var i = 0; i < sortedArray.length; i++) {
//     const elemIndex = bSearch(sortedArray, 0, sortedArray.length, array[i]);
//     const sm = prefixArray[elemIndex] - array[i];
//     const lg = prefixArray[sortedArray.length - 1] - prefixArray[elemIndex];
//     console.log(sm * lg);
//   }
//   console.log(prefixArray);
// }

// sortedArrayVal(sumOf);

// function bSearch(arra, low, high, ele) {
//   if (high >= low) {
//     const mid = Math.floor((high + low) / 2);
//     // console.log('mid', mid);
//     if (arra[mid] === ele) {
//       return mid;
//     } else if (arra[mid] > ele) {
//       return bSearch(arra, low, mid - 1, ele);
//     } else {
//       return bSearch(arra, mid + 1, high, ele);
//     }
//   }
// }
// // console.log(bSearch([2,3,4,24], 0, 4, 24));

// //Find the Array Permutation having sum of elements at odd indices greater than sum of elements at even indices

// const input = [123, 45, 67, 89, 60, 33];
// findArrayPermutation(
//   input.sort((a, b) => a - b),
//   input.length
// );

// function findArrayPermutation(input, length) {
//   let j = length - 1;
//   let i = 0;
//   while (i <= j) {
//     console.log(input);
//     if (input[i] % 2 === 0) {
//       console.log('findArrayPermutation', input[i]);
//       i++;
//     } else {
//       console.log(input[j]);
//       j--;
//     }
//   }
// }
// // Given an array Arr[] of size N. Find the number of subarrays whose sum is an even number.
// console.log('From here');

// let subArray = [1, 2, 2, 3, 4, 1];

// let prefixSum = new Array(subArray.length).fill(0);
// prefixSum[0] = subArray[0];
// for (let i = 1; i < subArray.length; i++) {
//   prefixSum[i] = prefixSum[i - 1] + subArray[i];
// }

// // Given an array arr[ ] of size N, the task for each array element is to print the nearest perfect square having same parity.

// const inout = [6, 3, 2, 15];
// const inputLenght = inout.length;
// console.log(inout);
// for (let i = 0; i < inputLenght; i++) {
//   let sr = Math.floor(Math.sqrt(inout[i]));
//   if ((sr & 1) == (inout[i] & 1)) {
//     console.log(sr * sr);
//   } else {
//     sr++;
//     console.log(sr * sr);
//   }
// }

// // const ps =[];
// // for(let i=1; i<=inputLenght;i++){
// //   ps.push(i*i)
// // }
// // console.log(ps);

// // for(let i=0; i<=inputLenght;i++){
// //   console.log(findPefectSqaure(inout, ps, input[i], i, 0,4))
// // }

// // function findPefectSqaure(input, ps, value, index, low, high) {
// //   while(low<=high){
// //     const mid = Math.floor((low+high)/2);
// //     if(ps[mid] ){

// //     }
// //   }
// // }

// //Given an array arr[] consisting of N integers, the task is to find the number of pairs (i, j) whose sum of indices is the same as the sum elements at the indices.

// const sumIndex = [0, 1, 7, 4, 3, 2];

// for (i = 0; i < sumIndex.length; i++) {
//   for (j = 0; j < sumIndex.length; j++) {
//     if (sumIndex[i] + sumIndex[j] === i + j) {
//       console.lo(i, j);
//     }
//   }
// }

// //Rearrange sorted array such that all odd indices elements comes before all even indices element

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let odd = [];
// let even = [];

// for (let i = 0; i < data.length; i++) {
//   if (i % 2 === 0) {
//     even.push(data[i]);
//   } else {
//     odd.push(data[i]);
//   }
// }

// console.log(odd.concat(even));

//Rearrange sorted array such that all odd indices elements comes before all even indices element

// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let odd = [];
// let even = [];

// for (let i = 0; i < data.length; i++) {
//   if (i % 2 === 0) {
//     even.push(data[i]);
//   } else {
//     odd.push(data[i]);
//   }
// }

// // console.log(odd.concat(even));

// //3. Maximum and minimum of an array using the tournament method:

// class MinMaxPair {
//   constructor() {
//     this.min = -1;
//     this.max = 999999;
//   }
// }
// var arr = [1000, 11, 445, 1, 330, 3000];
// console.log(arr);
// minMax(arr, 0, arr.length);

// function minMax(arr, low, high) {
//   let minmax = new MinMaxPair();
//   let mn = new MinMaxPair();
//   let mx = new MinMaxPair();

//   if (arr.length === 1) {
//     minmax.min = arr[0];
//     minmax.max = arr[0];
//     return minMax;
//   }
//   if (arr.length === 2) {
//     if (arr[0] > arr[1]) {
//       minmax.max = arr[0];
//       minmax.min = arr[1];
//     } else {
//       minmax.max = arr[0];
//       minmax.min = arr[1];
//     }

//     return minmax;
//   }

//   let mid = parseInt((low + high) / 2);
//   mn = minMax(arr, low, mid);
//   mx = minMax(arr, mid + 1, high);

//   if (mn.min > mx.min) {
//     minMax.min = mx.min;
//   } else {
//     minMax.min = mn.min;
//   }

//   if (mn.max > mx.max) {
//     minMax.max = mn.max;
//   } else {
//     minMax.max = mx.max;
//   }

//   return minMax;
// }

// Counting frequencies of array elements

const arr = [10, 20, 20, 10, 10, 20, 5, 20];
const hashMap = new Map();

for(let i=0;i<arr.length;i++){
  if(hashMap.has(arr[i])){
    const index = hashMap.get(arr[i]);
    hashMap.set(arr[i],index+1);
  } else{
    hashMap.set(arr[i], 1);
  }
}

for (const [key, value] of hashMap) {
  console.log(`${key} = ${value}`);
}

for( const [key, value] of hashMap.entries()){
  console.log(`${key} = ${value}`);
}