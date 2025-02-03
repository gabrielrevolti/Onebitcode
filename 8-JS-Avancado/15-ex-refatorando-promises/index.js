async function calcularIMC(peso, altura){
    console.log('O imc está em processo...')
    if(typeof peso !== 'number' || typeof altura !== 'number') {
       return Promise.reject('Arguments must be of type number ')
    }
    return (peso / (altura * altura))
}

async function resultadoIMC(peso, altura) {
    try{
        console.log(`Calculando o IMC para o peso ${peso} e altura ${altura}`)

        const result = await calcularIMC(peso, altura)

        console.log(`O seu IMC é de ${result.toFixed(2)}.`)

        if (result < 18.5) console.log('Situação: MAGREZA')
        else if (result < 25) console.log('Situação: NORMAL')
        else if (result < 30) console.log('Situação: SOBREPESO')
        else if (result < 40) console.log('Situação: OBESIDADE')
        else console.log('Situação: OBESIDADE GRAVE')
    } catch (err) {
        console.log(`A promise foi rejeitada!motivo: ${err}`)
    } finally {
        console.log('O procedimento foi finalizado!')
    }
}

resultadoIMC(67, 1.80)
resultadoIMC(87, 1.90)
resultadoIMC(120, 1.80), 
resultadoIMC('gabriel', 1.80)