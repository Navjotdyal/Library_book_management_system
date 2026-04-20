const express = require("express");
const router = express.Router();
const {
  addBook,
  getBooks,
  deleteBook,
  issueBook,
  returnBook,
} = require("../controllers/Bookcontrollers");

router.post("/", addBook);
router.get("/", getBooks);
router.delete("/:id", deleteBook);
router.put("/issue/:id", issueBook);
router.put("/return/:id", returnBook);

module.exports = router;