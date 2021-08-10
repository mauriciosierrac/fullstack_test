class BookService {
    constructor() {
        this.URI = `/api/books`
    }

    async getBooks() {
        const response = await fetch(this.URI)
        await response.json()
        .catch((err) => {
            console.error(err)
        })
    }

    async postBook(book) {
        const res = await fetch(this.URI, {
            method: 'POST',
            body: book
        })
        await res.json()
        .catch((err)=>{
            console.error(err)
        })
    }

    async deleteBook(bookId) {
        const res = await fetch(`${this.URI}/${bookId}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'Delete'
        })
        await res.json()
        .catch((err) =>{
            console.error(err)
        })
    }
}

export default BookService