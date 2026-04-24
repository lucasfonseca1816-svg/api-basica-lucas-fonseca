const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    const produtos = [
        {id: 1, nome: 'Mouse'},
        {id: 2, nome: 'Teclado'},
        {id: 3, nome: 'Monitor'}
    ]

    res.json(produtos)
})

router.get('/:id', (req, res) => {
    const idRecebido = req.params.id

    res.json({
        mensagem: 'Produto encontrado com sucesso',
        id: idRecebido
    })
})

router.post('/', (req, res) => {
    const produto = req.body

    res.status(201).json({
        mensagem: 'Produto recebido com sucesso' ,
        dadosRecebidos: produto
    })
})

module.exports = router