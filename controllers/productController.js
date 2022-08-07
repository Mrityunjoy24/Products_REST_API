'use strict';
let Product = require("../models/productModel")


exports.listAllProducts = async function (req, res) {

    let query = Product.find({});
    query.exec((err, product) => {
        if (err) res.send(err);
        res.json(product);
    });

};

exports.getproduct = async function (req, res) {
    try {
        let productId = req.params.productId;
        const data = await Product.findById(productId);
        console.log(data)
        res.json(data)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

};


exports.addProduct = async function (req, res) {
    try {
        var new_product = new Product(req.body);
        new_product.save(function (err, product) {
            if (err) {
                res.send(err);
            }
            else { //If no errors, send it back to the client
                res.json({
                    message: "Product successfully added!",
                    product_name: req.body.product_name
                });
            }
        });
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
};


exports.update = async function (req, res) {
    try {
        const id = req.params.productId;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Product.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
};


exports.delete = async function (req, res) {
    try {
        const id = req.params.productId;
        const data = await Product.findByIdAndDelete(id)
        res.send({ "message": `Document with ${id} has been deleted..` })
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
};