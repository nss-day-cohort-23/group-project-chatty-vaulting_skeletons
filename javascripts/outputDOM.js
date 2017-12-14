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