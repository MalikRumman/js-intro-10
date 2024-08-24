const favMovies = [ 'Harry Potter', 'Godfather', 'Lord of the Rings' ];

// let myFav1 = favMovies[0];
// let myFav2 = favMovies[1];
// let myFav3 = favMovies[2];

let [ myFav1, , myFav3 ] = favMovies;

console.log(myFav1); // Harry Potterer
console.log(myFav3); // Lord of the Rings


const numbers = [ -3, 10, 0, 100, 200 ];

// ten, zero, twoHundred 

const [ , ten, zero, , twoHundred ] = numbers;

console.log(ten);
console.log(zero);
console.log(twoHundred);

let [ , num1, num2, , num3 ] = num123; // maliks code
console.log(num123); // maliks code

// forming an array from varaibles
let var1 = true;
let var2 = 'Hello';
let var3 = 5;

const mixArray = [ var1, var2, var3 ];
console.log(mixArray);