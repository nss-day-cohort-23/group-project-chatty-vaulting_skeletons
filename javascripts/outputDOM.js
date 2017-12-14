'use strict';

module.exports.outputMessages = (messageArr) => {
    let messageList = document.getElementById("outputBox");
    console.log("hi");
    messageList.innerHTML = '';
    messageArr.forEach(function(message) {
        messageList.innerHTML += `<p> <span class="user">${message.user}</span><span class="timeStyle">${message.date}</span>: ${message.message} <button class="delete">Delete</button></p>`;
        console.log("message", message.user);
    });
};