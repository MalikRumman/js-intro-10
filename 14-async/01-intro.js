// Synchronous code
console.log('1');
console.log('2');
console.log('3');

setTimeout(() => {
    console.log('A');
}, 2000); 

setTimeout(() => {
    console.log('B');
}, 1000); 

setTimeout(() => {
    console.log('C');
}, 1500); 

// OUTPUT: 
/*
B
C
A
2 seconds
*/

setTimeout(() => {
    console.log('VISIT URL');
}, 1000);

setTimeout(() => {
    console.log('ENTER PASSWORD');
    console.log('ENTER PASSWORD');
    console.log('CLICK AGAIN');
}, 500);

setTimeout(() => {
    console.log('VALIDATE');
}, 250)

