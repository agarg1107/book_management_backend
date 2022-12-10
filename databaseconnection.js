const mongoose = require("mongoose");

function Dbconnection() {
    const db_url = process.env.MONGO_URL;
    mongoose.connect(db_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const db = mongoose.connection;

    db.on("error", console.error.bind(console, "Connection error: "));
    db.once("open", function () {
        console.log("Db connected...");
    });
}

module.exports = Dbconnection;