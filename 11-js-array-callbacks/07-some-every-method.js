const numbers = [-5, 0, 5, 10, 23, -10];

// check if some elements are divisible by 5
// check if every element is positive 
// check if some elements are negative

let divisibleBy5 = numbers.some(num => num % 5 === 0);

console.log(divisibleBy5);

let allPositive = numbers.every(num => num > 0);

console.log(allPositive);

let someNegative = numbers.some(num => num < 0);

console.log(someNegative);









