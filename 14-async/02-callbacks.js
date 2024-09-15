const { Cypress } = require('../utils/Cypress');

// Asynchronous way - PROBLEM!
// Cypress.visit('www.techglobal-training.com');
// Cypress.login('TechGlobal', 'Test1234');
// Cypress.validateLoginMessage('You are logged in');

/*
PROBLEM
You are logged in validated!
Logged in with TechGlobal Test1234
www.techglobal-training.com visited!
and it takes around 1 second

EXPECTED:
www.techglobal-training.com visited!
Logged in with TechGlobal Test1234
You are logged in validated!
and it takes around 2 takes.
*/

// Using same methods with callbacks added
// Cypress.visit1('www.techglobal-training.com', () => {
//     Cypress.login1('TechGlobal', 'Test1234', () => {
//         Cypress.validateLoginMessage1();
//     });
// }) 



// Using same methods with promises added -> using then
Cypress.visit2('www.techglobal-training.com')
    .then(() => Cypress.login2('TechGlobal', 'Test1234'))
    .then(() => Cypress.validateLoginMessage2('You are logged in'));

testvalidLogin();

// ASYNC-AWAIT
async function testvalidLogin2() {
    await Cypress.visit2('www.techglobal-training.com');
    await Cypress.login2('TechGlobal', 'Test1234');
    await Cypress.validateLoginMessage2('You are logged in');
}

testvalidLogin2();
