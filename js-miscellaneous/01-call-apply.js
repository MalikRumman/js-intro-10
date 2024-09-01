/*
this keyword
*/

const person =  {
    fname: 'John',
    lName: 'Doe',
    fullname: function ()  {
        console.log(`The fullname is ${fname} ${lName}`);
    }
}

person.fullname(); // The fullname is John Doe.

const student = {
    fname: 'Alex',
    lName: 'Smith',
}

student.fullname.call(student);


// Borrowing a function for an object
function  hi(str) {
    console.log(`Hi, ${str}!`);
}

const instructor = {
    name: 'John Doe'
}

hi('Data'); // Hi, Data!

hi.call(instructor, instructor.name);
























