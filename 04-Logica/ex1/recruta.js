const nome = prompt('Digite seu nome')
const sobrenome = prompt('Digite seu sobrenome:')
const campoDeEstudo = prompt('Digite seu campo de estudo:')
const idade = prompt('Qual o ano em que nasceu?')

alert(
    'Os dados foram do recruta foram registrados!\n'+ 
    '\nNome completo: ' + nome + ' ' + sobrenome +
    '\nCampo de estudo: ' + campoDeEstudo +
    '\nIdade: ' + (2023 - idade)
)