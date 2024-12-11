const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());
app.use("/bookShelf", require("./routes/book.routes"));

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
});