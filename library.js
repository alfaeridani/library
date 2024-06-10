//Object constructor
function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(name, author, pages, read) {
    newBook = new Book(name, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
}

function displayBooks() {
    // Select the book container div
    let bookContainer = document.querySelector(".bookContainer");
    
    // Delete all the childs of the div if they are exist
    while (bookContainer.firstChild) {
        bookContainer.removeChild(bookContainer.lastChild);
    }
    
    // Fill the div with array myLibrary
    for(let i = 0; i < myLibrary.length; i++) {
        let singleBookContainer = document.createElement("div"); // Create a container for each book
        bookContainer.appendChild(singleBookContainer);

        singleBookContainer.setAttribute("class", "book" + i); // Set a class for each book

        let deleteButton = document.createElement("button"); // This is a button for every single book to remove it
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            myLibrary.splice(i, 1); // Remove book from the array
            displayBooks(); // Refresh the book display
        })

        let displayName = document.createElement("p");
        displayName.textContent = myLibrary[i].name;
            
        let displayAuthor = document.createElement("p");
        displayAuthor.textContent = myLibrary[i].author;

        let displayPages = document.createElement("p");
        displayPages.textContent = myLibrary[i].pages;

        let displayRead = document.createElement("p");
        displayRead.textContent = myLibrary[i].read;

        singleBookContainer.appendChild(deleteButton);
        singleBookContainer.appendChild(displayName);
        singleBookContainer.appendChild(displayAuthor);
        singleBookContainer.appendChild(displayPages);
        singleBookContainer.appendChild(displayRead);
    }
}

const myLibrary = [];

let bookWindow = document.querySelector(".bookWindow");
let addBookButton = document.querySelector("#addBook");
let closeBookButton = document.querySelector("#closeBook");

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
        addBookToLibrary(bookName, author, pages, read);
        bookWindow.close();
    });
});