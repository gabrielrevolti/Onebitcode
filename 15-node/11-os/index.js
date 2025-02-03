const os = require("node:os")

const plataform = os.platform()
console.log("Plataforma do SO : ", plataform)

const arch = os.arch()
console.log("Arquitetura do SO", arch)

const cpus = os.cpus()
console.log("Informações da cpu", cpus[0])

const memoria = os.totalmem()
console.log("Total de memória do PC", memoria / 1024 / 1024 / 1024, "GB")

const uptime = os.uptime()
console.log("Tempo ligado", uptime)