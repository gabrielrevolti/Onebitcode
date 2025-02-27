function validateEmail(email){
    if(!email.match(/\w{2,}@[a-zA-z]{2,}\.[a-zA-Z]{2,}/)){
        const err = new Error('Email inválido')
        err.input = 'email'
        throw err
    }
}

function validatePassword(password) {
    if (
        password < 8 || 
        !password.match(/[a-z]/) ||
        !password.match(/[A-Z]/) ||
        !password.match(/[^a-zA-z0-9\s]/)
    ) {
        const err = new Error('Senha inválida.')
        err.input = 'password'
        throw err
    }
}

function resetFormStyles() {
    Object.entries(userInputs).forEach(([key, value]) => {
        value.classList.remove('success', 'error')
        document.querySelector(`#${key}-error`).textContent = ''
    })
}

const userInputs = {
    name: document.querySelector('#name'),
    email: document.querySelector('#email'),
    password: document.querySelector('#password')
}

const form = document.querySelector('form')

form.addEventListener('submit', (ev) => {
    ev.preventDefault()
    resetFormStyles()

    try {
        userInputs.name.classList.add('success')
        validateEmail(userInputs.email.value)
        userInputs.email.classList.add('success')
        validatePassword(userInputs.password.value)
        userInputs.password.classList.add('success')
        
    } catch (err) {
        userInputs[err.input].classList.add('error')
        document.querySelector(`#${err.input}-error`).textContent = err.message
    }
})