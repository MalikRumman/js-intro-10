function isDigit(char) {
    let asciiChar = char.charCodeAt(0);
    return 48 <= asciiChar && asciiChar <= 57;
}


function isSpace(char) {
    return char === ' ';
}


function isUppercase(char) {
    let asciiChar = char.charCodeAt(0);
    return 65 <= asciiChar && asciiChar <= 90;
}


function isLowerCase(char) {
    let asciiChar = char.charCodeAt(0);
    return 97 <= asciiChar && asciiChar <= 122;
}

function isLetter(char) {
    let asciiChar = charCodeAt(0);
    return (asciiChar >= 65 && asciiChar <= 90) || (asciiChar >= 97 && asciiChar <= 122);
}


function isLetterOrDigit(char) {
    return isLetter(char) || isDigit(char);
}

function isSpecial(char) {
    return !(isDigit(char) || isLetter(char) || isSpace(char));
}

function isVowel(char) {
    return 'aeiouAEIOU'.includes(char);
}

const characterHelper = {
    isDigit,
    isLowerCase,
    isUppercase,
    isLetter,
    isLetterOrDigit,
    isSpace,
    isVowel,
    isSpecial
};

module.exports.characterHelper = characterHelper;