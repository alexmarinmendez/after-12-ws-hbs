let chat = require('../models/chat.model')

class ChatManager {
    create = (message) => {
        let id
        if (chat.length === 0) id = 1
        else id = chat[chat.length-1].id+1
        message = {
            id,
            email: message.email,
            timestamp: new Date().toLocaleString(),
            message: message.message
        }
        chat.push(message)
        return chat
    }

    findAll = () => {
        return chat
    }
}

module.exports = ChatManager