const Manager = require('../controllers/chat.manager')
const manager = new Manager()

let chat = manager.findAll()

module.exports = chat