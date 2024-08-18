let str = 'I like apple and pineapple';

// repalce apple with orange
let strR1 = str.replace('apple', 'orange');

console.log(strR1); // 'I like orange and pineapple
console.log(str); // 'I like apple and pineapple'


// replace all apple occurrences with orange
let strR2 = str.replaceAll('apple', 'orange');

console.log(strR2); // 'I like orange and pineorange'


/*
replace()
TASK: used to replace an occurrence OF a substring within the original string
RETURN: returns a new string with the repalced value
ARGUMENTS: takes two argument; target(substring to be replacee) and source: is the new value
CHANGE ORIGINAL VALUE; does not change the original value
STATIC or NON STATIC: non-static
*/

/*
replaceall()
TASK: used to replace all occurrences OF a substring within the original string
RETURN: returns a new string with the repalced value
ARGUMENTS: takes two argument; target(substring to be replacee) and source: is the new value
CHANGE ORIGINAL VALUE; does not change the original value
STATIC or NON STATIC: non-static
*/

console.log('Hello everyone!'.replaceAll('e', 'a').replaceAll('o', 'U')); // 'HallU avaryUna!'















































