import { label, input, br } from "./functions.js"

console.log(label({for:'name', textContent: 'Nome Completo'}))
console.log(input({id: 'name', name: 'Fullname', placeholder: 'Digite seu nome completo ...'}))
console.log(br())