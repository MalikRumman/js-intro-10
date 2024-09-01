const numbers = [10, 5, 100, 77, 50, 65, 0];
// Find all the numbers that are 50 or more -> [100, 77, 50, 65]

const filteredArr = numbers.filter((num) => num >= 50);

console.log(filteredArr);

const fruits = [ 'Orange', 'Apple', 'Red apple', 'Pineapple', 'Kiwi'];
// Find all the fruits that has apple -> [ 'Apple', 'Red apple', 'Pineapple' ]
// Count how many elements has a      -> 4
// Count how many elements has i      -> 2

const hasApple = fruits.filter((fruit) => fruit.toLowerCase().includes('apple'));
console.log(hasApple);

const wordsWithA = fruits.filter((fruit) => fruit.toLowerCase().includes('a') ? 1 : 0);
console.log(wordsWithA.length);

const countWithI = fruits.filter((fruit) => fruit.toLowerCase().includes('i') ? 1 : 0);
console.log(countWithI.length);



































