function sum(...number){
    return number.reduce((accum, num) => accum + num, 0)
}

console.log(sum(1,2,3,4,5,6,7,8,9,10))
