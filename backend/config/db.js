require('dotenv').config();
const mysql = require('mysql2');

const connectDB = async () => {
    try {
        await mysql.connect(process.env.SQL_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database connected");
    } catch (error) {
        console.error("Connection Failure");
        process.exit(1)
    }
}

module.exports = connectDB;