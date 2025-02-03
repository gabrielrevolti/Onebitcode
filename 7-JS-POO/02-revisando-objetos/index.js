// const book = {
//     title: "Como fazer amigos e influenciar pessoas",
//     page: 335,
//     published: true,
//     instock: 100,
//     tags: ['self-improve', 'conversation', 'friends'],
//     author: {
//         name: 'Dale Carnegie'
//     },
//     addOnStock(quantity){
//         this.instock += quantity
//     }
// }

//PascalCase
function Book(title, pages, tags, author){
    this.title = title
    this.pages = pages
    this.tags = tags
    this.author = author
    this.published = false
    this.inStock = 0
    this.addOnStock = function addOnStock(quantity){
        this.inStock = quantity
    }
    this.save = function(){
        //salva no banco de dados
    }
}

const author = 'Dale Carnegie'
const tags = ['Self-improve', 'conversation']

const amigos = new Book('Como fazer amigos e influenciar pessoas', 335, tags, author)
console.log(amigos)

const gostar = new Book('Como fazer as pessoas gostarem de você', 250, tags, author)
console.log(gostar)