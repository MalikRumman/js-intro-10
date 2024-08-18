/*
Requirement:
Write a program that extracts expected values from a given String using JS String functions.

"I like apples and oranges"                         -> "APPLE"
"Java is not a scripting programming language"      -> "JavaScript"
"I don't like books"                                -> "I like books"
*/

let sentence1 = "I like apples and oranges" ; // 'APPLE'
let sentence2 = "Java is not a scripting programming language"; // 'JavaScript'
let sentence3 = "I don't like books"; // 'I like books'

console.log(sentence1.slice(7, 12).toUpperCase()); // 'APPLE'
console.log(sentence2.slice(0, 4) + sentence2[14].toUpperCase() + sentence2.slice(15, 20)); // 'JavaScript''
console.log(sentence3.replace(" don't", '')); // 'I like books'

/*
Requirement:
Assume that you are given a String of any length. 
Find:
-The length of the String
-First char in the String
-Last char in the String
-Check if the String contains any vowel letters     
    -if it has any vowel, then print true
    -Else, print false
    Vowels = a, e, i, u, o, A, E, I, U, O

Test Data 1:
let s1 = "JavaScript";

Expected Result 1:
The length is = 10
The first char is = J
The last char is = t
true


Test Data 2:
let s1 = "";

Expected Result 2:
The length is = 0
The first char is = undefined
The last char is = undefined
false
*/

let s1 = "Hello";

console.log(`Data: ${s1}`)
console.log(`The length is = ${s1.length}`); // The length is = 5
console.log(`The first char is = ${s1[0]}`); // The first char is = H
console.log(`The last char is = ${s1.at(-1)}`); // The last char is = o

s1 = s1.toLowerCase();

console.log(s1.includes('a') || s1.includes('e') || s1.includes('i') || s1.includes('o') || s1.includes('u'));
// false || false || true || false || false (comes out treue bc if using OR one true makes everythign true)

let s2 = "JavaScript";

console.log('Expected Result 1:'); // Expected Result 1:
console.log(`The length is = ${s2.length}`); // The length is = 10
console.log(`The first char is = ${s2[0]}`); // The first char is = J
console.log(`The last char is = ${s2.at(-1)}`); // The last char is = t

s2 = s2.toLowerCase();

console.log(s2.includes('a') || s2.includes('e') || s2.includes('i') || s2.includes('o') || s2.includes('u'));
// true || false || true || false || false || false

let s3 = "";

console.log('Expected Result 2:'); // Expected Result 2:
console.log(`The length is = ${s3.length}`); // The length is = 0
console.log(`The first char is = ${s3[0]}`); // The first char is = undefined
console.log(`The last char is = ${s3.at(-1)}`); // The last char is = undefined

s3 = s3.toLowerCase();

console.log(s3.includes('a') || s3.includes('e') || s3.includes('i') || s3.includes('o') || s3.includes('u'));

/*
Requirement:
Assume that you are given a String of any odd length. 
Find the middle character for the given String. 

Test Data 1:
let s2 = "x";

Expected Result 1:
"x"


Test Data 2:
let s2 = "abc";

Expected Result 2:
"b"


Test Data 3:
let s2 = "civic";

Expected Result 3:
"v"

*/

let s4 = "x";

console.log(`Expected Result: `);
console.log(s4[(s4.length - 1) / 2]);

let s5 = "abc";

console.log(`Expected Result: `);
console.log(s5[(s5.length - 1) / 2]);

let s6 = "civic";

console.log(`Expected Result: `);
console.log(s6[(s6.length - 1) / 2]);

/*
Requirement:
Assume that you are given a String of any even length including empty. 
Find the middle 2 characters for the given String. 

Test Data 1:
let s3 = "";

Expected Result 1:
""


Test Data 2:
let s3 = "abcd";

Expected Result 2:
"bc"


Test Data 3:
let s3 = "JavaScript";

Expected Result 3:
"Sc"
*/

let s7 = "TypeScript";

console.log(s7[s7.length / 2 - 1] + s7[s7.length / 2]);


