const connectDb = require("../config/db");

const Book = {
  // CREATE
  create: async (Judul, Pengarang, Penerbit, Tahun_Terbit, Jumlah_Buku, Kategori) => {
    try {
      const sql = "INSERT INTO buku (Judul, Pengarang, Penerbit, Tahun_Terbit, Jumlah_Buku, Kategori) VALUES (?, ?, ?, ?, ?, ?)";
      const [result] = await connectDb.execute(sql, [Judul, Pengarang, Penerbit, Tahun_Terbit, Jumlah_Buku, Kategori]);
      return result;
    } catch (error) {
      console.error("Error during CREATE:", error);
      throw error;
    }
  },

  // READ ALL
  getAll: async () => {
    try {
      const sql = "SELECT * FROM buku";
      const [rows] = await connectDb.execute(sql);
      return rows;
    } catch (error) {
      console.error("Error during READ ALL:", error);
      throw error;
    }
  },

  // READ BY ID
  getById: async (ID_Buku) => {
    try {
      const sql = "SELECT * FROM buku WHERE ID_Buku = ?";
      const [rows] = await connectDb.execute(sql, [ID_Buku]);
      return rows[0];
    } catch (error) {
      console.error("Error during READ BY ID:", error);
      throw error;
    }
  },

  // UPDATE
  update: async (ID_Buku, Judul, Pengarang, Penerbit, Tahun_Terbit, Jumlah_Buku, Kategori) => {
    try {
      const sql = "UPDATE buku SET Judul = ?, Pengarang = ?, Penerbit = ?, Tahun_Terbit = ?, Jumlah_Buku = ?, Kategori = ? WHERE ID_Buku = ?";
      const [result] = await connectDb.execute(sql, [Judul, Pengarang, Penerbit, Tahun_Terbit, Jumlah_Buku, Kategori, ID_Buku]);
      return result;
    } catch (error) {
      console.error("Error during UPDATE:", error);
      throw error;
    }
  },

  // DELETE
  remove: async (ID_Buku) => {
    try {
      const sql = "DELETE FROM buku WHERE ID_Buku = ?";
      const [result] = await connectDb.execute(sql, [ID_Buku]);
      return result;
    } catch (error) {
      console.error("Error during DELETE:", error);
      throw error;
    }
  },
};

module.exports = Book;
