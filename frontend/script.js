const API = "http://localhost:5000/api/books";

// Load Books
async function loadBooks() {
  const res = await fetch(API);
  const books = await res.json();

  const list = document.getElementById("bookList");
  list.innerHTML = "";

  books.forEach(book => {
    list.innerHTML += `
      <div class="book">
        <h3>${book.title}</h3>
        <p>${book.author}</p>
        <p>Status: ${book.status}</p>

        <button onclick="deleteBook('${book._id}')">Delete</button>
        <button onclick="issueBook('${book._id}')">Issue</button>
        <button onclick="returnBook('${book._id}')">Return</button>
      </div>
    `;
  });
}

// Add Book
async function addBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, author })
  });

  loadBooks();
}

// Delete
async function deleteBook(id) {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  loadBooks();
}

// Issue
async function issueBook(id) {
  await fetch(`${API}/issue/${id}`, { method: "PUT" });
  loadBooks();
}

// Return
async function returnBook(id) {
  await fetch(`${API}/return/${id}`, { method: "PUT" });
  loadBooks();
}

// Initial Load
loadBooks();