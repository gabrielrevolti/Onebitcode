import { createFile, showFile, updateFile, deleteFile } from "./functions.js"

async function start() {
  await createFile("Conteúdo inicial do arquivo. \nCriado como o módulo fs do Node.js")
  await showFile()
  console.log('---------------')
  await updateFile("Conteúdo modificado!")
  await showFile()
  console.log('---------------')
  await deleteFile()
}

start()
