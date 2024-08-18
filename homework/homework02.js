console.log('\n---------------------TASK01---------------------\n');

/*

Requirement:
Convert given Strings below to number data types and 
find their sum, product, division, subtraction, remainder 
and exponentiation.
let str1 = "5", str2 = "2";
Expected results:
The sum of 5 and 2 is = 7
The product of 5 and 2 is = 10
The division of 5 and 2 is = 2.5
The subtraction of  5 and 2 is = 3
The remainder of 5 and 2 is = 1
The exponentiation of 5 and 2 is = 25

*/

let str1 = "5", str2 = "2";

let num1 = Number(str1); // 5

let num2 = Number(str2); // 2

console.log(`The sum of ${num1} and ${num2} = ${num1 + num2}`); // The sum of 5 and 2 is = 7
console.log(`The product of ${num1} and ${num2} is = ${num1 * num2}`); // The product of 5 and 2 is = 10
console.log(`The division of ${num1} and ${num2} is = ${num1 / num2}`); // The division of 5 and 2 is = 2.5
console.log(`The subtraction of ${num1} amd ${num2} is = ${num1 - num2}`); // The subtraction of  5 and 2 is = 3
console.log(`The remainder of ${num1} and ${num2} is = ${num1 % num2}`); // The remainder of 5 and 2 is = 1
console.log(`The remainder of ${num1} and ${num2} is = ${num1 ** num2}`); // The exponentiation of 5 and 2 is = 25

console.log('\n---------------------TASK01---------------------\n');

console.log('\n---------------------TASK02---------------------\n');

/*

Requirement:
Convert given Strings below to number data 
types and find the greatest and smallest values 
and find the average and absolute difference of 
them.
let s1 = "200", s2 = "-50";
Expected results:
The greatest value is = 200
The smallest value is = -50
The average is = 75
The absolute difference is = 250

*/



let s1 = "200", s2 = "-50";

let num3 = Number(s1);

let num4 = Number(s2);

let average = (num3 + num4) /2

console.log(`The greatest value is = ${Math.max(num3, num4)}`); // The greatest value is = 200
console.log(`The smallest value is = ${Math.min(num3, num4)}`); // The smallest value is = -50
console.log(`The average is = ${average}`); // The average is = 75
console.log(`The absolute difference is = ${num3 - num4}`); // The absolute difference is = 250


console.log('\n---------------------TASK02---------------------\n');

console.log('\n---------------------TASK03---------------------\n');

/*

Requirement:
Write a program that generates 2 random numbers 
between 1 and 50 (both 1 and 50 are included). Then, 
find the absolute difference of these numbers.
 
Test Data:
5, 27
Expected Output:
The absolute difference between numbers is = 22

*/

let ranNum1 = Math.floor(Math.random() * 50) + 1; // generates random number between 1 and 50 both included
let ranNum2 = Math.floor(Math.random() * 50) + 1; // generates random number between 1 and 50 both included

console.log(`Test data:`); // 'Test data:'
console.log(`${ranNum1}, ${ranNum2}`); // generates random number between 1 and 50 both included
console.log(`Expected Output:`); // 'Expected Output:'
console.log(`The absolute difference between numbers is = ${ranNum1 - ranNum2}`); // The absolute difference between numbersthe 2 random numbers

console.log('\n---------------------TASK03---------------------\n');

console.log('\n---------------------TASK04---------------------\n');

/*

Requirement:
Write a program that generates 5 random numbers 
between 1 and 50 (both 1 and 50 are included). Then, 
find the max and min of these numbers.
 
Test Data:
3, 15, 45, 20, 25
Expected Output:
The max value = 45
The min value = 3

*/

let ran1 = Math.floor(Math.random() * 50) + 1; // generates random number between 1 and 50 both included
let ran2 = Math.floor(Math.random() * 50) + 1; // generates random number between 1 and 50 both included
let ran3 = Math.floor(Math.random() * 50) + 1; // generates random number between 1 and 50 both included
let ran4 = Math.floor(Math.random() * 50) + 1; // generates random number between 1 and 50 both included
let ran5 = Math.floor(Math.random() * 50) + 1; // generates random number between 1 and 50 both included

