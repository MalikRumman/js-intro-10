/*
Write a function which takes a number and return true if the number is even 
or return false if the number is odd

isEven(4)   -> true
isEven(3)   -> false
isEven(0)   -> true
isEven(-2)  -> true
isEven(-7)  -> false

EVEN: number is divisible by 2      -> number % 2 === 0
ODD: number is not divisible by 2   -> number % 2 !== 0
*/

function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(4)); // true
console.log(isEven(3)); // false
console.log(isEven(0)); // true
console.log(isEven(-2)); // true
console.log(isEven(-7)); // false

function isOdd(number) {
  return num % 2 !==0;
}

/*
Write a function named initials which takes 2 arguments as fname and lname and return initials

initials('John', 'Doe')      -> 'J.D.'
initials('Adam', 'Smith')    -> 'A.S.'
initials('Max', 'Smith')     -> 'M.S.'
*/

function initials(fname, lname) {
   console.log(`${fname[0]}.${lname[0]}.`);
}

initials('John', 'Doe');
initials('Adam', 'Smith');
initials('Max', 'Smith');

/*
Write a function named inits which takes a fullname and return initials

inits('John Doe')      -> 'JD'
inits('Adam smith')    -> 'AS'
inits('max Smith')     -> 'MS'
*/

function inits(fullname) {
    let names = fullname.split(' '); // [ 'John', 'Doe' ]
    return `${names[0][0].toUpperCase()}${names[1][0].toUpperCase()}`;
}

console.log(inits('John Doe')); // 'JD'
console.log(inits('Adam smith')); // 'AS'
console.log(inits('max Smith')); // 'MS'


/*
Write a function that takes 2 number arguments and return a random number between these numbers
Both numbers are included
Be careful, as the numbers given can be different considering min, max

getRandomNumber(3, 5)           -> 
getRandomNumber(5, 3)           ->
getRandomNumber(-5, 15)         ->

Math.floor(Math.random() + (nmax - min + 1)) + min;
*/

function getRandomNumber(num1, num2) {
    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);

    return Math.floor(Math.random() * (max - min + 1)) + min; //
}

console.log(getRandomNumber(12, 2));
console.log(getRandomNumber(12, 18));
console.log(getRandomNumber(-5, 15));