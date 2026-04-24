const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    const filmes = [
        {id: 1, nome: 'Filme1'},
        {id: 2, nome: 'Filme2'},
        {id: 3, nome: 'Filme3'}
    ]

    res.json(filmes)
})

router.get('/:id', (req, res) => {
    const idRecebido = req.params.id

    res.json({
        mensagem: 'Filme encontrado com sucesso',
        id: idRecebido
    })
})

router.post('/', (req, res) => {
    const filme = req.body

    res.status(201).json({
        mensagem: 'Filme recebido com sucesso' ,
        dadosRecebidos: filme
    })
})

module.exports = router