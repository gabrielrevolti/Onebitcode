const arr = [
    "Nivel 1" ,
    ["Nivel 2"] ,
    [
        ["Nivel 3"]
    ]
]

console.log(arr[0])
console.log(arr[1])
console.log(arr[1][0])
console.log(arr[2])
console.log(arr[2][0])
console.log(arr[2][0][0])

const matriz = [
    ["l1, c1", "l1, c2", "l1, c3"],
    ["l2, c1", "l2, c2", "l2, c3"],
    ["l3, c1", "l3, c2", "l3, c3"]
]

for(let i = 0; i < matriz.length ; i++){ // Percorre cada linha da matriz ou seja 0 até 2
    for(let j = 0; j < matriz[i].length; j++){ //Percorre a linha e acrescenta mais um
        const elemento = matriz[i][j] // Mostra qual é o valor da linha 
        console.log("Posição: (" + i + "," + j +") valor " + elemento)
    }
}
