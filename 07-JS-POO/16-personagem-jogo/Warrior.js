const Character = require('./Character.js')

class Warrior extends Character {
    constructor(nome, pontos_vida, ataque, defesa, pontos_escudo){
        super(nome, pontos_vida, ataque, defesa)
        this.pontos_escudo = pontos_escudo
        this.posicao = 'atacar'
    }

    trocar_combate(){
        if(this.posicao === 'atacar'){
            this.posicao = 'defesa'
            this.defesa += this.pontos_escudo
        }else{
            this.posicao = 'atacar'
            this.defesa -= this.pontos_escudo
        }
    }

    atacar(personagem_atacado){
        if(this.posicao === 'atacar') {
            super.atacar(personagem_atacado)
        }else {
            console.log('Personagem está no modo defesa')
        }
    }
}

module.exports = Warrior