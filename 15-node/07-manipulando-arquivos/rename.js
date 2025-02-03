const fs = require("node:fs")

fs.rename("arquivos.txt", "arquivos.csv", (error) => {
  if (error) {
    console.log("Erro ao renomear o arquivo ", error.message)
  }

  console.log("Arquivo renomeado com sucesso!")
})