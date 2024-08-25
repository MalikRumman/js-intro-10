const numbers = [3, 4, 7, 3, 2, 2, 7];

// find the sum of the numbers that has even index 

let sum = 0;
let index = 0;

for (const number of numbers) {
    if (index % 2 === 0) { 
        sum += number;
    }
    index++;
}

console.log(sum);

// find the multiplication of odd indexes 

let product = 1;

for(let i = 0; i < numbers.length; i++) {
    if(i % 2 !== 0) product *= numbers[i];
}

console.log(product);



let sumOfEven = 0;
let productOfOdd = 1;
let index_ = 0;

for(const num of numbers) {
    if(index % 2 === 0) sumOfEven += num;
    else productOfOdd *= num;
    index_++;
}

console.log(sumOfEven);
console.log(productOfOdd);






