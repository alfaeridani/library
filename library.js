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
        singleBookContainer.setAttribute("class", "book" + i); // Set a class for each book
        bookContainer.appendChild(singleBookContainer);

        let displayName = document.createElement("h2");
        displayName.textContent = myLibrary[i].name;
            
        let displayAuthor = document.createElement("p");
        displayAuthor.textContent = myLibrary[i].author;

        let displayPages = document.createElement("p");
        displayPages.textContent = myLibrary[i].pages + " page(s)";

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
            myLibrary.splice(i, 1); // Remove book from the array
            displayBooks(); // Refresh the book display
        });

        let readButton = document.createElement("button");
        readButton.setAttribute("alt", "Read button");
        if (myLibrary[i].read === "yes") {
            readButton.textContent = "Read";
            readButton.setAttribute("class", "read yes");
        } else {
            readButton.textContent = "Not read yet";
            readButton.setAttribute("class", "read no");
        }
        readButton.addEventListener("click", () => {
            if (myLibrary[i].read === "yes") {
                myLibrary[i].read = "no";
                readButton.textContent = "Not read yet";
                readButton.setAttribute("class", "read no");
            } else {
                myLibrary[i].read = "yes";
                readButton.textContent = "Read";
                readButton.setAttribute("class", "read yes");
            }
        });

        buttonContainer.appendChild(readButton);
        buttonContainer.appendChild(deleteButton);
    }
}

const myLibrary = []; // Array for storing book objects

// Sample books
addBookToLibrary("Wuthering Heights", "Emily Brontë", 464, "yes");
addBookToLibrary("The Picture of Dorian Gray", "Oscar Wilde", 272, "no");
addBookToLibrary("The Stranger", "Albert Camus", 159, "yes");
addBookToLibrary("Crime and Punishment", "Fyodor Dostoevsky", 671, "yes");
addBookToLibrary("All Quiet on the Western Front", "Erich Maria Remarque", 292, "no");
addBookToLibrary("Holes", "Louis Sachar", 272, "yes");
addBookToLibrary("1984", "George Orwell", 368, "yes");

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