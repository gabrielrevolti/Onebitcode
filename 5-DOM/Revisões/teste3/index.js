function addPlayer(){
    const name = document.getElementById('name').value
    const position = document.getElementById('position').value
    const number = document.getElementById('number').value

    const confirmacao = confirm('Deseja adcionar o jogador: ' + name + ' posição: ' + position + ' número: ' +
    number)

    if(confirmacao){
        const ul = document.getElementById('team-list')
        const list = document.createElement('li')
        list.id = 'player-' + number
        list.innerText = name + ' ' + position + ' (' + number + ')'
        ul.append(list)

        alert('jogador adicionado')

        document.getElementById('name').value = ''
        document.getElementById('position').value = ''
        document.getElementById('number').value = ''
    }else{
        alert('jogador não adicionado')
    }
    
}

function removePlayer(){
    const number = document.getElementById('playerRemove').value
    const numberToRemove = document.getElementById('player-' + number)

    const confirmacao = confirm('Deseja remover o jogador ' + numberToRemove.innerText + '?' )

    if(confirmacao){
        document.getElementById('team-list').removeChild(numberToRemove)
        alert('jogador removido')

        document.getElementById('playerRemove').value = ''
    }else{
        alert('Jogador não removido')
    }
}