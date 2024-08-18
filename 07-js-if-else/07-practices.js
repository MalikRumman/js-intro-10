const { getRandomNumber } = require('../utils/MathHelper.js')

console.log('\n----------------Task-1----------------\n');

/*
Generate a rnadom number between -10 and 10 (both inclusive)
Print "The number is POSITIVE" if the generated nubmer is more than zero
Print "The number is NEGATIVE" if the generated number is less than zero
Print "The number is ZERO" if the generated number is zero
*/

let r1= getRandomNumber(-10, 10);

console.log('Random number is =', r1);

if(r1 > 0) {
    console.log('The number is POSITIVE');
}
else if(r1 < 0) {
    console.log('The number is NEGATIVE');
}
else {
    console.log('The number is ZERO');
}

console.log('\n----------------Task-1----------------\n');

console.log('\n----------------Task-2----------------\n');

/*
Generate a random number between 1 and 12 (both inclusive) are considered months
1 January 
.
.
12 Decemeber

Print "Winter" if the generated number is 12, 1 or 2
Print "Spring" if the generated number is 3, 4 or 5
Print "Summer" if the generated number is 6, 7 or 8
Print "Fall" if the generated number is 9, 10 or 11
*/

let r2 = getRandomNumber(1, 12);

console.log('Random number is =', r2);

if(r2 === 12 || r2 === 1 || r2 === 2) {
    console.log('Winter');
}
else if(r2 === 3 || r2 === 4 || r2 === 5) {
    console.log('Spring');
}
else if(r2 === 6 || r2 === 7 || r2 === 8) {
    console.log('Summer');
}
else {
    console.log('Fall');
}

console.log('\n----------------Task-2----------------\n');

console.log('\n----------------Task-3----------------\n');

/*



*/

console.log('\n----------------Task-3----------------\n');