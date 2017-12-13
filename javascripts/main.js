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