
interface CelestialBody {
  name: string,
  mass: number
}

interface Star extends CelestialBody {
  age: number
}

interface Planet extends CelestialBody {
  population: number
  createSatellite: (name: string) => void
}

let sun: Star

sun.name = "sol"
sun.age = 11111111111
sun.mass= 22222222222

type Asteroid = CelestialBody & {
  size: number
}

let algumaCoisa: Asteroid
algumaCoisa.size = 21121

class MilkyWayPlanet implements Planet {
  name: string
  mass: number
  population: number

  constructor(name: string, mass: number, population: number) {
    this.name = name
    this.mass = mass
    this.population = population
  }

  createSatellite(name: string) {
    // ...
  }
}