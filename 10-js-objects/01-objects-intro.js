// How to create an object 

const obj1 = {}; // empty object
const obj2 = new Object(); // empty object

const person = {
    firstName: 'John',
    lastName: 'Doe',
    spouse: 'Jane Doe',
    age: 45,
    favNumber: 7,
    favCities: ['Chicago', 'Miami'],
    address: {
        street1: '123 Chicago St',
        street2: 'APT 2',
        city: 'Chicago',
        state: 'IL',
        ZIP: '12345 -1234',
        country: 'US'
    },
    jobTitle: 'Software Engineer in Test',
    likesJS: true,
    SSN: null,
    numberOfKids: 7
};


// Getting properties using either dot notaion or bracket notaion 
console.log(person.favNumber); // 7
console.log(person['favNumber']); // 7

// Updating properties 
person.jobTitle = 'SDET Lead';
person['jobTitle'] = 'SDET Lead';

console.log(person.jobTitle); // 'SDET Lead'

let secondaFavCity = person.favCities[1]; // 'Miami
let zipCode = person.address.ZIP;  // 12345 -1234

console.log(secondaFavCity, zipCode);

//Adding a new property
person.favprogrammingLanguage = 'Typescript';
person.favColor = 'Yellow';
person.paymentDetails = [
    {
        creditCardNumber: 123456547,
        expDate: '11/11/2029',
        securityCode: 123,
        address: {
            street1: '123 Chicago St',
            street2: 'Apt 2',
            city: 'Chicago',
            state: 'IL',
            ZIP: '12345 - 1234',
            country: 'US'
        }
    },
    {
        accountNumber: 123456789,
        routingNumber: 123456789
    }
];

// get the security code 
console.log(person.paymentDue[0].securityCode);

console.log(person);

// deleting some properties from the object 
delete person.address;
delete person['paymentDetails'];

console.log(person); 








