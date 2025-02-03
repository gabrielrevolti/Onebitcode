let personagens = [
    {nivel: 12, nome: "Tracer", raca: "humano", classe: "DPS"},
    {nivel: 120, nome: "Reaper", raca: "humanoide", classe: "DPS"},
    {nivel: 11, nome: "Mercy", raca: "deus", classe: "Suporte"}
]

//map

//let nomes = []
//for(let i = 0; i < personagens.length; i++){
//    nomes.push(personagens[i].nome)
//}

//console.log(nomes)

const nomes = personagens.map(function(personagem){
    return personagem.nome
})

console.log(nomes)

//filter

//const classes = []

//for (let i = 0; i < personagens.length; i++) {
//    if(personagens[i].classe === "DPS"){
//        classes.push(personagens[i])
//    }
//}

//const classes = personagens.filter(function(personagem){
//    return personagem.classe === "DPS"
//})
//console.log(classes)

const classes = personagens.reduce(function(valorAcumulado, personagem){
    if(valorAcumulado[personagem.classe]){
        valorAcumulado[personagem.classe].push(personagem)
    }else{
        valorAcumulado[personagem.classe] = [personagem]
    }

    return valorAcumulado
}, {})

console.log(classes)

personagens.sort(function(a, b){
    return a.nivel - b.nivel
})

console.log(personagens)