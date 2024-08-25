const nums = [ 1, 5, 7, 2, 3, 4, 9, 4, 5, 2, 1, 0, 10, 3, 5 ];

console.log('\n----------Solution-1----------\n');

// Find the sum of first 3 and last 3 elements -> 31

let sum = 0;

for (let i = 0; i < 3; i++) {
    sum += nums[i];
}

for (let i = nums.length - 3; i < nums.length; i++) {
    sum += nums[i];
}

console.log(sum); // 31

console.log('\n----------Solution-1----------\n');

console.log('\n----------Solution-2----------\n');
let sum_ = 0;

for(const num of num.slice(0, 3)) {
    sum += num;
}

for(const num of nums.slice(-3)) {
    sum =+ num;
}

console.log(sum_); // 31

console.log('\n----------Solution-2----------\n');

