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
    arrayFromLowToHigh(58,64)
).concat(
    arrayFromLowToHigh(91, 96)
).concat(
    arrayFromLowToHigh(123,126)
);



form.addEventListener('submit', e => {
    e.preventDefault()
    numOfCharacters = numOfCharacters.value;
    special = special.checked;
    numeric = numeric.checked;
    uppercase = uppercase.checked;
    password = genereratePassword(numOfCharacters, special, numeric, uppercase);
    passwordDisplay.innerText = password;
})

function genereratePassword(numberOfCharacters, special, numeric, uppercase) {
    let charCodes = lowercaseCharCodes;
    if (uppercase) charCodes = charCodes.concat
    (uppercaseCharCodes);
    if (numeric) charCodes = charCodes.concat
    (numericCharCodes);
    if (special) charCodes = charCodes.concat
    (specialCharCodes);

    const passwordCharacters = []
    for(let i = 0; i < numOfCharacters; i++) {
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