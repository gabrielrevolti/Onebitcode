function addContact(){
    const section = document.getElementById('section-id')

    const ul = document.createElement('ul')

    const h3 = document.createElement('h3')
    h3.innerText = 'Contato'
    ul.appendChild(h3)

    const nameLi = document.createElement('li')
    nameLi.innerText = 'Nome: '
    const nameInput = document.createElement('input')
    nameLi.appendChild(nameInput)
    ul.appendChild(nameLi)
    ul.appendChild(document.createElement('br'))

    const phoneLi = document.createElement('li')
    phoneLi.innerText = 'Telefone: '
    const phoneInput = document.createElement('input')
    phoneLi.appendChild(phoneInput)
    ul.appendChild(phoneLi)
    ul.appendChild(document.createElement('br'))

    const addressLi = document.createElement('li')
    addressLi.innerText = 'Endereço: '
    const addressInput = document.createElement('input')
    addressLi.appendChild(addressInput)
    ul.appendChild(addressLi)
    ul.appendChild(document.createElement('br'))

    section.append(ul)
}   

function removeContact(){
    const section = document.getElementById('section-id')

    const contacts = document.getElementsByTagName('ul')

    section.removeChild(contacts[contacts.length - 1])
}