function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age) {
            resolve(age > 18)
        } else {
            reject(new Error('age is required'))
        }
    })
}

function getAge(birthday) {
    return new Promise((resolve, reject) => {
        if (birthday) {
            const birthYear = new Date(birthday).getFullYear()
            const currentYear = new Date().getFullYear()
            resolve(currentYear - birthYear)
        } else {
            reject(new Error('Birthday is required'))
        }
    })
}

//Desse jeito abaixo o código fica muito difícil de ler

// getAge('1995-09-02').then(age => {
//     checkAge(age).then(isOver18 => {
//         if (isOver18) {
//             console.log('Maior de idade')
//         } else {
//             console.log('Menor de idade')
//         }
//     }).catch(err => {
//         console.log(err.message)
//     })
// }).catch(err => {
//     console.log(err.message)
// }) 

//desse jeito é o jeito certo porém tem como resumir um pouco mais 

// getAge('2009-09-03')
//     .then((age) => {
//         return checkAge(age) //aqui usamos o próprio return sem precisar usar o then encadeado muitas vezes
//     })
//     .then((isOver18) => {
//         if(isOver18) {
//             console.log('Maior de idade')
//         }else {
//             console.log('Menor de idade')
//         }
//     })


getAge('2009-09-03')
    .then( age => checkAge(age)) // as arrow functions ja sao retornadas por padrão
    .then( isOver18 => {
        if(isOver18) {
            console.log('Maior de idade')
        }else {
            console.log('Menor de idade')
        }
    })