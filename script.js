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
    readStatus = 'Finished';
  } else if (!statusOfBook.checked) {
    readStatus = 'Not yet';
  }
  let newBook = new Book (titleOfBook.value, authorOfBook.value, pagesOfBook.value, readStatus);

  if (titleOfBook.value == '' || authorOfBook.value == '' || pagesOfBook.value == '') {
    Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Enter valid inputs",
  });
  } else {
    myLibrary.push(newBook.addIt());
    updateLibrary();
  }

  titleOfBook.value = '';
  authorOfBook.value = '';
  pagesOfBook.value = '';
  statusOfBook.checked = false;
})

const mainContent = document.querySelector('.main-content');

function updateLibrary () {
  mainContent.innerHTML = '';

  for (let i = 0; i < myLibrary.length; i++){
    let book = document.createElement('div');
    let title = document.createElement('h3');
    let author = document.createElement('h4');
    let numberPages = document.createElement('p');
    let readStatus = document.createElement('p');
    let myID = document.createElement('p');
    let remove = document.createElement('button');
    let changeStatus = document.createElement('button');

    title.innerHTML = `<strong style="font-size: 1.75rem;">TITLE: </strong>${myLibrary[i].title}`;
    author.innerHTML = `<strong style="font-size: 1.4rem;">AUTHOR: </strong>${myLibrary[i].author}`;
    numberPages.innerHTML = `<strong style="font-size: 1.25rem;">PAGES: </strong>${myLibrary[i].numberOfPages}`;
    readStatus.innerHTML = `<strong style="font-size: 1.25rem;">READ STATUS: </strong>${myLibrary[i].isRead}`;
    myID.innerHTML = `<strong style="font-size: 1.25rem;">ID: </strong>${myLibrary[i].id}`;
    remove.textContent = 'Remove';
    changeStatus.textContent = 'Change Status';

    remove.style.cssText = 'background-color: #fff8f0; padding: 8px 16px; border: none; border-radius: 15px; font-weight: 700; cursor: pointer; transition: all 0.3s;';
    changeStatus.style.cssText = 'background-color: #fff8f0; padding: 8px 16px; border: none; border-radius: 15px; font-weight: 700; cursor:pointer; transition: all 0.3s;';


    remove.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = '#92140c';
      e.target.style.color = '#fff8f0'
    })

    remove.addEventListener('mouseout', (e) => {
      e.target.style.backgroundColor = '#fff8f0';
      e.target.style.color = '#1e1e24';
    })

    remove.addEventListener('click', () => {
      mainContent.removeChild(book);
    })

    changeStatus.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = '#92140c';
      e.target.style.color = '#fff8f0'
    })

    changeStatus.addEventListener('mouseout', (e) => {
      e.target.style.backgroundColor = '#fff8f0';
      e.target.style.color = '#1e1e24';
    })

    changeStatus.addEventListener('click', () => {
      if (readStatus.textContent == 'READ STATUS: Not yet' || readStatus.innerHTML == '<strong style="font-size: 1.25rem;">READ STATUS: </strong> Not yet') {
        readStatus.innerHTML = `<strong style="font-size: 1.25rem;">READ STATUS: </strong> Finished`;
        myLibrary[i].isRead = 'Finished';
      } else {
        readStatus.innerHTML = `<strong style="font-size: 1.25rem;">READ STATUS: </strong> Not yet`;
        myLibrary[i].isRead = 'Not yet';
      }
    })
    
    book.append(title, author, numberPages, readStatus, myID, remove, changeStatus);
    mainContent.appendChild(book);
  }
}

updateLibrary();
