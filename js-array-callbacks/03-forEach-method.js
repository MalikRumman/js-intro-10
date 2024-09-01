const names = [ 'James', 'John', 'Alex', 'Mariia' ];

console.log('\n----------iteration of arrays with for...of loop----------\n');

for(const name of names) {
    console.log(name);
}


console.log('\n----------iteration of arrays with for loop----------\n');

for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
}


console.log('\n----------iteration of arrays with forEach loop----------\n');


names.forEach((x) => console.log(x));

// Print each name uppercased

names.forEach((name) => console.log(name.toUpperCase()));


// Print each names first letter and last letter together Js, Jn, etc

names.forEach((name) => console.log(name[0] + name[name.length - 1]));

// print the names with only 4 letters

names.forEach((name) => {
    if (name.length === 4) {
        console.log(name);
    }
});

// Store the length of each name in a diff array

const nameLengths = []; 

names.forEach((name) => {
    nameLengths.push(name.length);
});

console.log(nameLengths);








