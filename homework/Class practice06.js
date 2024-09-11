class Author {
    constructor(fname, lname, country, books) {
        this.fname = fname;
        this.lname = lname;
        this.country = country;
        this.books = books;
    }

    getFullName() {
        return `${this.fname} ${this.lname}`;
    }

    getBooks() {
        return this.books;
    }
};

class Book {
    constructor(title, genre, page) {
        this.title = title;
        this.genre = genre;
        this.page = page;
    }
};

const book1 = new Book('A Game of Thrones', 'Epic Fantasy', 694);
const book2 = new Book('A Clash of Kings', 'Epic Fantasy', 768);
const book3 = new Book('A Storm of Swords', 'Epic Fantasy', 973);

const georgeMartin = new Author('George R. R.', 'Martin', 'United States', [book1, book2, book3]);

console.log(georgeMartin.getFullName());
georgeMartin.getBooks().forEach(book => console.log(book));

function Author(fname, lname, country, books) {
    this.fname = fname;
    this.lname = lname;
    this.country = country;
    this.books = books;
};

Author.prototype.getFullName = function () {
    return `${this.fname} ${this.lname}`;
};

Author.prototype.getBooks = function () {
    return this.books;
};

function Book(title, genre, page) {
    this.title = title;
    this.genre = genre;
    this.page = page;
};

const book1Proto = new Book('A Game of Thrones', 'Epic Fantasy', 694);
const book2Proto = new Book('A Clash of Kings', 'Epic Fantasy', 768);
const book3Proto = new Book('A Storm of Swords', 'Epic Fantasy', 973);

const georgeMartinProto = new Author('George R. R.', 'Martin', 'United States', [book1Proto, book2Proto, book3Proto]);

console.log(georgeMartinProto.getFullName());
georgeMartinProto.getBooks().forEach(book => console.log(book));












