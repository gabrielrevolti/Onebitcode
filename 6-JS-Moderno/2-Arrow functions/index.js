function normalSum(a, b){
    return a + b
}
console.log(`Soma normal ${normalSum(2,4)}`)

const anonymousSum = function(a, b){
    return a + b
}
console.log(`Soma anônima ${anonymousSum(2, 8)}`)

const arrow = (a,b) => {
    return a + b
}
console.log(`Soma arrow ${arrow(3,5)}`)

const subtract = (a,b) => a - b
console.log(`Subtração é ${subtract(10,5)}`)

const num = 10
const double = n => `O dobro de ${n} é ${n*2}`
console.log(double(num))

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

const startingWithP = towns.filter(town => town[0] === 'P')
console.log(startingWithP)