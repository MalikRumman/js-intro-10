const { getRandomNumber } = require('../utils/MathHelper.js')

const { characterHelper } = require('../utils/characterHelper.js');


console.log('\n----------------------Task-1----------------------');

/*
Requirement:
Write a  program that generates 3 random numbers 
between 1 to 100 (1 and 100 are included)
Print true if the average of the random numbers is 
greater or equals 50. 
Print false if the average of the random numbers is less 
than 50.
Test data 1:
20, 70, 25
Expected Output 1: 
false
Test data 2:
65, 80, 90
Expected Output 2: 
true
*/

let randomNumber1 = getRandomNumber(1, 100);
let randomNumber2 = getRandomNumber(1, 100);
let randomNumber3 = getRandomNumber(1, 100);

console.log('Test Data 1:', randomNumber1, randomNumber2, randomNumber3);

if(randomNumber1 + randomNumber2 + randomNumber3 / 3 >= 50) {
    console.log('true');
}
else {
    console.log('false');
}


console.log('\n----------------------Task-1----------------------');

console.log('\n----------------------Task-2----------------------');

/*
Requirement:
Write a  program that generates 3 random numbers 
between 1 to 3 (1 and 3 are included)
-If all numbers are different, then print “NO MATCH”
-If any of those 2 numbers are equal, then print 
“DOUBLE MATCH”
-If all 3 numbers are equal, then print “TRIPLE MATCH”
Test data 1:
3, 3, 3
Expected Output 1: 
TRIPLE MATCH
Test data 2:
1, 3, 3
Expected Output 2: 
DOUBLE MATCH
Test data 3:
1, 2, 3
Expected Output 3: 
NO MATCH
Test data 4:
1, 1, 2
Expected Output 4: 
DOUBLE MATCH
*/

let r1 = getRandomNumber(1, 3);
let r2 = getRandomNumber(1, 3);
let r3 = getRandomNumber(1, 3);

console.log('Test data 1:', r1, r2, r3);
if(r1 === r2 && r1 === r3) {
    console.log('TRIPLE MATCH');
}
else if(r1 === r2 || r1 === r3 || r2 === r3) {
    console.log('DOUBLE MATCH');
}
else {
    console.log('NO MATCH'); // 
}

console.log('\n----------------------Task-2----------------------');

console.log('\n----------------------Task-3----------------------');

/*
Requirement:
Write a function named as hasA() which takes a string 
word as an argument and returns true if given string 
has a character "a" or "A", and false otherwise when 
invoked.
NOTE: Assume you will not be given an empty word.
Examples:
hasA("Tech")  -> false
hasA("Global")  -> true
hasA("")  -> false
hasA("Apple")  -> true
*/

function hasA(string) {
    if(string.indexOf('a') !== -1 || string.indexOf('A') !== -1) return true;
    return false;
}

console.log(hasA('Tech')); // false
console.log(hasA('Global')); // true
console.log(hasA('')); // false
console.log(hasA('Apple')); // true

console.log('\n----------------------Task-3----------------------');

console.log('\n----------------------Task-4----------------------');

/*
Requirement:
Write a function named as doubleOrTripleWord() 
which takes a string word as an argument and returns 
the given word back tripled if the string length is even 
or doubled if the string length is odd when invoked.
Examples:
doubleOrTripleWord("Tech")  -> "TechTechTech"
doubleOrTripleWord("Apple")  -> "AppleApple”
doubleOrTripleWord("")  -> ""
doubleOrTripleWord(" ")  -> " "
doubleOrTripleWord("1")  -> "11"
doubleOrTripleWord("22")  -> "222222"
*/

function doubleOrTripleWord(string) {
    if(string.length % 2 === 0)
        return string.repeat(3);

    else {
        return string.repeat(2);
    }
}

console.log(doubleOrTripleWord("Tech")); // "TechTechTech"
console.log(doubleOrTripleWord("Apple")); // "AppleApple"
console.log(doubleOrTripleWord("")); // ""
console.log(doubleOrTripleWord(" ")); // ""
console.log(doubleOrTripleWord("1")); // "11"
console.log(doubleOrTripleWord("22")); // "222222"

console.log('\n----------------------Task-4----------------------');

console.log('\n----------------------Task-5----------------------');

/*
Requirement:
Write a function named as firstWord() which takes a 
string word as an argument and returns the first word 
from the given string when invoked.
NOTE: Return empty string if the given string does not 
have any word.
Examples:
firstWord("Hello World")  -> "Hello"
firstWord("I like JavaScript")  -> "I"
firstWord("Hello")  -> "Hello"
firstWord("")  -> ""
firstWord("    ")  -> ""
*/

function firstword(string) {
    string = string.trim() // removes spaces

    if(string.length === 0) {
        return ""; // returns empty if no words
    }
    else {
        return string.split(" ")[0] // splits into array and takes the first word
    }
}

console.log(firstword("Hello World")); // "Hello"
console.log(firstword("I like JavaScript")); // "I"
console.log(firstword("Hello")); // "Hello"
console.log(firstword("")); // ""
console.log(firstword("  ")); // ""

