function Book([name, author, pages, read]) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let name = prompt("What is the book title?", "The Woods");
    let author = prompt("Who is the author?", "Alfa Eridani");
    let pages = prompt("How many pages?", "246");
    let read = prompt("Have you read this book?", "No");
    newBook = new Book([name, author, pages, read]);
    myLibrary.push(newBook);
    displayBooks();
}

function displayBooks() {
    let bookContainer = document.querySelector(".bookContainer");
    while (bookContainer.firstChild) {
        bookContainer.removeChild(bookContainer.lastChild);
    }
    
    for(let i = 0; i < myLibrary.length; i++) {
        let singleBookContainer = document.createElement("div");
        bookContainer.appendChild(singleBookContainer);

        let displayName = document.createElement("p");
        displayName.textContent = myLibrary[i].name;
            
        let displayAuthor = document.createElement("p");
        displayAuthor.textContent = myLibrary[i].author;

        let displayPages = document.createElement("p");
        displayPages.textContent = myLibrary[i].pages;

        let displayRead = document.createElement("p");
        displayRead.textContent = myLibrary[i].read;

        singleBookContainer.appendChild(displayName);
        singleBookContainer.appendChild(displayAuthor);
        singleBookContainer.appendChild(displayPages);
        singleBookContainer.appendChild(displayRead);
    }
}

const myLibrary = [];

let addBookButton = document.querySelector("#addBook");
addBookButton.addEventListener("click", addBookToLibrary);