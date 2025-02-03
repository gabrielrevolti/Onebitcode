async function asyncSum( a, b) {
    if( typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('Arguments sum must be of type number')
    }
    return a + b 
}

async function asyncSub(a, b) {
    if( typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('Arguments for subtraction must be of type number')
    }
    return a - b
}

const sumResult = asyncSum(50, 20)
const subResult = asyncSub(50, null)

Promise.all([subResult, sumResult]).then(results => {
    console.log(results)
}).catch(err => {
    console.log(err)
})

