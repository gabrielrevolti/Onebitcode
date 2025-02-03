let tarefa = ["correr", "lavar a louça", "comer"]
console.log(tarefa)

let listaCompra = ["pão", "carne", "tomate"]
console.log(listaCompra)

let concat = tarefa.concat("gabriel", listaCompra)
console.log(concat)

let substituicao = concat.splice(3,1, "banana")
console.log(substituicao)
console.log(concat)

for(let i = 0; i < concat.length ; i++){
    console.log("número da strig =  " + i +" string = " + concat[i])
}