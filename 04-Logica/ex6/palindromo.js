let palavra = prompt("Digite uma palavra: ")

let palavraInvertida = ""

for(let i = palavra.length -1; i >= 0; i-- ){
    palavraInvertida += palavra[i]
}

if(palavra === palavraInvertida){
    alert("A palavra é palíndroma \n" + palavra + " = " + palavraInvertida)
}else{
    alert("A palavra não é palíndroma \n" + palavra + " = " + palavraInvertida)
}