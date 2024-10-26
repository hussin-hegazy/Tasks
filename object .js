const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  yearPublished: 1925
};

function logBookProperties(bookObject) {
  for (let property in bookObject) {
    console.log(`${property}: ${bookObject[property]}`);
  }
}

logBookProperties(book);

book.getDescription = function() {
  return `The book "${this.title}" was written by ${this.author} and published in ${this.yearPublished}.`;
};

console.log(book.getDescription());

const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", yearPublished: 1960 },
  { title: "1984", author: "George Orwell", yearPublished: 1949 },
  { title: "Pride and Prejudice", author: "Jane Austen", yearPublished: 1813 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", yearPublished: 1951 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", yearPublished: 1925 }
];

console.log("مصفوفة الكتب:", books);

function findBookByTitle(title, booksArray) {
  return booksArray.find(book => book.title === title);
}

const searchTitle = "1984";
const foundBook = findBookByTitle(searchTitle, books);
console.log(`الكتاب الذي تم العثور عليه بعنوان "${searchTitle}":`, foundBook);

function logAllBookDescriptions(booksArray) {
  booksArray.forEach(book => {
    console.log(`"${book.title}" by ${book.author}, published in ${book.yearPublished}.`);
  });
}

logAllBookDescriptions(books);
