const arr = [ 1, 2, [1, 2, 3, 4]];

console.log(arr.length); // 3
console.log(arr[2]); // [1, 2, 3, 4]

console.log(arr[2].length); // 4


const batch10Students = [
  [1, 2, 3],
  [4, 5,],
  [6, 7, 8, 9,] 
];

console.log(batch10Students); // [ [ 1, 2, 3 ], [ 4, 5 ], [ 6, 7, 8, 9 ] ]
console.log(batch10Students.length); // 3

// Second student from the second array
batch10Students[1][1]; // 5
batch10Students[2][2]; // 8
batch10Students[0][0]; // 1
batch10Students[2][1]; // 7

batch10Students.flat(); 
