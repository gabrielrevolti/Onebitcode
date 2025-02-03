function addInput(){
    const ul = document.getElementById('ul-id')

    const li = document.createElement('li')
    li.innerText = 'nome: '
    const input = document.createElement('input')
    input.id = 'input'

    li.appendChild(input)
    ul.appendChild(li)
}