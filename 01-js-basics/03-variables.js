// var-let-const keywords are used for variables
// 1. let allows us to change the value of the variable at any points of the program
let firstname = 'John';

console.log(firstname); // 'John'

// Re-assign a new value to a variable
firstname = 'James';

console.log(firstname); // 'James'

// 2. const stands for constant
const pi = 3.14;

console.log(pi); // 3.14


// 3. var is the old let (before 2015)
var lastName = 'Doe';

lastName = 'Smith';

console.log(lastName); // 'Smith'


// Another difference bt let and const
let City = 'Chicago'; // variable initialization  = decalre a variable and assign a value

let country; // declaring a variable or variable declaration
country = 'US'; // value assignment to a variable


// const firstMonth; // Not allowed, constant must always be initialized
// firstMonth = 'January'; 

const firstMonth = 'January'; // constants MUST be initialized

let numberOfStudentsInBatch10; // undefined
console.log(numberOfStudentsInBatch10); // 'undefined'

numberOfStudentsInBatch10 = 20;
console.log(numberOfStudentsInBatch10); // 20































