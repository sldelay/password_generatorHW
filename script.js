let numOfCharacters = document.getElementById('numOfCharacters');
let special = document.getElementById('special');
let numeric = document.getElementById('numeric');
let uppercase = document.getElementById('uppercase');
let lowercase = document.getElementById('lowercase');
const form = document.getElementById('passwordGeneratorForm');
const passwordDisplay = document.getElementById('passwordDisplay');

const uppercaseCharCodes = arrayFromLowToHigh(65, 90);
const lowercaseCharCodes = arrayFromLowToHigh(97, 122);
const numericCharCodes = arrayFromLowToHigh(48, 57);
const specialCharCodes = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
).concat(
    arrayFromLowToHigh(91, 96)
).concat(
    arrayFromLowToHigh(123, 126)
);

form.addEventListener('submit', event => {
    event.preventDefault()
    let numOfCharactersval = numOfCharacters.value;
    let specialval = special.checked;
    let numericval = numeric.checked;
    let uppercaseval = uppercase.checked;
    let lowercaseval = lowercase.checked;
    let password = genereratePassword(numOfCharactersval, specialval, numericval, uppercaseval, lowercaseval);
    passwordDisplay.innerText = password;
})


function genereratePassword(numOfCharacters, specialval, numericval, uppercaseval, lowercaseval) {
    let charCodes = [];
    if (lowercaseval) charCodes.push(lowercaseCharCodes); 
    if (uppercaseval) charCodes.push(uppercaseCharCodes);
    if (numericval) charCodes.push(numericCharCodes);
    if (specialval) charCodes.push(specialCharCodes);

    const passwordCharacters = []
    for (let i = 0; i < numOfCharacters; i++) {
        const codeArray = charCodes[Math.floor(Math.random() * charCodes.length)];
        const characterCode = codeArray[Math.floor(Math.random() * codeArray.length)];
        passwordCharacters.push(String.fromCharCode(characterCode));
    }

    return passwordCharacters.join('');
}

function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i);
    }
    return array;
}