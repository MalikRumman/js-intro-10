/*
Create 2 varaibles and assign them numbers.
Then, find the sum, subtraction, multiplication, division, exponentation, and remainder
*/

let num1 = 6;
let num2 = 4;

let sum = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let exponentation = num1 ** num2;
let division = num1 / num2;
let remainder = num1 % num2;

console.log(`The sum = ${num1 + num2}`); // used backticks here
console.log('The sum = ' + (sum));
console.log('The subtraction = ' + (subtraction));
console.log('The multiplication = ' + (multiplication));
console.log('The product = ' + (exponentation));
console.log('The division = ' + (division));
console.log('The remainder = ' + (remainder));

/*
Assume that you are given a rectangle with width = 5  and heigth = 8 

Calculate the area and perimeter of the rectangle

area = width * heigth
perimeter = 2 * width + 2 * height
perimeter = 2 * (width + height)
*/

let width = 5, height = 8;

console.log('The area = ', width * height);
console.log('The perimeter = ', 2 * (width + height));

/*
An annual average salary for an SDET in the Unites States is 120k. 
Write a program that calculates and prints the monthly and bi-weekly and weekly average amount that 
an SDET makes in the United States.

Annual average salary = $120,000.00
1 year = 12 months
1 year = 52 weeks
Biweekly = every other week  26 payments
*/

let salary = 120000;
let monthly = 12;
let weekly = 52;
let biWeekly = 26;

console.log(`Your monthly salary = ${salary / monthly}`);
console.log(`Your weekly salary = ${salary / weekly}`);
console.log(`Your bi-weekly salary = ${salary / biWeekly}`);



























