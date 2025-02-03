function sendSpaceShip(name: string, captain: string) {
  const spaceShip = {
    name,
    captain,
    speed: 20,
    inMission: true,
    crew: []
  }

  alert(`A nave ${spaceShip.name} comandada pelo capitão ${spaceShip.captain} foi enviada em missão`)

  return spaceShip
}

function accelerate(targetSpeed: number, spaceShip: {name: string, speed: number}) {
  if (spaceShip.speed > targetSpeed) {
    alert(`Reduzindo a velocidade da ${spaceShip.name} para ${targetSpeed}...`)
  } else if (spaceShip.speed < targetSpeed){
    alert(`Aumentado a velocidade da ${spaceShip.name} para ${targetSpeed} ...`)
  } else {
    alert(`Mantendo a velocidade da ${spaceShip.name}...`)
  }
}

const spaceShipName = prompt('Insira o nome da nave a ser enviado.')
const spaceShipCapitain = prompt('Insira o nome do captão da nave.')

const currentShip = sendSpaceShip(spaceShipName, spaceShipCapitain)

const speed = Number(prompt('Insira a velocidade na qual deseja acelerar'))

accelerate(speed, currentShip)

