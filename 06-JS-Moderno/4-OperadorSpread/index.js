const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

console.log(towns)
console.log(...towns)
console.log(...towns[0])

const townsCopy = towns

towns.pop()
towns.pop()
towns.push('AlgumaCoisa')

console.log(towns)
console.log(townsCopy)

const townsClone = [...towns]
townsClone.push('Olá Mundo')

console.log({towns, townsCopy, townsClone})

const townObj = {...towns}
const townObjClone = {...townObj}

townObjClone.test = 'Tudo bem?'

console.log({townObj, townObjClone})