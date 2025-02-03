const turista = prompt("Qual é o seu nome?")
let pergunta = prompt("Você visitou alguma cidade? (Y/N)")
let cidades = " "
let contagem = 0

while(pergunta === "Y"){
    let cidade = prompt("Qual cidade você visitou?")
    cidades += " - " + cidade + "\n"
    contagem ++
    pergunta = prompt("Você visitou outra cidade ? ")
}

alert(
    "nome: " + turista +
    "\nQuantas cidades visitou: " + contagem +
    "\nCidade(s) que visitou:\n " + cidades
)

