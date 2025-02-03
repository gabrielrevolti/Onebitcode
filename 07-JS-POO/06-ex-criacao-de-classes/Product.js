class Product {
    constructor(name, description, price ){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(quantity){
        this.inStock += quantity
    }

    calculateDiscount(percent){
        return this.price - ((this.price * percent) / 100)
    }
}

const mouse = new Product('cobra','mouse com 16mil dpi e rgb', 190)

mouse.addToStock(45)
const discount = mouse.calculateDiscount(15)

console.log(mouse)
console.log(`Valor com desconto ${discount}`)


