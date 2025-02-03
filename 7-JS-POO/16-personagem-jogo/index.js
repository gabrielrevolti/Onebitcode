const Chracter = require('./Character.js')
const Thief = require('./Thief.js')
const Mage = require('./Mage.js')
const Warrior = require('./Warrior.js')

//-------------------------------------------Players-------------------------------------------------------
console.log('Players')
const Gabriel = new Chracter('Gabriel', 100, 50, 50)
const Kauan = new Chracter('Kauan', 100, 50, 20)
const kanzin = new Thief('Kanzin', 50, 50, 20)
const Diogao = new Mage('Diogao', 71, 20, 50, 35)
const Marcelo = new Warrior('Marcelo', 50, 50, 20, 40)

console.log(Gabriel)
console.log(Kauan)
console.log(kanzin)
console.log(Diogao)
console.log(Marcelo)
console.log('------------------------------')

//-------------------------------------------Ataques-------------------------------------------------------
Gabriel.atacar(kanzin)
kanzin.atacar(Gabriel)
Kauan.atacar(Diogao)
Diogao.atacar(Kauan)
kanzin.atacar(Marcelo)
Marcelo.atacar(kanzin)
Diogao.curar(kanzin)
Diogao.curar(Marcelo)
