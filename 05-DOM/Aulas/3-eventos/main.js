const botao = document.getElementById('botao')
const botao2 = document.getElementById('botao2')

function register(ev){
    const section = ev.currentTarget.parentNode
    const username = section.children.username.value
    const password = section.children.password.value
    const Cpassword = section.children.passwordConfirmation.value

    console.log({username, password, Cpassword})
}

function remove(){
    botao.removeEventListener('click', register)
}

botao.addEventListener('click', register)
botao2.addEventListener('click', remove)

