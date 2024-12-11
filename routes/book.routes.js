const express = require("express");
const { getAll, addBook, getSingleBook, updateBook, deleteBook } = require("../controllers/book.controllers");
const router = express.Router();

router.get("/getAll", getAll);
router.post("/addBook", addBook);
router.get("/getBook/:id", getSingleBook);
router.put("/update/:id", updateBook);
router.delete("/delete/:id", deleteBook);

module.exports = router;