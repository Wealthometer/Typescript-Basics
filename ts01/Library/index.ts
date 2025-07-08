class Book {
    public readonly id : string;
    public title : string;
    public author : string;
    public isBorrowed : boolean

    constructor (id : string, title : string, author : string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.isBorrowed = false;
    }

    public displayDetails() : void {
        console.log(`
            ID : ${this.id}, 
            Title : ${this.title}, 
            Author : ${this.author}, 
            Borrowed : ${this.isBorrowed}
        `);
    }
}

interface Borrowable {
    borrow() : boolean;
    returnItems() : boolean;
}

class Library {
    private books : Book[] = [];

    // Adding a new book to the library
    public addBook(book : Book) : void {
        this.books.push(book);
        console.log(`Book "${book.title}" added to the library`);
    }

    // Searching for Books by tilte or authors
    public searchBooks (keyword : string) : Book[] {
        return this.books.filter (
            (book) => book.title.toLowerCase().includes(keyword.toLocaleLowerCase()) ||
            book.author.toLocaleLowerCase().includes(keyword.toLowerCase())
        );
    }

    public getBookById (id : string) : Book | undefined {
        return this.books.find((book) => book.id === id);
    }
}

class User implements Borrowable {
    private borrowedBook : Book[] = [];

    constructor ( public readonly name : string ) {}

    // Borrowing a Book
    public borrow(book : Book): boolean {
        if (book.isBorrowed) {
            console.log(`Book "${book.title}" is already borrowed`);
            return false;
        }
        
        this.borrowedBook.push(book);
        book.isBorrowed = true;
        console.log(`${this.name} borrowed "${book.title}"`);
        return true;
    }
    

    public returnItems(book : Book): boolean {
        const index = this.borrowedBook.findIndex((b) => b.id === book.id);
        if (index !== -1) {
            this.borrowedBook.splice(index, 1);
            book.isBorrowed = false;
            console.log(`${this.name} returned "".`);
        }
    }
}