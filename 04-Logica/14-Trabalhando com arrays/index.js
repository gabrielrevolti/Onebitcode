let listaDeComrpas = ["pão", "carne", "feijão", "arroz", "frango"]
console.log(listaDeComrpas)

let tamanho

tamanho = listaDeComrpas.push("linguiça", "bolacha")
console.log(listaDeComrpas)
console.log(tamanho)


listaDeComrpas.unshift("pastel")
console.log(listaDeComrpas)

listaDeComrpas.pop() //"exlcui o último"
console.log(listaDeComrpas)

listaDeComrpas.shift() // excluí o primeiro
console.log(listaDeComrpas)

tamanho = listaDeComrpas.includes("carne")
console.log(tamanho)

tamanho = listaDeComrpas.indexOf("carne")
console.log(tamanho)

let outra = listaDeComrpas.slice(0)
console.log(outra)
console.log(listaDeComrpas)

