const numbers = [0, 10, -4, 5, 2, -3];

// Find first positive
// Find first negative

// let firstPos; 

// for(const number of numbers) {
//    if(number > 0) {
//        firstPos = number;
//        break;
//    }
// }

// console.log(firstPos);

let firstPos = numbers.find((number) => number > 0);

let firstposIndex = numbers.findIndex((number) => number > 0)

console.log(firstPos); // 10
console.log(firstposIndex); // 1

const cities = ['Rome', 'Kyiv', 'Berlin', 'Brugge', 'LA'];

// Find the first element that has 4 letters -> Rome
// Find the last element that has 6 letters -> Brugge
// Find the index of LA -> 4
// Find the first element which has i -> Kyiv
// Find the last element that has 4 letters -> Kyiv

let fourLetters = cities.find(city => city.length === 4);

console.log(fourLetters); // Rome

let sixLetters = cities.reverse().find(city => city.length === 6);
cities.reverse();

console.log(sixLetters); // Brugge

let indexOfLA = cities.indexOf('LA');

console.log(indexOfLA); // 4

console.log(cities.find(city => city.includes('i'))); // Kyiv

let lastFourLetters = cities.reverse().find(city => city.length === 4);
cities.reverse();

console.log(lastFourLetters); // Kyiv




