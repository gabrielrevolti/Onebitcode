class Book {
    constructor(title) {
        this.title = title
        this.published = false
    }

    publish() {
        this.published = true
    }
}

const eregon = new Book("Eregon")
console.log(eregon)

const eldest = new Book("Eldest")
eldest.publish()
console.log(eldest)
