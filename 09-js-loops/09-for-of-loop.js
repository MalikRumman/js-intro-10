const cities = [ 'Rome', 'Chicago', 'Miami', 'Berlin', 'Tokyo', 'LA' ];


// console.log(cities[0]); // Rome 
// console.log(cities[1]); // Chicago
// console.log(cities[2]); // Miami
// console.log(cities[3]); // Berlom  
// console.log(cities[4]); // Tokyo


// for loop to iterate array elements
for(let i = 0; i <= cities.length - 1; i++) {
    console.log(cities[i]);
}

// for...of to iterate array elements 
for(const city of cities) {
    console.log(city);
}

// log the numbers elements using for...of and for loop 

const numbers = [ 10, 20, 30, 40, 23 ];

for(const num of numbers) {
    console.log(num);
}

for(let i = 0; i <= numbers.length - 1; i++) {
    console.log(numbers[i]);
}

let j = 0; 

while(index <= numbers.length - 1) {
    console.log(numbers[j]);
    j++;
}





