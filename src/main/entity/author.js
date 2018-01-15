class Author{
    constructor(){
        this.authorId = 0;
        this.authorName = null;
        this.book = [];
    }
    getAuthorId() {
        return this.authorId;
    }
    
    setAuthorId(authorId) {
        this.authorId = authorId;
    }
    
    getAuthorName() {
        return this.authorName;
    }
    
    setAuthorName(authorName) {
        this.authorName = authorName;
    }
    
    getBook() {
        return this.book;
    }
    
    setBook(book) {
        this.book = book;
    }
}

module.exports = Author;