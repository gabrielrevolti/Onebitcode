function execute() {
    return new Promise ((resolve, reject) => {
        console.log('A promise está sendo executada.')
        setTimeout(() => {
            if ( 1 + 2 === 2) {
                resolve('1 + 1 é igual a 2')
            } else {
                console.log('Resolvendo a promise...')
                reject('o valor não é igual a 2')
            }
        }, 3 * 1000)
    })
}

execute().then((result) => {
    console.log(`A promise foi resolvida. O resultado foi: ${result}`)
}).catch((err) => {
    console.log(`A promise foi rejeitada! Motivo: ${err}`)
}).finally(() => {
    console.log('A Promise foi finalizada')
})