console.log('\n----------------------Task-5----------------------');

console.log('\n----------------------Task-6----------------------');

/*
Requirement:
Write a function named as lastWord() which takes a 
string word as an argument and returns the last word 
from the given string when invoked.
NOTE: Return empty string if the given string does not 
have any word.
Examples:
lastWord("Hello World")  -> "World"
lastWord("I like JavaScript")  -> "JavaScript”
lastWord("Hello")  -> "Hello"
lastWord("")  -> ""
lastWord("    ")  -> ""
*/

function lastWord(string) {
    string = string.trim() // removes spaces

    if(string.length === 0) {
        return ""; // if no words, returns empty
    }
    else {
        string = string.split(" ") // splits into an array
        return string[string.length - 1] // returns the last word
    }
}

console.log(lastWord("Hello World")); // "World"
console.log(lastWord("I like JavaScript")); // "JavaScript"
console.log(lastWord("Hello")); // "Hello"
console.log(lastWord("")); // ""
console.log(lastWord("   ")); // ""

console.log('\n----------------------Task-6----------------------');

console.log('\n----------------------Task-7----------------------');

/*
Requirement: 
Write a function named as firstlastWord() which takes 
a string word as an argument and returns the first and 
last words from the given string when invoked.
NOTE: Return empty string if the given string does not 
have any word.
Examples:
firstLastWord("Hello World")  -> "HelloWorld"
firstLastWord("I like JavaScript")  -> "IJavaScript”
firstLastWord("Hello")  -> "HelloHello"
firstLastWord("")  -> ""
firstLastWord("    ")  -> ""
*/

function firstlastWord(string) {
    string = string.trim()

    if(string.length === 0) {
        return ""; // returns empty if no words
    }
    else {
        return string.split(" ")[0], string.length -1;
    }
}

console.log(firstlastWord("Hello World"));
console.log(firstlastWord("I like JavaScript"));
console.log(firstlastWord("Hello"));
console.log(firstlastWord(""));
console.log(firstlastWord("   "));

console.log('\n----------------------Task-7----------------------');

console.log('\n----------------------Task-8----------------------');

/*
Requirement:
Write a function named as startVowel() which takes a 
string word as an argument and returns true if given 
string starts with a vowel, and false otherwise when 
invoked.
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 
Examples:
startVowel("Hello")  -> false
startVowel("Apple") -> true
startVowel("orange")  -> true
startVowel("")  -> false
startVowel("    ")  -> false
startVowel("123")  -> false
*/

function startVowel(string) {
    return characterHelper.isVowel(string);
}

console.log(startVowel("Hello"));
console.log(startVowel("Apple"));
console.log(startVowel("orange"));
console.log(startVowel(""));
console.log(startVowel("123"));

console.log('\n----------------------Task-8----------------------');

console.log('\n----------------------Task-9----------------------');

/*
Requirement: 
Write a function named as swap4() which takes a 
string word as an argument and returns the string back 
with its first and last 4 characters swapped when 
invoked.
NOTE: Return empty string if the given string does not 
have 8 or more characters.
Examples:
swap4("abc")  -> ""
swap4("JavaScript") -> "riptScJava"
swap4("TechGlobal")  -> "obalGlTech"
swap4("")  -> ""
swap4("    ")  -> ""
swap4("Apple")  -> ""
*/

function swap4(string) {
    if (string.length < 8)
        return string.slice(-4) + string.slice(4, -4) + string.slice(0, 4);
    else 
        return ""
}

console.log(swap4("abc"));
console.log(swap4("JavaScript"));
console.log(swap4("TechGlobal"));
console.log(swap4(""));
console.log(swap4("   "));
console.log(swap4("Apple"));

console.log('\n----------------------Task-9----------------------');

console.log('\n----------------------Task-10----------------------');

/*
Requirement: 
Write a function named as swapFirstLastWord() 
which takes a string word as an argument and returns 
the string back with its first and last words swapped 
when invoked.
NOTE: Return empty string if the given string does not 
have 2 or more words.
Examples:
swapFirstLastWord("Hello World")  -> "World 
Hello"
swapFirstLastWord("I like JavaScript") -> "JavaScript like 
I"
swapFirstLastWord("foo bar foo bar")  -> "bar bar foo 
foo"
swapFirstLastWord("")  -> ""
swapFirstLastWord("    ")  -> ""
swapFirstLastWord("Hello")  -> ""
swapFirstLastWord("Hello   ")  -> ""
*/

function swapFirstLastWord(str) {
    str = str.trim()


    if(str.includes(' ')) {
        let firstWord = str.slice(0, str.indexOf(' '));
        let lastWord = str.slice(str.lastIndexOf(' ') + 1);
        let middle = str.slice(str.indexOf(' '), str.lastIndexOf(' ') + 1);
        return lastWord + middle + firstWord
    }

    else return ""
}

console.log(swapFirstLastWord("Hello"));
console.log(swapFirstLastWord("I like JavaScript"));


console.log('\n----------------------Task-10----------------------');