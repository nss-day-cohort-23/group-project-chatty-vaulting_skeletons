"use strict";

let messageArr = [];

module.exports.getMessages = () =>{
    return messageArr;
};

module.exports.addMessage = (message)=> {
    messageArr.push(message);
};

module.exports.deleteMessage = (messageObject)=>{  
    for (let i = 0; i < messageArr.length; i++) {
         console.log('messageArr',messageArr);
         console.log('messageObject',messageObject);
        if (messageArr[i].user === messageObject.user && messageArr[i].date === messageObject.date) {
            messageArr.splice(i, 1);
            console.log('messageArr',messageArr);
        }
    }
};

module.exports.deleteAllText = ()=>{
    messageArr= [];
};
