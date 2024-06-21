//Object constructor
class Book {
    constructor(name, author, pages, read) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

class Library {
    constructor() {
        this.myLibrary = [];
    }

    addBookToLibrary(name, author, pages, read) {
        let newBook = new Book(name, author, pages, read);
        this.myLibrary.push(newBook);
        this.displayBooks();
    }

    displayBooks() {
        // Select the book container div
        let bookContainer = document.querySelector(".bookContainer");
        
        // Delete all the children of the div if they exist
        while (bookContainer.firstChild) {
            bookContainer.removeChild(bookContainer.lastChild);
        }
        
        // Fill the div with array myLibrary
        this.myLibrary.forEach((book, index) => {
            let singleBookContainer = document.createElement("div"); // Create a container for each book
            singleBookContainer.setAttribute("class", "book" + index); // Set a class for each book
            bookContainer.appendChild(singleBookContainer);

            let displayName = document.createElement("h2");
            displayName.textContent = book.name;
                
            let displayAuthor = document.createElement("p");
            displayAuthor.textContent = book.author;

            let displayPages = document.createElement("p");
            displayPages.textContent = `${book.pages} page(s)`;

            singleBookContainer.appendChild(displayName);
            singleBookContainer.appendChild(displayAuthor);
            singleBookContainer.appendChild(displayPages);

            let buttonContainer = document.createElement("div");
            buttonContainer.setAttribute("class", "buttonContainer");
            singleBookContainer.appendChild(buttonContainer);

            let deleteButton = document.createElement("button"); // This is a button to remove a book
            deleteButton.setAttribute("class", "delete");
            deleteButton.setAttribute("alt", "Delete");
            deleteButton.addEventListener("click", () => {
                this.myLibrary.splice(index, 1); // Remove book from the array
                this.displayBooks(); // Refresh the book display
            });

            let readButton = document.createElement("button");
            readButton.setAttribute("alt", "Read button");
            if (book.read === "yes") {
                readButton.textContent = "Read";
                readButton.setAttribute("class", "read yes");
            } else {
                readButton.textContent = "Not read yet";
                readButton.setAttribute("class", "read no");
            }
            readButton.addEventListener("click", () => {
                if (book.read === "yes") {
                    book.read = "no";
                    readButton.textContent = "Not read yet";
                    readButton.setAttribute("class", "read no");
                } else {
                    book.read = "yes";
                    readButton.textContent = "Read";
                    readButton.setAttribute("class", "read yes");
                }
            });

            buttonContainer.appendChild(readButton);
            buttonContainer.appendChild(deleteButton);
        })
    }
}

const library = new Library(); // Array for storing book objects

// Sample books
library.addBookToLibrary("Wuthering Heights", "Emily Brontë", 464, "yes");
library.addBookToLibrary("The Picture of Dorian Gray", "Oscar Wilde", 272, "no");
library.addBookToLibrary("The Stranger", "Albert Camus", 159, "yes");
library.addBookToLibrary("Crime and Punishment", "Fyodor Dostoevsky", 671, "yes");
library.addBookToLibrary("All Quiet on the Western Front", "Erich Maria Remarque", 292, "no");
library.addBookToLibrary("Holes", "Louis Sachar", 272, "yes");
library.addBookToLibrary("1984", "George Orwell", 368, "yes");

const bookWindow = document.querySelector(".bookWindow");
const addBookButton = document.querySelector("#addBook");
const closeBookButton = document.querySelector("#closeBook");

addBookButton.addEventListener("click", () => {
    bookWindow.showModal();
});

closeBookButton.addEventListener("click", () => {
    bookWindow.close();
});

document.addEventListener("DOMContentLoaded", () => {
    bookForm = document.querySelector(".bookForm");

    bookForm.addEventListener("submit", function(event) {
        event.preventDefault();
        let bookName = document.querySelector("#book-name").value;
        let author = document.querySelector("#author").value;
        let pages = document.querySelector("#pages").value;
        let read = document.querySelector("#read").value;
        library.addBookToLibrary(bookName, author, pages, read);
        bookWindow.close();
    });
});