"use strict";

let printUserText = (message) => {
    let userText = document.getElementById("userMessage").value;
    document.getElementById("outputBox").innerHTML += userText;
};

module.exports.pressingEnter = () => {
    let userText = document.getElementById("userMessage");
    userText.addEventListener('keypress', function (e) {
    var key = e.keyCode;
    if (key === 13) {
        // console.log("enter key working");
        printUserText();
    }
    });
};

