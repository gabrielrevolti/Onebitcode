async function asyncSum( a, b) {
    if( typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('Arguments sum must be of type number')
    }
    return a + b 
}

// async function execute() {
//     asyncSum(50, 33).then(result => {
//         console.log(result)
//     })
// }

async function execute() {
    try{
        const result = asyncSum(50, 30)
        console.log(result)
    } catch (err){
        console.log(err)
    }
}

execute()