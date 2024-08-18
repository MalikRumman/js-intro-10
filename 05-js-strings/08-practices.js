/*
Assume that you are given a string of any length

Get the last 5 characters from it

Morning     -> rning
Saturday    -> urday
Hello       -> Hello
*/

let str1 = 'Morning';

console.log(str1.slice(-5)); // 'rning'
console.log(str1.slice(str1.length -5,)); // 'rning'

let str2 = 'Saturday';

console.log(str2.slice(-5)); // 'urday'
console.log(str2.slice(str2.length -5,)); // 'urday'

let str3 = 'Hello';

console.log(str3.slice(-5)); // 'Hello'
console.log(str3.slice(str3.length -5,)); // 'Hello'

/*
Assume that you are given a string of any length

Get the first 3 characters and the last 3 characters
Tehn, concatenate these in a new string

JavaScript      -> Javipt
Hello           -> Helllo
123             -> 123123
*/

let str4 = 'JavaScript';

console.log(str4.slice(0, 3) + str4.slice(-3));

let str5 = 'Hello';

console.log(str5.slice(0, 3) + str5.slice(-3));

let str6 = '123';

console.log(str6.slice(0, 3) + str6.slice(-3));

