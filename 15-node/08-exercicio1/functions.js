import fs from "node:fs"

export function createFile(txt){
  return new Promise((resolve, reject) => {
    fs.writeFile("./meuarquivo.txt", txt, "utf-8", (error) => {
      if (error) {
        reject("Erro ao escrever arquivo", error.message)
      } else {
        resolve()
      }
    })
  })
}

export function showFile() {
  return new Promise((resolve, reject) => {
  fs.readFile("./meuarquivo.txt", "utf-8", (error, data) => {
    if (error) {
      reject("Erro ao ler o arquivo :", error.message)
    } else {
      console.log(data)
      resolve()
    }
  })
  })
}

export function updateFile(txt) {
  return new Promise((resolve, reject) => {
    fs.writeFile("./meuarquivo.txt",txt,  "utf-8", (error) => {
      if (error) {
        reject("Erro ao atualizar :", error.message)
      } else {
        resolve()
      }
    })
  })
}


export function deleteFile() {
  return new Promise((resolve, reject) => {
  fs.unlink("./meuarquivo.txt", (error) => {
    if (error) {
      reject("Erro ao deletar" , error.message)
    } else {
      console.log("O arquivo deletado com sucesso!")
      resolve()
    }
  })
  })
}
