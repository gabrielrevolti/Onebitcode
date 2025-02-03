class Chracter {
    constructor(nome, pontos_vida, ataque, defesa){
        this.nome = nome
        this.pontos_vida = pontos_vida
        this.ataque = ataque
        this.defesa = defesa
    }

    atacar(personagem_atacado){
        console.log(`${personagem_atacado.nome} foi atacado por ${this.nome}`)
        console.log(`Vida antes: ${personagem_atacado.pontos_vida}`)
        personagem_atacado.pontos_vida -= this.ataque - personagem_atacado.defesa
        console.log(`Vida depois: ${personagem_atacado.pontos_vida}`)
        console.log('-------------------------------------------')
    }
}

module.exports = Chracter