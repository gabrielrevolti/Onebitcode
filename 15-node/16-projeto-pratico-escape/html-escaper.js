const fs = require("node:fs")
const path = require("node:path")
const readLine = require("node:readline")


run()

function escapeHtmlSpecialChararacters(text) {
  return text.replace(/[<>&]/g, (match) => {
    switch(match){
      case "<":
        return "&lt;"
      case ">":
        return "&gt;"
      case "&":
        return "&amp;"
      default:
        return match
    }
  })
}

// console.log(escapeHtmlSpecialChararacters("Isso é um código HTML. Nele existem tags como a <div> e o <h1>"))

function escapeHtmlFile(inputFilePath, outputFilePath) {
  try {
    const fileContent = fs.readFileSync(inputFilePath, "utf-8")
    const escapedContent = escapeHtmlSpecialChararacters(fileContent)
    fs.writeFileSync(outputFilePath, escapedContent, "utf-8")
    console.log(`Arquivo escapado com sucesso: ${outputFilePath}`)
  } catch (error) {
    console.log("Erro:", error.message)
  }
}

function askFilePath(question) {
  const rl = readLine.createInterface({input: process.stdin, output: process.stdout})

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer)
      rl.close()
    })
  })
}

async function userInterection() {
  let inputPath = process.argv[2]
  if (!inputPath) {
    inputPath = await askFilePath("Por favor, informe o caminho do arquivo: ")
  }
  inputPath = path.resolve(inputPath)

  const defaultName = `escaped_${path.basename(inputPath)}.txt`
  const answer = await askFilePath(`Informe o caminho do arquivo de saída (padrão): ${defaultName}: `)
  let outputPath = answer.length > 0 ? answer : defaultName
  outputPath = path.resolve(outputPath)

  escapeHtmlFile(inputPath, outputPath)
}

function run() {
  if (process.argv.length >= 4) {
    escapeHtmlFile(path.resolve(process.argv[2]), path.resolve(process.argv[3]))
  } else {
    console.log("-----------------------------------")
    console.log("ESCAPE HTML SPECIAL CHARACTERS v1.0")
    console.log("-----------------------------------")
    console.log("Argumentos não informados! Por Favor, informe os caminhos para realizar o escape.")
    userInterection()
  }
}