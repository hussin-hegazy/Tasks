// Array to store books
let books = [];

// Function to add a new book
function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;
    const genre = document.getElementById('genre').value;

    // Create new book object and add to array
    const book = { title, author, year, genre };
    books.push(book);

    // Clear the input fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('year').value = '';
    document.getElementById('genre').value = '';

    // Update book display
    displayBooks();
}

// Function to display books
function displayBooks() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';
    books.forEach((book, index) => {
        bookList.innerHTML += `
            <p>
                <span><strong>Title:</strong> ${book.title} |
                <strong>Author:</strong> ${book.author} |
                <strong>Year:</strong> ${book.year} |
                <strong>Genre:</strong> ${book.genre}</span>
                <span>
                    <button class="edit-button" onclick="editBook(${index})">Edit</button>
                    <button class="delete-button" onclick="deleteBook(${index})">Delete</button>
                </span>
            </p>
        `;
    });
}

// Function to edit a book's details
function editBook(index) {
    const book = books[index];
    document.getElementById('title').value = book.title;
    document.getElementById('author').value = book.author;
    document.getElementById('year').value = book.year;
    document.getElementById('genre').value = book.genre;

    // Remove old book from array for re-adding after editing
    books.splice(index, 1);
    displayBooks();
}

// Function to delete a book
function deleteBook(index) {
    books.splice(index, 1); // Remove book from array
    displayBooks(); // Update display
}
