const express = require('express')
const app = express()

app.use(express.json())

const usuariosRoutes = require('./routes/usuarios')
const produtosRoutes = require('./routes/produtos')
const filmesRoutes = require('./routes/filmes')

app.get('/', (req, res) => {
    res.send('API funcionando com sucesso')
})

app.get('/mensagem', (req, res) => {
    res.json({
        mensagem: 'Minha API esta respondendo corretamente'
    })
})

app.use('/usuarios', usuariosRoutes)
app.use('/produtos', produtosRoutes)
app.use('/filmes', filmesRoutes)

app.listen(3000, () => {
    console.log('Servidor rodando em: http://localhost:3000')
})