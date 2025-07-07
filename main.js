const lengthInput = document.getElementById("lengthInput");
const upperCheck = document.getElementById("upperCheck");
const lowerCheck = document.getElementById("lowerCheck");
const numberCheck = document.getElementById("numberCheck");
const symbolCheck = document.getElementById("symbolCheck");
const generateBtn = document.getElementById("generateBtn");
const outputText = document.getElementById("outputText");
const copyBtn = document.getElementById("copyBtn");


const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+/=-.,?<>[]{};|'";

function typeText(text,element) {
    element.textContent = "";
    let i = 0;
    const interval = setInterval(() => {
        if(i < text.length) {
            element.textContent += text[i];
            i++;
        }
        else {
            clearInterval(interval);
        }
    },100);
}

generateBtn.addEventListener("click" , () => {
    let length = parseInt(lengthInput.value);
    if(isNaN(length)){
        length = 12;
    }
    if(length < 4 || length > 32) {
        outputText.textContent = "Please choose a length between 4 and 32";
        return;
    }
    let charSet = "";
    if(upperCheck.checked) {
        charSet += upperChars;
    }

    if(lowerCheck.checked) {
        charSet += lowerChars;
    }
    if(numberCheck.checked) {
        charSet += numberChars;
    }
    if(symbolCheck.checked) {
        charSet += symbolChars;
    }
    if(charSet === "") {
        outputText.textContent = "input atleast one character type.";
    }
    let password = "";
    for(let i = 0; i < length; i++ ) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }
typeText(password,outputText);


})