/*
TASK 05
Requirement:
Write a program that divides the given String. Assume the length of the String will at least 
be 4.
-Find and print the first two characters
-Find and print the last two characters 
-Find and print all the middle characters other than first and last 2 characters


Test Data 1:
let s4 = "abcd";

Expected Result 1:
The first 2 characters are = ab
The last 2 characters are = cd
The other characters are = 


Test Data 2:
let s4 = "JavaScript";

Expected Result 2:
The first 2 characters are = Ja
The last 2 characters are = pt
The other characters  are = vaScri
*/

let s8 = "Computer";

console.log(`The first 2 characters are = ${s8.slice(0, 2)}`);
console.log(`The last 2 characters are = ${s8.slice(s8.length -2)}`);
console.log(`The other characters  are = ${s8.slice(2, s8.length -2)}`);


let s9 = "JavaScript is nice to learn";

let firstWord = s9.slice(0, s9.indexOf(' '));
let lastWord = s9.slice(s9.lastIndexOf(' ') + 1);
let mid = s9.slice(s9.indexOf(' ') + 1, s9.lastIndexOf(' '));

console.log(lastWord + ' ' + mid + ' ' + firstWord);
console.log(`${lastWord} ${mid} ${firstWord}`);

/*
TASK 10
Requirement:
Write a program that counts the number of words in a given sentence as a String. 
Assume you will not be given redundant whitespaces and at least one word.

Test Data 1:
let s9 = "Good morning";

Expected Result 1:
2


Test Data 2:
let s9 = "Hello";

Expected Result 2:
1


Test Data 3:
let s9 = "I like Apple";

Expected Result 3:
3



Test Data 4:
let s9 = "JavaScript is nice to learn";

Expected Result 4:
5
*/

let s10 = "Hello";

let sapces = s10.split(' ') - 1;

let words = sapces + 1;

console.log(words); // my work

let str10 = 'I like apple';

console.log(str10.length - str10.replaceAll(' ', '') + 1);



/*
Requirement:
Assume that you are given a String that has at least 2 characters. 
If first 2 and last 2 characters are same, then print true. Otherwise, print false.

Test Data 1:
let s5 = "ab";;

Expected Result 1:
true

Test Data 2:
let s5 = "abcd";

Expected Result 2:
false

Test Data 3:
let s5 = "12ab12";;

Expected Result 1:
true

Test Data 4:
let s5 = "JavaScript";

Expected Result 4:
false
*/

let s_1 = "ab";
console.log(s_1.slice(0, 2) === s_1.slice(-2)); 

let s_2 = "abcd";
console.log(s_2.slice(0, 2) === s_2.slice(-2)); 

let s_3 = "12ab12";
console.log(s_3.slice(0, 2) === s_3.slice(-2)); 

let s_4 = "JavaScript";
console.log(s_4.slice(0, 2) === s_4.slice(-2)); 

/*
Requirement:
Write a program that gets rid of first and last characters of given two String values. 
Then, add these two String values to each other and print the result. 
Test Data 2:
let s61 = "1234";
let s62 = "Green";
Expected Result 2:
23ree
Test Data 1:
let s61 = "orange";
let s62 = "6";
Expected Result 1:
rang
Test Data 3:
let s61 = "123456";
let s62 = "Blue";
Expected Result 3:
2345lu
Test Data 4:
let s61 = "Yellow";
let s62 = "Red";
Expected Result 4:
*/

let s61 = "Yellow";
let s62 = "Red";

console.log(s61.slice(1, -1) + s62.slice(1, -1));

/*
Requirement:
Write a program that checks if a given String starts and ends with xx. 
-If given String starts and ends with xx, then print true. 
-Otherwise, print false
Test Data 2:
let s7 = "red";
Expected Result 2:
false
Test Data 1:
let s7 = "";
Expected Result 1:
false
Test Data 3:
let s7 = "green";
Expected Result 3:
false
Test Data 4:
let s7 = "xxbluexx";
Expected Result 4:
true
*/

let s_7 = "xxBluexx";

console.log(s_7.startsWith('xx') && s_7.endsWith('xx'));