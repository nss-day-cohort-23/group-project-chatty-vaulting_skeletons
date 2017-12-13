'use strict';

module.exports.outputMessages = (messageArr) => {
    let messageList = document.getElementById("outputBox");
    console.log("hi");
    messageArr.forEach(function(message) {
        messageList.innerHTML += `<p>User 1: ${message.user1} <br> User 2: ${message.user2}<p/>`;
        console.log("message", message.user1);
    });
};