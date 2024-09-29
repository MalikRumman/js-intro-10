console.log('This is js file');

// test/qa, dev, prod,(no error)

// client, server


// window
console.log('window', window); // window in client environment is an object 
console.log(typeof window); // object


// In server side window is undefined 

/*
 Alert
*/

// alert('Hi');
// const alertAns = alert('How are you?');
// console.log(alertAns); // undefined

/*
 Prompt
*/

// const ans = prompt('How are you today?')
// console.log(ans); // string, null, empty string

/**
 *  Confirm
 * */ 

// const confrimAns = confirm('Are you ready to enter?');
// console.log(confrimAns); // false or true



/*
 innerHeight and innerWidth
*/

console.log(innerHeight); // number
console.log(innerWidth); // number 

/*
 localStorage
 - setItem()
 - getItem()
*/

localStorage.setItem('username', 'tg20');
const username = localStorage.getItem('username');
console.log(username);

localStorage.removeItem('username');

localStorage.setItem('username2', 'tg2020');
localStorage.setItem('usnername3', 'tg202020');

localStorage.clear();
