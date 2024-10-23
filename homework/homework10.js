console.log('\n----------------------Task-1----------------------');

function calculateTotalPrice1(items) {
    return (items.apple * 2.00) + (items.orange * 3.29) + (items.mango * 4.99) + (items.pineapple * 5.25);
}

console.log('\n----------------------Task-1----------------------');

console.log('\n----------------------Task-2----------------------');

function calculateTotalPrice2(items) {

    let applePrice = 2.00;
    let orangePrice = 3.29;
    let mangoPrice = 4.99;
    let pineapplePrice = 5.25;
    
    let appleTotal = Math.floor(items.Apple / 2) * applePrice * 1.5 + (items.Apple % 2) * applePrice;

    let mangoTotal = (items.Mango - Math.floor(items.Mango / 4)) * mangoPrice;

    let orangeTotal = (items.Orange || 0) * orangePrice;
    let pineappleTotal = (items.Pineapple || 0) * pineapplePrice;

    return appleTotal + orangeTotal + mangoTotal + pineappleTotal;
}

console.log('\n----------------------Task-2----------------------');

console.log('\n----------------------Task-3----------------------');

function nthWord(str, n) {
    let words = str.trim().split(/\s+/);
    return (n > words.length) ? "" : words[n - 1];
}

console.log('\n----------------------Task-3----------------------');

console.log('\n----------------------Task-4----------------------');

function isArmstrong(num) {
    let digits = String(num).split('');
    let power = digits.length;
    let sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);
    return sum === num;
}

console.log('\n----------------------Task-4----------------------');

console.log('\n----------------------Task-5----------------------');

function reverseNumber(num) {
    let reversed = 0;
    while (num > 0) {
        reversed = reversed * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    return reversed;
}

console.log('\n----------------------Task-5----------------------');

console.log('\n----------------------Task-6----------------------');

function doubleOrTriple(arr, isDouble) {
    return arr.map(num => isDouble ? num * 2 : num * 3);
}

console.log('\n----------------------Task-6----------------------');

console.log('\n----------------------Task-7----------------------');

function splitString(str, num) {
    if (str.length < num || str.length % num !== 0) {
        return "";
    }
    
    let result = "";
    for (let i = 0; i < str.length; i += num) {
        result += str.slice(i, i + num) + " ";
    }
    
    return result.trim();
}

console.log('\n----------------------Task-7----------------------');