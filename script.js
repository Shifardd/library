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

const example1 = new Book ('The Hobbit', 'J.R.R. Tolkien', 295, 'Not yet');
const example2 = new Book ('Harry Potter', 'J.K. Rowling', 4100, 'Not yet');
myLibrary.push(example1.addIt());
myLibrary.push(example2.addIt());


const titleOfBook = document.querySelector('.sidebar #title');
const authorOfBook = document.querySelector('.sidebar #author');
const pagesOfBook = document.querySelector('.sidebar #page');
const statusOfBook = document.querySelector('.sidebar #readStatus');
const addBook = document.querySelector('.sidebar button');

addBook.addEventListener('click', (e)=> {
  e.preventDefault();
  let readStatus;
  if (statusOfBook.checked) {
    readStatus = `Finished`;
  } else if (!statusOfBook.checked) {
    readStatus = `Not yet`;
  }
  let newBook = new Book (titleOfBook.value, authorOfBook.value, pagesOfBook.value, readStatus);
  titleOfBook.value = '';
  authorOfBook.value = '';
  pagesOfBook.value = '';
  statusOfBook.checked = false;
  myLibrary.push(newBook.addIt());
  updateLibrary();
})

const mainContent = document.querySelector('.main-content');

function updateLibrary () {
  mainContent.innerHTML = '';

  for (let i = 0; i < myLibrary.length; i++){
    let book = document.createElement('div');
    book.style.cssText = `padding: 10px; border: 5px solid black;`

    let title = document.createElement('h2');
    let author = document.createElement('h3');
    let numberPages = document.createElement('p');
    let readStatus = document.createElement('p');
    let myID = document.createElement('p');
    let remove = document.createElement('button');
    let changeStatus = document.createElement('button');

    title.textContent = `TITLE: ${myLibrary[i].title}`;
    author.textContent = `AUTHOR: ${myLibrary[i].author}`;
    numberPages.textContent = `PAGES: ${myLibrary[i].numberOfPages}`;
    readStatus.textContent = `READ STATUS: ${myLibrary[i].isRead}`;
    myID.textContent = `ID: ${myLibrary[i].id}`;
    remove.textContent = 'Remove';
    changeStatus.textContent = 'Change Status';

    remove.addEventListener('click', () => {
      mainContent.removeChild(book);
    })

    changeStatus.addEventListener('click', () => {
      if (readStatus.textContent == `READ STATUS: Not yet`) {
        readStatus.textContent = `READ STATUS: Finished`;
      } else {
        readStatus.textContent = `READ STATUS: Not yet`;
      }
    })

    
    book.append(title, author, numberPages, readStatus, myID, remove, changeStatus);
    mainContent.appendChild(book);
  }
}

updateLibrary();
