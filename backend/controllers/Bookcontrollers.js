const Book = require("../models/Book");

// Add Book
const addBook = async (req, res) => {
  const { title, author } = req.body;
  const book = await Book.create({ title, author });
  res.json(book);
};

// Get Books
const getBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

// Delete Book
const deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Book deleted" });
};

// Issue Book
const issueBook = async (req, res) => {
  const book = await Book.findById(req.params.id);
  book.status = "issued";
  await book.save();
  res.json(book);
};

// Return Book
const returnBook = async (req, res) => {
  const book = await Book.findById(req.params.id);
  book.status = "available";
  await book.save();
  res.json(book);
};

module.exports = {
  addBook,
  getBooks,
  deleteBook,
  issueBook,
  returnBook,
};