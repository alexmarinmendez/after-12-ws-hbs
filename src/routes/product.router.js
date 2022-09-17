const express = require('express')
const router = express.Router()

const Manager = require('../controllers/product.manager')
const manager = new Manager()

router.get('/', (req, res) => {
    let result = manager.findAll()
    res.send(result)
})

router.get('/:id', (req, res) => {
    let result = manager.findById(req.params.id)
    if (!result) return res.send({error: 'product was not found'})
    res.send(result)
})

router.post('/', (req, res) => {
    if (!req.body.title || !req.body.price || !req.body.thumbnail) return res.send({error: 'data is required'})
    let result = manager.create(req.body)
    res.send(result)
})

router.put('/:id', (req, res) => {
    if (!req.body.title || !req.body.price || !req.body.thumbnail) return res.send({error: 'data is required'})
    let result = manager.update(req.params.id, req.body)
    if (!result) return res.send({error: 'product was not found'})
    res.send(result)
})

router.delete('/:id', (req, res) => {
    let result = manager.delete(req.params.id)
    res.send(result)
})

module.exports = router