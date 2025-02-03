let pokemon = "Charmander" // escopo mais externo 

function evoluir(){
    pokemon = "Charmeleon" //consegue acessar o escopo mais externo
}

console.log(pokemon)
evoluir()
console.log(pokemon)


function passatempo(){
    let correr = "Correr" //escopo mais interno
}

//console.log(correr) // não consegue acessar pois não existe um return, e mostra como se não existisse


function avaliarNota(nota){
    if(nota > 60){
        var aprovado = true //Dentro de estruturas como if a var pode ser acessado, mesmo que seja mais interna
        let situacao = "Aprovado" // já no let não. Por isso é melhor usar o let
    }else{
        var aprovado = false 
        let situacao = "Reprovado"
    }

    //console.log(nota)
    //console.log(aprovado)
   //console.log(situacao)
}

avaliarNota(83)
avaliarNota(30)

function exemplo(){
    var nadinha = ""
}

console.log(nadinha) // já nesse caso, não da pra acessar a var dentro de uma função


