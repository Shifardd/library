const myLibrary = [];

function Book(title, author, numberOfPages, isRead) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.isRead = isRead;
  this.id = crypto.randomUUID();
}

Book.prototype.addIt = addBookToLibrary;

function addBookToLibrary() {
  return this;
}

const example1 = new Book ('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet')
const example2 = new Book ('Harry Potter', 'J.K. Rowling', 4100, 'not read yet')
myLibrary.push(example1.addIt());
myLibrary.push(example2.addIt());

console.log(myLibrary);