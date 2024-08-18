const { getRandomNumber } = require('../utils/MathHelper.js')

/*
Generate a random number between 1 and 10 both inclusive
And checkj if the number is 7
If it is 7, print true
Otherwise, pritn false

PSEUDO CODE
1. Generate a random number
2. check if it is 7 or not
3. Depending on the condition print the result
*/

let r1 = getRandomNumber(1, 10);

if(r1 === 7) {
    console.log('TRUE');
}
else {
    console.log('FALSE');
}

r1 === 7 ? console.log(true) : console.log(false);


//Another way of using ternary oeprator for assignment
let result = r1 === 7 ? true : false;
console.log(result);

let gender = 'male';

let name = gender === 'female' ? 'Jane' : 'John';

console.log(name);

/*
Generate a rnadom number between 1 and 10
Print even if the number is EVEN
Print ODD if the number is ODD

5 -> 'ODD'
8 -> 'EVEN'
*/

const { getRandomNumber } = require('../utils/MathHelper.js')

let r2 = getRandomNumber(1, 10);

console.log('Random number is =', r2);

if(r2 % 2 === 0) {
    console.log('EVEN');
}
else {
    console.log('ODD');
}

r2 % 2 === 0 ? console.log('EVEN') : console.log('ODD');

let resultEvenOdd = r2 % 2 === 0 ? 'EVEN' : 'ODD';
console.log(resultEvenOdd);

