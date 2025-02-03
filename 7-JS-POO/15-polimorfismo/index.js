class Vehicle {
    move(){
        console.log('O veículo está se movendo.')
    }
}

class Car extends Vehicle {
    move(){
        console.log("O carro está se movendo")
    }
}
class Ship extends Vehicle {
    move(){
        console.log("O barco está navegando")
    }
}
class Plane extends Vehicle {
    move(speed){
        console.log(`O avião está voando a ${speed} km/h`)
    }
}

const carro = new Car()
const barco = new Ship()
const aviao = new Plane()

// carro.move()
// barco.move()
// aviao.move(1000)

function start(vehicle){
    console.log('iniciando um veículo...')
    vehicle.move()
}

start(carro)
start(barco)
start(aviao)