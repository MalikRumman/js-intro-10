const numbers = [ 4, 10, 3, 0, -2, -5, 1 ];

// count evens = 4

const countEven = numbers.reduce((acc, curr) => {
    if(curr % 2 === 0) return acc + 1;
    return acc;
}, 0)

console.log(countEven); // 4

const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];

// count how many elements has 'apple' ignoring cases   -> 2
// count how many elements has 'i' ignoring cases       -> 2
// count how many elements ends with 'e'                -> 3

let countApple = fruits.reduce((count, fruit) => 
    count + (fruit.toLowerCase().indexOf('apple') !== -1), 0);

let countI = fruits.reduce((count, fruit) => 
    count + (fruit.toLowerCase().indexOf('i') !== -1), 0);

let countEndsWithE = fruits.reduce((count, fruit) => 
    count + (fruit.endsWith('e')), 0);


