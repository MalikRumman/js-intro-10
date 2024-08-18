// Get a random number bt 0 and 10 -> 0 inclusive and 10 exclusive

let ranNum0_9 = Math.random() * 10;

console.log(Math.floor(ranNum0_9)); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9


// Get a random number bt 1 and 10 -> both inclusive
let ranNum1_10 = Math.random() * 10;

console.log(Math.floor(ranNum1_10)); // 1 and 10 both inclusive


// Get a random number between 0 and 25 -> both included

/*

RULE: You can use below steps only when your range starts with ZERO!
1. Generate a random number between 0 and 1
2. Multiply this number with the count of desired numbers (how many numbers you can get in your range)
    largerNumber - samllerNumber + 1    => 25 - 0 + 1   => 26
3. Floor the result

*/

let ranNum0_25 = Math.floor(Math.random()) * 26;

console.log(ranNum0_25); // 0 and 25 both inclusive

// Get a random number between 13 and 27 -> both inclusive
/*

RULE: You can use below steps if your range doesnt start with ZERO!
1. Generate a random number between 0 and 1
2. Multiply this number with the count of desired numbers (how many numbers you can get in your range)
    largerNumber - samllerNumber + 1    => 27 - 13 + 1   => 15
3. floor the result
4. Add smaller number to the floored result

Math.floor(Math.random() * (max - min + 1)0 + min
*/

let ranNum13_27 = Math.floor(Math.random() * 15) + 13;

console.log(ranNum13_27); // 13 and 27 both inclusive


// Get a random number between 943 and 1005 -> both inclusive

let ranNum943_1005 = Math.floor(Math.random() * 62) + 943;

console.log(ranNum943_1005); // 943 and 1005 both inclusive


// Get a random number between 14 and 19 -> 14 inclusive 19 exclusive

let ranNum14_19 = Math.floor(Math.random() * 5) + 14; // 

console.log(ranNum14_19); // 14 inclusive 19 exclusive

