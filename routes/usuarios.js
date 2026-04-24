const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    const usuarios = [
        {id: 1, nome: 'Ana'},
        {id: 2, nome: 'Bruno'},
        {id: 3, nome: 'Carlos'}
    ]

    res.json(usuarios)
})

router.get('/:id', (req, res) => {
    const idRecebido = req.params.id

    res.json({
        mensagem: 'Usuario encontrado com sucesso',
        id: idRecebido
    })
})

router.post('/', (req, res) => {
    const usuario = req.body

    res.status(201).json({
        mensagem: 'Usuario recebido com sucesso',
        dadosRecebidos: usuario
    })
})

module.exports = router