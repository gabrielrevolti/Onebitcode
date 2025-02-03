const average = (...nums) => { 
    const valor = nums.reduce((acum, num) => acum + num)
    return valor / nums.length
}

console.log(`Média aritimética simples: ${average(10, 7 )}`)

const weightedAverage = (...entries) => {
    const sum = entries.reduce((accum, {number, weight}) => accum + (number *( weight ?? 1)), 0)
    const weightSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1) ,0)
    return sum / weightSum
}

console.log(`Média aritimética ponderada: ${weightedAverage(
    {number: 9, weight: 3},
    {number: 7},
    {number: 10, weight: 1}
)}`)

const median = (...nums) => {
    const orderedNumbers = [...nums].sort((a , b) => a - b)
    const middle = Math.floor(orderedNumbers.length / 2)
    if(orderedNumbers.length % 2 !== 0) {
        return orderedNumbers[middle]
    }
    const firstMedian = orderedNumbers[middle -1]
    const secondMedian = orderedNumbers[middle]
    return average(firstMedian, secondMedian)
}

console.log(`Mediana ${median(2, 5, 99, 4, 42, 7)}`)
console.log(`Mediana ${median(15, 10, 20 , 30, 40)}`)

const mode = (...nums) => {
    const quantities = nums.map(num => [
        num,
        nums.filter(n => num === n).length
    ])
    quantities.sort((a,b) => b[1] - a[1])
    return quantities[0][0]
}

console.log(`moda ${mode(1,1,1,1,2,2,2,3,4,4,5,5,5,5,5,5,5,5,5,5)}`)