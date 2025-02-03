const fs = require("node:fs")

const filename = "arquivos.txt"

const exists = fs.existsSync(filename)

if (exists) {
  fs.readFile("arquivos.txt", "utf-8", (error, data) => {
    if (error) {
      console.error(error)
      return
    }
    console.log(data)
  })
} else {
  console.log("O arquivo não existe!")
}

// try {
//   const data = fs.readFileSync("./arquivos.txt", "utf-8")
//   console.log(data)
// }catch(err) {
//   console.log(err)
// }