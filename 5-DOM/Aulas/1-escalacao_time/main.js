function addPlayer() {
    let posicao = document.getElementById('posicao').value
    let nome = document.getElementById('nome').value
    let numero = document.getElementById('numero').value
    const ul = document.getElementById('jogadores')

    const confirmation = confirm(`Deseja escalar ${nome} como ${posicao} camisa${numero} ?`)

    if(confirmation){
        const li = document.createElement('li')
        li.id = 'player ' + numero
        li.innerText = `${posicao}: ${nome}(${numero})`
    
        ul.appendChild(li)
    }

    posicao = document.getElementById('posicao').value = ''
    nome = document.getElementById('nome').value = ''
    numero = document.getElementById('numero').value = ''
}

function remover(){
    const num = document.getElementById('numberToRemove').value
    const playerRemove = document.getElementById('player ' + num)

    const confirmation = confirm(`Deseja remover o jogador ${playerRemove.innerText} ?`)

    if(confirmation){
       playerRemove.remove()
    }
    document.getElementById('numberToRemove').value = ''
}