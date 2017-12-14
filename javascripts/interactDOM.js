"use strict";
let dom = require("./outputDOM");
let printUserText = (messageArr) => {
    let messageObject = {};
    messageObject.user = 'TheDonald';  
    messageObject.message = document.getElementById("userMessage").value;
    // document.getElementById("outputBox").innerHTML += userName +=`${userText}<br><br>`;
    messageArr.push(messageObject);
    console.log('newArr',messageArr);
    dom.outputMessages(messageArr);
};

function clearUserText () {
    let userText = document.getElementById("userMessage");
    userText.value = "";
}



module.exports.pressingEnter = (messageArr) => {
    let userText = document.getElementById("userMessage");
    userText.addEventListener('keypress', function (e) {
    var key = e.keyCode;
    if (key === 13) {
        // console.log("enter key working");
        printUserText(messageArr);
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

