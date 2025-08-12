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

const mainContent = document.querySelector('.main-content');

for (let i = 0; i < myLibrary.length; i++){
  let book = document.createElement('div');
  let title = document.createElement('h2');
  let author = document.createElement('h3');
  let numberPages = document.createElement('p');
  let readStatus = document.createElement('p');
  let myID = document.createElement('p');

  title.textContent = myLibrary[i].title;
  author.textContent = myLibrary[i].author;
  numberPages.textContent = myLibrary[i].numberOfPages;
  readStatus.textContent = myLibrary[i].isRead;
  myID.textContent = myLibrary[i].id;

  
  book.append(title, author, numberPages, readStatus, myID);
  mainContent.appendChild(book);
}
