console.log(false || 'Hello'); // 'Hello'

console.log(false ?? 'Hello'); // false

console.log(null ?? 'Hello'); // 'Hello'
console.log(undefined ?? 'Hello'); // 'Hello'


// ___ ?? ___      -> first expression is null or undefined it gets the second

