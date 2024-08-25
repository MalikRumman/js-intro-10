// Output all the even numbers from 0 to 50 (both inclusive)

console.log('\n-----------------for-loop solution-----------------\n');

for(let i = 0; i <= 50; i++) {
    if(i % 2 === 0) console.log(i);
}

console.log('\n-----------------while-loop solution-----------------\n');

let num = 1;

while (num <= 50) {
    if (num % 2 === 0) {
        console.log(num);
    }
    num++;
}


// Count all the even numbers between 1 and 10 both inclusive 

console.log('\n-----------------while-loop solution-----------------\n');

let count = 0; 
let num1 = 1;

while (num1 <= 10) { 
    if (num1 % 2 === 0) { 
        count++; 
    }
    num1++; 
}

console.log(count);


// find the sum of the numbers starting from 3 to 7 both inclusive

console.log('\n-----------------while-loop solution-----------------\n');

let sum = 0;
let i = 3;

while (i <= 7) {
    sum += i;
    i++; 
}

console.log(sum1);

console.log('\n-----------------for-loop solution-----------------\n');

let sum1 = 0;

for(let i = 3; i <= 7; i++) {
    sum1 += i;
}

console.log(sum1);















