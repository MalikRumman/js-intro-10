/*
STUDENT PROTOTYPE - Properties - HAS
fname
lname
age
program
address
phone
SSN

STUDENT PROTOTYPE - Properties - DOES
study()
attendClass()
takeExam()


CAR PROTOTYPE - properties
make
model
year
price
color
engineSize


CAR PROTOTYPE - functions 
drive()
turn()
brake()
accelarate()
stop()


BANK CUSTOMER - properties
fname
lname
address
phone
SSN
accountNumber
credentials



BANK CUSTOMER - functions
transder()
deposit()
openAccount()
closeAccount()
apply()
updateInfo()
*/

// NOT EFFIECIENT TO CREATE EACH OBJECT SEPERATELY - We should create a template/blueprint/prototype and create many objects 
/*
const student1 = {
    fname: 'John',
    lname: 'Doe',
    age: 25,
    info: function () {
        console.log(`Student info = Fullname: ${fanme} ${lname}, Age: ${age}`);
    }
}

const student2 = {
    fname: 'Malik',
    lname: 'Rumman',
    age: 20,
    info: function () {
        console.log(`Student info = Fullname: ${fname} ${lname}, Age: ${age}`);
    }
}

const student3 = {
    fname: 'Alex',
    lname: 'Smith',
    age: 80,
    info: function () {
        console.log(`Student info = Fullname: ${fname} ${lname}, Age: ${age}`);
    }
}
*/

// BEFORE ES6 - Prototypes
/*
// 1. Create a Student constructor
function Student(fname, lname, age) {
    this.fname = fname;
    this.lname = lname; 
    this.age = age;
}

// 2. You add prototype functions
Student.prototype.info = function () {
    console.log(`Student info = Fullname: ${this.fname} ${this.lname}, Age: ${this.age}`);
}

const student1 = new Student('John', 'Doe', 25);
const student2 = new Student('Alina', 'Hegyi', 36);
const student3 = new Student('Adela', 'Mucea', 37);

console.log(student1);
console.log(student2);
console.log(student3);

student1.info();
student2.info();
student3.info();
*/

// AFTER ES6 - Classes
// 1. Create a class called Student

class Student {
    // 2. Create a constrcutor 
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname; 
        this.age = age;
    }

    // 3. Add functions 
    info() {
        console.log(`Student info = Fullname: ${this.fname} ${this.lname}, Age: ${this.age}`);
    }
}

const student1 = new Student('John', 'Doe', 25);
const student2 = new Student('Alina', 'Hegyi', 36);
const student3 = new Student('Adela', 'Mucea', 37);

console.log(student1);
console.log(student2);
console.log(student3);

student1.info();
student2.info();
student3.info();

const numbers = [ 1, 2, 3 ];

numbers.names = [ 'John', 'Alex', 'Mariia' ]; 

Array.prototype.print = function () {
    console.log(this);
}

Array.prototype.middle = function () {
    return this[Math.floor(this.length / 2)];
}

numbers.print();
names.print();

console.log(numbers.middle());
console.log(names.middle());
















