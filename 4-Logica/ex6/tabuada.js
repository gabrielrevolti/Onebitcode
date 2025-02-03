let numero = prompt("Qual número deseja para o cálculo?")

let resultado = ""

for (let i = 1; i <= 20; i++){
    resultado += "=> " + numero + " x " + i + " = " + numero * i + "\n"
}

alert("O resultado do cálculo é: \n \n" + resultado )