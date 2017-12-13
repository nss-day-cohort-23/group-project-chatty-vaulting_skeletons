"use strict";

let printUserText = (message) => {
    let userText = document.getElementById("userMessage").value;
    document.getElementById("outputBox").innerHTML += `${userText}<br><br>`;
};

function clearUserText () {
    let userText = document.getElementById("userMessage");
    userText.value = "";
}

let userArr = [];

module.exports.pressingEnter = () => {
    let userText = document.getElementById("userMessage");
    userText.addEventListener('keypress', function (e) {
    var key = e.keyCode;
    if (key === 13) {
        // console.log("enter key working");
        printUserText();
        clearUserText();
    }
    });
};


// ------------------------------------------DARK / LIGHT Themes-------------------------------------------------


var darkMode = document.getElementById("fucking-better");

function upsideDown() {
    darkMode.classList.toggle("light");
    darkMode.classList.toggle("dark");
}

document.getElementById("dark").addEventListener("click", upsideDown);


// ------------------------------------------TEXT-SIZE-------------------------------------------------

var largeMode = document.getElementById("outputBox");

function largeText() {
    largeMode.classList.toggle("largeText");
    largeMode.classList.toggle("smallText");
}

document.getElementById("large").addEventListener("click", largeText);

