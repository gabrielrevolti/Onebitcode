function calcularMedia(a, b){
    media = (a+b)/2
    return media
}

resultado = calcularMedia(10, 9)
//console.log(resultado)

function computador(nome, preco){
    const produto = {
        nome, // nome: nome
        preco, // preco: preco como o nome do parâmetro é preco não precisa fazer preco: preco
        estoque: 1
    }
    return produto
}

let note = computador("Vaio 16gb ram", 3500)
//console.log(note.nome, note.preco)

function quadrado(lado){
    return lado * lado
}

//console.log(quadrado(10, 10))

function retangulo(altura, base){
    return quadrado(altura, base)
}

//console.log(retangulo(20, 12))

function maiorIdade(idade){
    if (idade >= 18){
        return("Maior de idade")
    }else{
        return("menor de idade")
    }
}

console.log(maiorIdade(18))
console.log(maiorIdade(12))