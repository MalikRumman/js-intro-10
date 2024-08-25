console.log('\n----------Task1----------\n');
const numbers = [ 3, 4, 7, 3, 2, 2, 7 ];

// Find the sum of all numbers         -> 28
// Find the average of the numbers     -> 4

let sum = 0;

for (const number of numbers) {
    sum += number;
}

console.log(sum); // 28

const average = sum / numbers.length;

console.log(average); // 4

console.log('\n----------Task1----------\n');


console.log('\n----------Task2----------\n');

// find the prodict of all the numbers starting from the index 3 

let product = 1;

for (let i = 3; i < numbers.length; i++) {
    product *= numbers[i];
}

console.log(product); // 84

console.log('\n----------Task2----------\n');

console.log('\n----------Task3----------\n');