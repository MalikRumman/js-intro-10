const batch10 = {
    program: 'SDET',
    numberOfStudents: 15,
    durationMonth: 6
};

const allKeys = Object.keys(batch10); // [ 'program', 'numberOfStudents', 'durationMonth' ]
const allValues = Object.values(batch10); // [ 'SDET', 15, 6 ]
const allEntries = Object.entries(batch10); // [ ['Program', 'SDET'], [ 'numberOfStudents', 15], [ 'durationMonth', 16] ]

console.log(allKeys);
console.log(allValues);
console.log(allEntries);


for(const key of Object.keys(batch10)) {
    console.log(key);
}

for(const value of Object.values(batch10)) {
    console.log(value);
}

for(const entry of Object.entries(batch10)) {
    console.log(entry);
}








