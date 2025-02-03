const express = require('express')
const path = require('node:path')
const router = require('./routes')

const app = express()

//configurações do ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//configurações de arquivos estáticos
app.use(express.static('public'))

//configuração para ler dados da requisição
app.use(express.urlencoded({extended:true}))

//Rotas da aplicação
app.use(router)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor iniciado!\nRodando em http://localhost:${PORT}`))