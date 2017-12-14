(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
"use strict";


let printUserText = (message) => {
    let userText = document.getElementById("userMessage").value;
    document.getElementById("outputBox").innerHTML += `<p>${userText}<button class="delete">Delete</button></p>`;
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



// ------------------------------------------DELETE-MESSAGE-FUNCTION-------------------------------------------------

var deleteMessage = document.getElementsByClassName("remove");

function deleteMessage() {
    
}
},{}],3:[function(require,module,exports){
'use strict';
let formatter = require("./formatter");
let dom = require("./outputDOM");
let interact = require("./interactDOM");

let myRequest = new XMLHttpRequest();

console.log("myRequest", myRequest);

const getMessages = () => {
    console.log("event.target", event.target);
    const textData = JSON.parse(event.target.responseText);
    let {messages} = textData; //{} deconstructs object into an array
    console.log("data", textData);
    dom.outputMessages(messages);
};

myRequest.addEventListener("load", getMessages);
myRequest.open("GET", "data/messages.json");
myRequest.send();

// dom.outputMessages(getMessages());


interact.pressingEnter();
},{"./formatter":1,"./interactDOM":2,"./outputDOM":4}],4:[function(require,module,exports){
'use strict';

module.exports.outputMessages = (messageArr) => {
    let messageList = document.getElementById("outputBox");
    console.log("hi");
    messageArr.forEach(function(message) {
        messageList.innerHTML += `<p>User 1: ${message.user1} <br> User 2: ${message.user2}<p/>`;
        console.log("message", message.user1);
    });
};
},{}]},{},[3]);
