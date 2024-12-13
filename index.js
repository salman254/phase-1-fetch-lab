function fetchBooks() {
  // To fetch data from the Game of Thrones API
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => {
      // To Convert the response to JSON
      return response.json();
    })
    .then((books) => {
      renderBooks(books);
    })
    .catch((error) => {
      // Handle any errors that occur
      console.error("Error fetching books:", error);
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach((book) => {
    const h2 = document.createElement('h2'); // Create an <h2> element
    h2.innerHTML = book.name; // Set the book title as the content
    main.appendChild(h2); // Append the <h2> to the <main> element
  });
}

document.addEventListener('DOMContentLoaded', function () {
  fetchBooks();
});
