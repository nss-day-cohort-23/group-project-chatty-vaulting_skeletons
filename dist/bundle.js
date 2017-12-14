(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
"use strict";

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


'use strict';
let formatter = require("./formatter");
let dom = require("./outputDOM");
let interact = require("./interactDOM");

let myRequest = new XMLHttpRequest();

console.log("myRequest", myRequest);
let messageArr = [];
const getMessages = () => {
    console.log("event.target", event.target);
    const textData = JSON.parse(event.target.responseText);
    let {messages} = textData; //{} deconstructs object into an array
    console.log("data", textData);
    messageArr = messages;
    dom.outputMessages(messages);
    interact.pressingEnter(messageArr);
};

myRequest.addEventListener("load", getMessages);
myRequest.open("GET", "data/messages.json");
myRequest.send();

// dom.outputMessages(getMessages());


},{"./formatter":1,"./interactDOM":2,"./outputDOM":4}],4:[function(require,module,exports){
'use strict';

module.exports.outputMessages = (messageArr) => {
    let messageList = document.getElementById("outputBox");
    console.log("hi");
    messageList.innerHTML = '';
    messageArr.forEach(function(message) {
        messageList.innerHTML += `<p> ${message.user}: ${message.message}</p>`;
        console.log("message", message.user1);
    });
};
},{}]},{},[3]);
