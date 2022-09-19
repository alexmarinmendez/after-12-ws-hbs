const express = require('express')
const router = express.Router()

const Manager = require('../controllers/chat.manager')
const manager = new Manager()

router.get('/', (req, res) => {
    let result = manager.findAll()
    res.send(result)
})

router.post('/', (req, res) => {
    if (!req.body.email || !req.body.message) return res.send({error: 'data is required'})
    let result = manager.create(req.body)
    res.send(result)
})

module.exports = router