const http = require('node:http')

const server = http.createServer((request, response) => {
  const path = request.url

  switch(path) {
    case '/':
      response.writeHead(200)
      response.write('Você está na página inicial!')
      break
    case '/artigos':
      response.writeHead(200)
      response.write('Você está na página de artigos!')
      break
    default:
      response.writeHead(400)
      response.write('Caminho não encontrado!')
  }
  response.end()
})

const PORT = 3000

server.listen(PORT, () => {
  console.log(`Servidor HTTP em Node.js rodando em  http://localhost:${PORT}/`)
})