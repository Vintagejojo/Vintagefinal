const express = require('express');
const router = express.Router();

const { getAllProducts, getProductById} = require('../controller/productControllers')

// description GET all products from the database
//route  get /api/producs
//access PUBLIC
router.get('/', getAllProducts)

// description GET a products from database
//route  get /api/products/:id
//access PUBLIC
router.get('/:id', getProductById)

module.exports = router