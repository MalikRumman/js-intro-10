let items = 'Apples, Oranges, Bananas, Eggs, Milk';

console.log(items.split(','));
console.log(items.split(' '));
console.log(items.split(', '));


let sent = 'I like JavaScript';

console.log(sent.split(' ')); //
console.log(sent.split('like')); //


/*
10 | 20 | 30 | 40 | 50

*/

console.log('10 | 20 | 30 | 40 | 50'.split(' | ')); // 






/*
Assume you are given string having some words
Count how many words this string has

'I like JavaScript'                 -> 3
'Me and you will be successful'     -> 6

*/

let str = 'Me and you will be successful';

console.log(str.split(' ', 3)); // 
console.log(str.split(' ').length); // 


let smth = 'Hello';

console.log(smth.split('')); // [ 'H', 'e', 'l', 'l', 'o']

let result = smth.split('');

console.log(typeof result); // 'object'

console.log(Array.isArray(smth)); // true

/*
TASK: used to split the string into array elements with the given seperator
RETURN: returns an array of elements
ARGUMENTS: takes a string argument as seperator, an optional limit argument
CHANGE ORIGINAL VALUE; does not change the original value
STATIC or NON STATIC: non-static
*/



















































