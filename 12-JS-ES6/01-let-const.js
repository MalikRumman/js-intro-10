// let allows reassignment 
let fname = 'John';

fname = 'James'; // reassignment allowed

console.log(fname); // James 

let lname; // let allows declaration without initialization - undefined


// const MUST be intialized and cannot be reassigned
// const gravity; // ERROR - 'const' declarations must be intialized.

const pi = 3.14; // works fine

pi = 10;

console.log(pi); // ERROR - TypeError: Assignment to constant variable







