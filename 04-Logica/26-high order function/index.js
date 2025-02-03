function calcular(a, b, operacao){
    console.log("Realizando uma operação.")
    const resultado = operacao(a,b)
    return resultado
}

function somar(x , y){
    console.log("Realizando uma soma.")
    return x + y
}

//console.log(calcular(3, 5 , somar))

console.log(calcular(10, 20, function (x, y){
    console.log("Calculando...")
    return x - y
}))

function exibir_elementos(elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
    })
}

const lista = ["Maçã", "banana", "morango", "kiwi", "abacaxi"]

for(let i = 0; i < lista.length; i++){
   exibir_elementos(lista[i], i, lista)
}

lista.forEach(exibir_elementos)

lista.forEach(function(elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
    })
})

