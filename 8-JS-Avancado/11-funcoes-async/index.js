// async function asyncSum( a, b) {
//     return a + b 
// }

// async function asyncSub(a, b) {
//     return a - b
// }

// const sumResult = asyncSum(50, 20)
// const subResult = asyncSub(50, 20)

// Promise.all([subResult, sumResult]).then(results => {
//     console.log(results)
// }).catch(err => {
//     console.log(err)
// })

const numbers = [4, 9, 5, 13, 77]

async function asyncSquare(x) {
    return x * x
}

Promise.all(numbers.map(number => asyncSquare(number))).then(squares => {
    console.log(squares)
}).catch(err => {
    console.log(err)
})