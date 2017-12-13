(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
'use strict';
let formatter = require("./formatter");
let dom = require("./outputDOM");

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

},{"./formatter":1,"./outputDOM":3}],3:[function(require,module,exports){
'use strict';

module.exports.outputMessages = (messageArr) => {
    let messageList = document.getElementById("outputBox");
    console.log("hi");
    messageArr.forEach(function(message) {
        messageList.innerHTML += `<p>User 1: ${message.user1} <br> User 2: ${message.user2}<p/>`;
        console.log("message", message.user1);
    });
};
},{}]},{},[2]);
