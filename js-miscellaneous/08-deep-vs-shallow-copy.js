
const groups1 = [
    'John',
    ['Alex', 'Mariia'],
    ['John', 'Jane']
];

const groups2 = [...groups1 ];

console.log(groups1);
console.log(groups2);

groups[1].pop(); // Removes Mariia

console.log(groups1);
console.log(groups2);



// Shallow copy issue wit hnested objects 
const student1 = {
    fullName: 'John Doe',
    age: 25,
    address: {
        city: 'Chicago',
        state: 'IL'
    }
};

const student2 = {
    ...student1
};

console.log(student1);
console.log(student2);

student1.address.city = 'Des Plaines';

console.log(student1);
console.log(student2);


// DEEP COPY
const numbers1 = [
    [1, 2, 3],
    [3, 4, 5]
];

const numbers2 = JSON.parse(JSON.stringify(numbers1));

console.log(numbers1);
console.log(numbers2);

numbers1[0][0] = 999;

console.log(numbers1);
console.log(numbers2);

// DEEP COPY with nested objects
const person1 = {
    fullName: 'John Doe',
    address: {
        city: 'Chicago'
    }
}

const person2 = JSON.parse(JSON.stringify(person1));

console.log(person1); // { fullName: 'John Doe', address: { city: 'Chicago' } }
console.log(person2); // { fullName: 'John Doe', address: { city: 'Chicago' } }

person1.address.city = 'Des Plaines';

console.log(person1); // { fullName: 'John Doe', address: { city: 'Des Plaines' } }
console.log(person2); // { fullName: 'John Doe', address: { city: 'Chicago' } }













