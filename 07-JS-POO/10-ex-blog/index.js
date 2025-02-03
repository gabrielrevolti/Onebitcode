const Author = require("./author");

const gabriel = new Author("Gabriel Revolti")
const post = gabriel.writePost("O grande heroi da pátria", "Gabriel é o grande herói")

post.addComment("Samuel", "Muito bom")
post.addComment("Larissa", "Muito bom")

console.log(gabriel)
console.log(post)