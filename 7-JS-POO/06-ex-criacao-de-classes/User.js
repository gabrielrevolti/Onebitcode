class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(loginEmail, loginPassword){
        if(this.email == loginEmail && this.password == loginPassword){
            console.log('Login feito com sucesso!')
        }else{
            console.log('Login não efetuado!')
        }
    }
}

const gabriel = new User("Gabriel Revolti Viana Padilha", "gabriel@gmail.com", "1234")
console.log(gabriel)
console.log(gabriel.login("gabriel@gmail.com", "1234"))
console.log(gabriel.login("gabriel@gmail.com", "123445"))