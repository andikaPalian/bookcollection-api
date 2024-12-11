const dotenv = require("dotenv");
dotenv.config();
const mysql = require("mysql2/promise");

const connectDb = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

(async () => {
    try {
        const connection = await connectDb.getConnection();
        console.log(`Connected to database ${process.env.DB_NAME} on ${process.env.DB_HOST}`);
        connection.release();
    } catch (error) {
        console.error("Database connected failde : ", error.message);
    };
})();

module.exports = connectDb;