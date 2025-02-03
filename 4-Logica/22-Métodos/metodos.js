let pessoa = {
    nome: "Gabriel",
    idade: "19",
    dizerOla(){
        console.log("Olá " + this.nome + ", tudo bem?")
    }
}

console.log(pessoa)
pessoa.dizerOla()