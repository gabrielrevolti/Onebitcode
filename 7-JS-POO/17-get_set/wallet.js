class Wallet {
    #amount
    #username
    constructor(){
        this.#amount = 100.99 * 100 //Para salvar como inteiro
    }

    get amount(){
        return this.#amount / 100 //Para retornar com casa decimal
    }

    set username(newUsername) {
        if(typeof newUsername === 'string'){
            this.#username = newUsername
        }else{
            console.log('Erro')
        }
    }

    get username(){
        return this.#username
    }
}
const myWallet = new Wallet()

console.log(myWallet.amount)

myWallet.username = 'Gabriel'
console.log(myWallet.username)

myWallet.username += ' Revolti'
console.log(myWallet.username)

myWallet.username = 12
console.log(myWallet.username)

