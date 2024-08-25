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








