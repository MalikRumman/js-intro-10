let num = 5;

console.log(num === 5); // for task one on the homework I couldv'e done this bc it was just a bolean
// Remember during interviews they'll take off points if you do a longer version of the code if theres a shorter way to do it

if(num === 5) console.log('This number is 5');
else console.log('this number is not 5');

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

// TASK 10 from hw 3

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
console.log(swapFirstLastWord("Hello   "));


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

// TASK 9

// check canvas
