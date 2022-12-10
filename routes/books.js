const express = require("express");
const { getAllBooks, getSingleBookById, getAllIssuedBooks, addNewBook, updateBookById, getSingleBookByName } = require("../controller/book_control");


const { books } = require('../database/books.json');
const { users } = require('../database/users.json');


const { UserModel, BookModel } = require("../models");
const router = express.Router();


router.get("/", getAllBooks);

router.get("/:id", getSingleBookById);

router.get("/issued/books", getAllIssuedBooks);

router.get("/getbook/name", getSingleBookByName);

router.post("/", addNewBook);

router.put("/:id", updateBookById);

module.exports = router;