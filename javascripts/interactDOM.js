"use strict";

let hub = require("./hub");
let dom = require("./outputDOM");
let moment = require("moment");

let printUserText = (message) => {
    let messageObject = {};
    messageObject.user = 'TheDonald '; 
    messageObject.date = moment().format("LTS"); 
    messageObject.message = document.getElementById("userMessage").value;
    // document.getElementById("outputBox").innerHTML += userName +=`${userText}<br><br>`;
    hub.addMessage(messageObject);
    let messageArray = hub.getMessages();
    console.log('newArr',messageObject);
    dom.outputMessages(messageArray);
    console.log('moment',moment().format("LTS"));
    ifButtPress();

};

function clearUserText () {
    let userText = document.getElementById("userMessage");
    userText.value = "";
}



module.exports.pressingEnter = (message) => {
    let userText = document.getElementById("userMessage");
    userText.addEventListener('keypress', function (e) {
    var key = e.keyCode;
    if (key === 13) {
        // console.log("enter key working");
        printUserText(message);
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



//-------------------Delete Button-------------------------------

let outputBox = document.getElementById("outputBox");
outputBox.addEventListener("click", deleteUserMessage);
function deleteUserMessage(){
    console.log('event.target',event);
    if (event.target.className === "delete") {
        let userTextObjectInputToDelete = {};
        userTextObjectInputToDelete.user = event.target.parentElement.children[0].innerText;   
        userTextObjectInputToDelete.date = event.target.parentElement.children[1].innerText;
        hub.deleteMessage(userTextObjectInputToDelete);
        let messageArray = hub.getMessages();
        dom.outputMessages(messageArray);
        ifButtPress();
    }
}

//-----------------Clear All Text--------------------------


let messagesOnDom = document.getElementById("outputBox");
let clearButton = document.getElementById("clearButt");
function clearMessages() {
    messagesOnDom.innerHTML = "";
    hub.deleteAllText(); 
    ifButtPress();
}
// if (messagesOnDom.value === '') {
//     clearButton.disabled = true;
// }
function ifButtPress(){
    if (messagesOnDom.innerText === '') {
        clearButton.disabled = true;
    } else
        clearButton.disabled = false;
}        
            
clearButton.addEventListener("click", clearMessages);

