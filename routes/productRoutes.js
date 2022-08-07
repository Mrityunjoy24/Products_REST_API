'use strict';
let express = require('express');
module.exports = function (app) {

    let productController = require('../controllers/productController');

    app.route('/products')
        .get(productController.listAllProducts)
        .post(productController.addProduct);

    app.route('/products/:productId')
        .get(productController.getproduct)
        .put(productController.update)
        .delete(productController.delete);
};