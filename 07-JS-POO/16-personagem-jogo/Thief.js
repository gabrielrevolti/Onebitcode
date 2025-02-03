const Chracter = require('./Character.js')

class Thief extends Chracter{
    constructor(nome, pontos_vida, ataque, defesa){
        super(nome, pontos_vida, ataque, defesa)
    }

    atacar(personagem_atacado){
        console.log(`${personagem_atacado.nome} foi atacado por ${this.nome}`)
        console.log(`Vida antes: ${personagem_atacado.pontos_vida}`)
        personagem_atacado.pontos_vida -= (this.ataque * 2) - personagem_atacado.defesa
        console.log(`Vida depois: ${personagem_atacado.pontos_vida}`)
        console.log('-------------------------------------------')
    }
}

module.exports = Thief