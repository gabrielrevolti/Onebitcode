const fs = require("node:fs")

fs.unlink("arquivos.csv", (error) => {
  if (error) {
    console.log("erro ao excluir o arquivo: ", error.message)
  }

  console.log("Arquivo excluído com sucesso!")
})