const Book = require("../models/book.models");

const getAll = async (req, res) => {
  try {
    const book = await Book.getAll();
    if (!book) {
        return res.status(404).json({message: "Book not found"});
    };
    res.status(200).json({ message: "Success", data: book });
  } catch (error) {
    console.error("Error in getAll controller:", error);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message || "An unexpected error occurred",
    });
  }
};

const addBook = async (req, res) => {
    try {
        const {Judul, Pengarang, Penerbit, Tahun_Terbit, Jumlah_Buku, Kategori} = req.body;
        if (!Judul || !Pengarang || !Penerbit || !Tahun_Terbit || !Jumlah_Buku || !Kategori) {
            return res.status(400).json({message: "Missing required fields"});
        };
        const book = await Book.create(Judul, Pengarang, Penerbit, Tahun_Terbit, Jumlah_Buku, Kategori);
        res.status(200).json({message: "Success", data: book});
    } catch (error) {
        console.error("Error in addBook controller:", error);
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message || "An unexpected error occurred",
        });
    };
};

const getSingleBook = async (req, res) => {
    try {
        const {id: ID_Buku} = req.params;
        const book = await Book.getById(ID_Buku);
        if (!book) {
            return res.status(404).json({message: "Book not found"});
        };
        res.status(200).json({message: "Success", data: book});
    } catch (error) {
        console.error("Error in getSingleBook controller:", error);
        return res.status(500).json({
            message: "Internal server error",
            error: error.message || "An unexpected error occurred",
        });
    };
};

const updateBook = async (req, res) => {
    try {
        const {id: ID_Buku} = req.params;
        const {Judul, Pengarang, Penerbit, Tahun_Terbit, Jumlah_Buku, Kategori} = req.body;
        const updateBook = await Book.update(ID_Buku, Judul, Pengarang, Penerbit, Tahun_Terbit, Jumlah_Buku, Kategori);
        if (updateBook.affectedRows === 0) {
            return res.status(404).json({message: "Book not found"});
        };
        res.status(200).json({message: "Update book success", data: updateBook});
    } catch (error) {
        console.error("Error in updateBook controller:", error);
        return res.status(500).json({
            message: "Internal server error",
            error: error.message || 'An unexpected error occurred',
        });
    };
};

const deleteBook = async  (req, res) => {
    try {
        const {id: ID_Buku} = req.params;
        const deleteBook = await Book.remove(ID_Buku);
        if (deleteBook.affectedRows === 0) {
            return res.status(404).json({message: "Book not found"});
        };
        res.status(200).json({message: "Delete book success", data: deleteBook});
    } catch (error) {
        console.error("Error in deleteBook controller:", error);
        res.status(500).json({
            message: "internal server error",
            error: error.nessage || "An unexpected error occurred",
        });
    };
};

module.exports = { getAll, addBook, getSingleBook, updateBook, deleteBook };
