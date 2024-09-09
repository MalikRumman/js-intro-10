// function declaration 
function sum(a, b) {
    return a + b;
}

// arrow function
const sum = (a, b) => a + b 

// function declaration
const factorial = (num) => {
    if(num === 0 || num === 1) return 1;
    else if(num < 0) throw Error('Negative numbers dected');

    let result = 1;

    for(let i = 2; i <= num; i++) {
        result *= i;
    }
    
    return result;
}








