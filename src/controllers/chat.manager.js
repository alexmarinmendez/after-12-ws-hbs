const fs = require('fs')

const pathToFile = './chat.json'

class ChatManager {
    create = async (message) => {
        try {
            if (fs.existsSync(pathToFile)) {
                console.log('hola?')
                let data = await fs.promises.readFile(pathToFile, 'utf-8')
                let chat = JSON.parse(data)
                let id = chat[chat.length-1].id+1
                message = {
                    id,
                    email: message.email,
                    timestamp: new Date().toLocaleString(),
                    message: message.message
                }
                chat.push(message)
                await fs.promises.writeFile(pathToFile, JSON.stringify(chat, null, 2))
                return chat
            } else {
                let id = 1
                message = {
                    id,
                    email: message.email,
                    timestamp: new Date().toLocaleString(),
                    message: message.message
                }
                await fs.promises.writeFile(pathToFile, JSON.stringify([message], null, 2))
                console.log([message])
                return [message]
            }
        } catch(err) {
            return {status: "error", message: err.message}
        }
    }

    findAll = async () => {
        let chat = []
        if (fs.existsSync(pathToFile)) {
            let data = await fs.promises.readFile(pathToFile, 'utf-8')
            chat = JSON.parse(data)
        }
        return chat
    }
}

module.exports = ChatManager