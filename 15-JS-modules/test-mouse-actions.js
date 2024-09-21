const { MouseActions } = require('../15-JS-modules/Mouse-Actions.js');

// static methods
MouseActions.click();

// non-static methods
const ma = new MouseActions();
ma.rightClick();