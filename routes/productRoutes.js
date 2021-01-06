'use strict';
var express = require('express');
module.exports = function (app) {

    var product = require('../controllers/productController');

    app.route('/products')

        .get(product.products)

        .post(product.add);

    app.route('/products/:productId')

        .get(product.getproduct)

        .put(product.update)

        .delete(product.delete);

    // app.post('/', express.json(),product.mproduct);
    // app.get('/', function (req, res) {
    //     res.send("hi")
    //   })

};