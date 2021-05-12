const mysql = require("mysql2");

const productSchema = new mysql.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    countInStock: {
        type: Number,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
});

const Product = mysql.model("product", productSchema);

module.exports = Product;