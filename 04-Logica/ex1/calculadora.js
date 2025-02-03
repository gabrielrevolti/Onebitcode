const n1 = parseFloat(prompt('Digite um número: ')) 
const n2 = parseFloat(prompt('Digite outro número: '))

const soma = n1 + n2
const subrtracao = n1 - n2
const multiplicacao = n1 * n2
const divisao = n1 / n2

alert(
    'Resultados: \n' +
    '\n soma: ' + soma +
    '\n subtração: ' + subrtracao +
    '\n multiplicação: ' + multiplicacao +
    '\n divisão: ' + divisao
)