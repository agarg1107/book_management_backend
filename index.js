const express = require('express');
const dotenv = require('dotenv');
// database connection 

const Dbconnection = require("./databaseconnection");
// object of express in app


const { users } = require('./database/users.json');
const { books } = require('./database/books.json');


const userRouter = require("./routes/users.js");
const bookRouter = require("./routes/books.js");
dotenv.config()
const app = express();
Dbconnection();
const port = 8081; // local port number 


// application will now use json format for data transfer
app.use(express.json());
//http://localhost:8081/todos

app.use("/users", userRouter);
app.use("/books", bookRouter);







app.get("*", (req, res) => {
    res.status(200).json({
        message: " this route doesnot exist",
    })
})

app.listen(port, () => {
    console.log(`Nodejs server on port ${port}`)
})

