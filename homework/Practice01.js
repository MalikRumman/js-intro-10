console.log('\n---------------------TASK01---------------------\n');

/*

Requirement:
Write a program that generates a random number 
between 0 and 50 (both 0 and 50 are included)
Multiply number with 5 and print the result with below 
message
Expected result:
The random number * 5 = {result}

*/

let randomNumber = Math.floor(Math.random() * 51);

let result = randomNumber * 5

console.log(`The random number * 5 = ${result}`);

console.log('\n---------------------TASK01---------------------\n');


console.log('\n---------------------TASK02---------------------\n');

/*

Requirement:
Write a program that generates two random numbers 
between 1 and 10 (both 1 and 10 are included)
Find the min number
Find the max number
Find the absolute difference of the numbers
Expected result:
Min number = {min}
Max number = {max}
Difference = {difference

*/

let ranNum1 = Math.floor(Math.random() * 10) + 1;
let ranNum2 = Math.floor(Math.random() * 10) + 1;

let minNum = Math.min(ranNum1, ranNum2); // Minimun number

let maxNum = Math.max(ranNum1, ranNum2); // Maximum number

let difference = Math.abs(ranNum1 - ranNum2) // The difference between both numbers

console.log(`Min Number = ${minNum}`);
console.log(`Max Number = ${maxNum}`);
console.log(`Difference Number = ${difference}`);

console.log('\n---------------------TASK02---------------------\n');

console.log('\n---------------------TASK03---------------------\n');

/*

Requirement:
Write a program that generates a random number 
between 50 and 100 (both 50 and 100 are included)
Find the remainder of the number by 10
Expected result:
The random number % 10 = {result

*/

let randomNum50_100 = Math.floor(Math.random() * 51) + 50; // finds random number between 50-100 both inclusive

let remainder = randomNum50_100 % 10; // Finding the remainder of the random number by 10

console.log(`The random number % 10 = ${remainder}`); // The random number % 10 = {result}

console.log('\n---------------------TASK03---------------------\n');


console.log('\n---------------------TASK04---------------------\n');

/*

Requirement:
Write a program that generates 5 random numbers between 
1 to 10 (1 and 10 are included)
Calculate some points based on numbers generated. So, the 
points will be calculated as below
1st  number will be multiplied by 5 and added as points
2nd number will be multiplied by 4 and added as points
3rd number will be multiplied by 3 and added as points
4th number will be multiplied by 2 and added as points
5th number will be multiplied by 1 and added as points
Test data:
3 7 2 1 8
Expected result:
59

*/

let ranNum1_10_1 = Math.floor(Math.random() * 10) + 1;
let ranNum1_10_2 = Math.floor(Math.random() * 10) + 1;
let ranNum1_10_3 = Math.floor(Math.random() * 10) + 1;
let ranNum1_10_4 = Math.floor(Math.random() * 10) + 1;
let ranNum1_10_5 = Math.floor(Math.random() * 10) + 1;
// The above generates 5 random numbers all between 1 and 10 both being inclusive

//Calculating the points 
let points = ranNum1_10_1 * 5 + ranNum1_10_2 * 4 + ranNum1_10_3 * 3 + ranNum1_10_4 * 2 + ranNum1_10_5 * 1;

console.log(`Random Numbers: ${ranNum1_10_1}, ${ranNum1_10_2}, ${ranNum1_10_3}, ${ranNum1_10_4}, ${ranNum1_10_5}`);
console.log(`Points: ${points}`);

console.log('\n---------------------TASK04---------------------\n');

console.log('\n---------------------TASK05---------------------\n');

/*

Requirement:
Write a program that generates 4 random numbers as 
below;
1st  number to be between 1 and 25 (both included)
2nd number to be between 26 and 50 (both included)
3rd number to be between 51 and 75 (both included)
4th number to be between 76 and 100 (both included)
Find the absolute difference between the max and min 
number
Find the absolute difference between the second and 
third number
Find the average of all 4 numbers
Expected result:
Difference of max and min = {result}
Difference of second and third = {result}
Average of all = {average}

*/

let randomNumber1 = Math.floor(Math.random() * 25) + 1; // random number between 1 and 25 both included 
let randomNumber2 = Math.floor(Math.random() * 25) + 26; // random number between 26 and 50 both included
let randomNumber3 = Math.floor(Math.random() * 25) + 51; // random number between 51 and 75 both included
let randomNumber4 = Math.floor(Math.random() * 25) + 76; // random number between 76 and 100 both included

let maxNum1 = Math.max(randomNumber1, randomNumber2, randomNumber3, randomNumber4); // finding the max out of the 4 numbers
let minNum1 = Math.min(randomNumber1, randomNumber2, randomNumber3, randomNumber4); // finding the min out of the 4 numbers

let diffMaxMin = Math.abs(maxNum1 - minNum1); // finding the absolute difference between max and min number

let diff2nd3rd = Math.abs(randomNumber2 - randomNumber3); // finding the absolute difference between the second and third random number

let average = (randomNumber1 + randomNumber2 + randomNumber3 + randomNumber4) / 4; // finding the average of all 4 numbers

console.log(`Random Numbers: ${randomNumber1}, ${randomNumber2}, ${randomNumber3}, ${randomNumber4}`);
console.log(`Difference of max and min = ${diffMaxMin}`);
console.log(`Difference of second and third = ${diff2nd3rd}`);
console.log(`Average of all = ${average}`);

console.log('\n---------------------TASK05---------------------\n');