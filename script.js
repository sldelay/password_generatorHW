let numOfCharacters = document.getElementById('numOfCharacters');
let special = document.getElementById('special');
let numeric = document.getElementById('numeric');
let uppercase = document.getElementById('uppercase');
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

console.log(numOfCharacters)

form.addEventListener('submit', event => {
    event.preventDefault()
    let numOfCharactersval = numOfCharacters.value;
    let specialval = special.checked;
    let numericval = numeric.checked;
    let uppercaseval = uppercase.checked;
    let password = genereratePassword(numOfCharactersval, specialval, numericval, uppercaseval);
    passwordDisplay.innerText = password;
})

function genereratePassword(numOfCharacters, specialval, numericval, uppercaseval) {
    let charCodes = lowercaseCharCodes;
    if (uppercaseval) charCodes = charCodes.concat
        (uppercaseCharCodes);
    if (numericval) charCodes = charCodes.concat
        (numericCharCodes);
    if (specialval) charCodes = charCodes.concat
        (specialCharCodes);

    const passwordCharacters = []
    for (let i = 0; i < numOfCharacters; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
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