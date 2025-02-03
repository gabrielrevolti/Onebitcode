const Chracter = require('./Character.js')

class Mage extends Chracter {
    constructor(nome, pontos_vida, ataque, defesa, pontos_magia){
        super(nome,pontos_vida,ataque, defesa)
        this.pontos_magia = pontos_magia
    }

    atacar(personagem_atacado){
        console.log(`${personagem_atacado.nome} foi atacado por ${this.nome}`)
        console.log(`Vida antes: ${personagem_atacado.pontos_vida}`)
        personagem_atacado.pontos_vida -= (this.pontos_magia + this.ataque) - personagem_atacado.defesa 
        console.log(`Vida depois: ${personagem_atacado.pontos_vida}`)
        console.log('-------------------------------------------')
    }

    curar(personagem_curado){
        console.log(`${personagem_curado.nome} foi curado por ${this.nome}`)
        console.log(`Vida antes: ${personagem_curado.pontos_vida}`)
        personagem_curado.pontos_vida += this.pontos_magia * 2
        console.log(`Vida depois: ${personagem_curado.pontos_vida}`)
        console.log('-------------------------------------------')
    }
}

module.exports = Mage