console.log(`Test Data:`); // 'Test Data:'
console.log(`${ran1}, ${ran2}, ${ran3}, ${ran4}, ${ran5}`) // generates 5 random numbers between 1 and 50 both included
console.log(`Expected Output:`) // 'Expected Output:'
console.log(`The max value = ${Math.max(ran1, ran2, ran3, ran4, ran5)}`); // finds the max value between the 5 random numbers
console.log(`The min value = ${Math.min(ran1, ran2, ran3, ran4, ran5)}`); // finds the min value between the 5 random numbers

console.log('\n---------------------TASK04---------------------\n');

console.log('\n---------------------TASK05---------------------\n');

/*

Requirement:
Write a program that generates 3 random numbers 
between 50 and 100 both included. 
First print the numbers
Then, find the sum of these numbers
 
Test Data:
55, 67, 90
Expected Output:
The number 1 = 55
The number 2 = 67
The number 3 = 90
The sum of numbers is = 212

*/


let randomNumber1 = Math.floor(Math.random() * 51) + 50; // random number between 50 and 100 both included 
let randomNumber2 = Math.floor(Math.random() * 51) + 50; // random number between 50 and 100 both included 
let randomNumber3 = Math.floor(Math.random() * 51) + 50; // random number between 50 and 100 both included 

console.log(`Test Data:`); // 'Test Data:'
console.log(`${randomNumber1}, ${randomNumber2}, ${randomNumber3}`); // generates 3 random numbers between 50 and 100 both included
console.log(`Expected Output:`) // 'Expected Output:'
console.log(`The number 1 = ${randomNumber1}`); // 'The number 1 = (random number between 50 and 100 both included)'
console.log(`The number 2 = ${randomNumber2}`); // 'The number 2 = (random number between 50 and 100 both included)'
console.log(`The number 3 = ${randomNumber3}`); // 'The number 3 = (random number between 50 and 100 both included)'
console.log(`The sum of the numbers is = ${randomNumber1 + randomNumber2 + randomNumber3}`); // 'The sum of the numbers is the test data added together'

console.log('\n---------------------TASK05---------------------\n');

console.log('\n---------------------TASK06---------------------\n');

/*

Requirement:
Write a program that generates 3 random numbers 
between 1 and 100 (1 and 100 are included) and find if 
all the numbers are more than 25.
Print true if all numbers are greater than 25.
Print false if any of the number is less than or equals 
25

*/

let r1 = Math.floor(Math.random() * 100) + 1; // generates random number between 1 and 100 both included
let r2= Math.floor(Math.random() * 100) + 1; // generates random number between 1 and 100 both included
let r3 = Math.floor(Math.random() * 100) + 1; // generates random number between 1 and 100 both included

console.log(`Test Data: ${r1}, ${r2}, ${r3}`); // 'Test Data: 3 random numbers between 1 and 100 both included
console.log(r1 > 25 && r2 > 25 && r3 > 25); // takes the 3 random numbers and gives true if number is greater than 25 and gives false if its less than or equals

console.log('\n---------------------TASK06---------------------\n');

console.log('\n---------------------TASK07---------------------\n');

/*

Requirement:
Assume you are given a name let name = "David"; 
1. Print out the length of the name
2. Find the first character in the name and print it
3. Find the last character in the name and print it
4. Find the first 3 characters in the name and print 
them
5. Find the last 3 characters in the name and print 
them
Expected Output:
The length of the name is = 5
The first character in the name is = D
The last character in the name is = d
The first 3 characters in the name are = Dav
The last 3 characters in the name are = vid

*/

let name = 'David';

console.log(`David`); // 'David'
console.log(`The length of the name is = ${name.length}`); // 'The length of the name is = 5'
console.log(`The first character in the name is = ${name[0]}`); // 'The first character in the name is = D'
console.log(`The last character in the name is = ${name[name.length - 1]}`); // 'The last character in the name is = d'
console.log(`The first 3 characters in the name are = ${name.slice(0, 3)}`); // 'The first 3 characters in the name are = Dav'
console.log(`The last 3 characters in the name are = ${name.slice(-3)}`); // 'The last 3 characters in the name are = vid'

console.log('\n---------------------TASK07---------------------\n');