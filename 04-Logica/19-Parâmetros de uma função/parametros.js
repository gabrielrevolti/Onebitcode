//Parâmetro simples
function dobro(n){
    alert("O dobro de " + n + " é " + (n * 2))
}
//dobro(10)

//Parâmetro com valor opcional
function ola(nome = "mundo"){
    console.log("Ola, " + nome + "!")
}
//ola("Gabriel")
//ola()

//vários parâmetros
function soma(a, b, c, d){
    console.log("O valor é " + (a + b + c + d))
}
//soma(10 , 20 , 30, 40)

//Parâmetros com obejetos
function ususario (nome,email){
    const u = {
        nome,
        email
    }
    console.log(u)
}

ususario("Gabriel", "Gabriel@gmail.com")


//Parâmetros em um objeto para simplificar
function ususario(usuario){
    usuario.nome,
    usuario.email,
    usuario.senha

    console.log(usuario)
}


const dados = {
    nome: "Gabriel",
    email: "Gabriel@gmail.com",
    senha: "1234"
}

ususario(dados)