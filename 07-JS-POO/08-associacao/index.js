const Address = require("./Address.js")
const Person = require("./Person.js")

const addr = new Address("Pacaembu", 388, "Centro", "Osasco", "São Paulo")
const gabriel = new Person("Gabriel Revolti", addr)

console.log(gabriel)
console.log(gabriel.address.fullAddress())