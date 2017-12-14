'use strict';
let hub = require("./hub");
let formatter = require("./formatter");
let dom = require("./outputDOM");
let interact = require("./interactDOM");
let myRequest = new XMLHttpRequest();

console.log("myRequest", myRequest);
const fetchMessages = () => {
    console.log("event.target", event.target);
    const textData = JSON.parse(event.target.responseText);
    let {messages} = textData; //{} deconstructs object into an array
    messages.forEach(message => {
        hub.addMessage(message);
    });
    console.log('hub.getMessages',hub.getMessages());
    console.log("data", textData);
    dom.outputMessages(messages);
    interact.pressingEnter();
};

myRequest.addEventListener("load", fetchMessages);
myRequest.open("GET", "data/messages.json");
myRequest.send();

// dom.outputMessages(getMessages());

