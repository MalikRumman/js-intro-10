const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];

console.log('\n----------Task1----------\n');

// Count how many positive numbers you have in the array -> 4

let count = 0;

for (let number of numbers) {
    if (number > 0) {
        count++;
    }
}

console.log(count); // 4

console.log('\n----------Task1----------\n');

console.log('\n----------Task2----------\n');

// Count the negatives

let countNeg = 0;

for (let num of numbers) {
    if (num < 0) countNeg++;
}

console.log(countNeg); // 3 

console.log('\n----------Task2----------\n');

console.log('\n----------Task3----------\n');

//  count how many even numbers there are 

let countEven = 0;

for (let number of numbers) {
    if (number % 2 === 0) countEven++;
}

console.log(countEven);

console.log('\n----------Task3----------\n');

console.log('\n----------Task4----------\n');

// count how many odd but not negative numbers you have in the array -> 2

let count_ = 0;

for (let number of numbers) {
    if (number > 0 && number % 2 !== 0) {
        count_++;
    }
}

console.log(count_); // 2

console.log('\n----------Task4----------\n');


