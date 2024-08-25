

const names = [ 'John', 'Jane', 'Alex', 'Max', 'james' ];

// Log each name

console.log('\n-----------------Task-1 For...of loop-----------------\n');

for(const name of names) {
    console.log(name);
}

console.log('\n-----------------Task-1 for loop-----------------\n');

for(let i = 0; i <= names.length - 1; i++) {
    console.log(names[i]);
}

// Count how many names starts with j or J -> 3

console.log('\n-----------------Task-2 For if loop-----------------\n');

let count = 0;

for (let i = 0; i <= names.length - 1; i++) {
    if (names[i][0] === 'j' || names[i][0] === 'J') {
        count++;
    }
}

console.log(count);

console.log('\n-----------------Task-2 For...of loop-----------------\n');

let count1 = 0;

for (let name of names) {
    if (name[0] === 'j' || name[0] === 'J') {
        count1++;
    }
}

console.log(count1);

console.log('\n-----------------Task-3 for...of loop-----------------\n');

// count how many names have length of 4

let count2 = 0;

for (let name of names) {
    if (name.length === 4) {
        count2++;
    }
}

console.log(count2);

console.log('\n-----------------Task-3 for loop-----------------\n');

let count_2 = 0;

for (let i = 0; i <= names.length - 1; i++) {
    if (names[i].length === 4) {
        count_2++;
    }
}


console.log(count_2);

