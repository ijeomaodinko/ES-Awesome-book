class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class BookCollection {
  constructor() {
    this.booklist = [];
  }

  addBook(book) {
    this.booklist.push(book);
  }

  removeea(book) {
    this.booklist.pop(book);
  }

  removeBook(booktitle) {
    this.booklist = this.booklist.filter((book) => book.title !== booktitle);
  }
}

const books = document.querySelector(".book-collection");
const addButton = document.querySelector(".add");
const inputtitle = document.querySelector(".input-title");
const inputauthor = document.querySelector(".input-author");
const collection = new BookCollection();

// to set collection to same if there is collection stored
if (localStorage.getItem("data") !== null) {
  collection.booklist = JSON.parse(localStorage.getItem("data"));
}

const removeall = (book) => {
  const removea = document.querySelector(".container");
  removea.textContent = "";

  localStorage.setItem("data", JSON.stringify(collection.booklist));
};

// to create container to place added books and remove button
const createBookElement = (bookname, bookauthor) => {
  const container = document.createElement("div");
  container.className = "container";
  container.className = `container ${bookname}`;
  books.appendChild(container);

  // to create book title element
  const titledisplay = document.createElement("p");
  titledisplay.className = "title";
  titledisplay.innerHTML = `"${bookname}" by ${bookauthor}`;
  container.appendChild(titledisplay);

  // to create remove button element
  const buttonremove = document.createElement("button");
  buttonremove.innerHTML = "Remove";
  buttonremove.className = "button";
  buttonremove.addEventListener("click", removeall);
  // buttonremove.classList = bookname;
  container.appendChild(buttonremove);
};

// createBookElement();

const addtocollection = () => {
  const booktoadd = new Book(inputtitle.value, inputauthor.value);
  collection.addBook(booktoadd);

  createBookElement(booktoadd.title, booktoadd.author);

  // to reset form input values
  inputtitle.value = "";
  inputauthor.value = "";

  // to store new collection in Local Storage
  localStorage.setItem("data", JSON.stringify(collection.booklist));
};

const updatePage = () => {
  for (let i = 0; i < collection.booklist.length; i += 1) {
    createBookElement(
      collection.booklist[i].title,
      collection.booklist[i].author
    );
  }
};

export { createBookElement, removeall, addtocollection, updatePage };
