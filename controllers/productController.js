'use strict';
const dfff = require('dialogflow-fulfillment');
var express = require('express');
//const functions = require('firebase-functions');
const { WebhookClient } = require('dialogflow-fulfillment');

exports.products = function (req, res) {

    let query = Product.find({});
    query.exec((err, product) => {
        if(err) res.send(err);
        //If no errors, send them back to the client
        res.json(product);
    });

};

exports.getproduct = function (req, res) {

    var productId = req.query.productId;

    Product.findById(mongoose.Types.ObjectId(productId), function (err, product) {

        if (err)
            res.send(err);
        res.json(product);

    });

};


// exports.mproduct = function (req, res) {

//     var productId = req.query.productId;

//     Product.findById(mongoose.Types.ObjectId(productId), function (err, product) {

//         if (err)
//             res.send(err);
//         res.json(product);

//     });
    // var intentMap = new Map();
   
    // const agent = new dfff.WebhookClient({ request: req, response: res });
    
    // let r=req.body.queryResult.parameters.product;
    // //Product.find(function (err, product) {
    //     function welcome(agent) {
    //         agent.add("Welcome, Im a onlinestore agent!. which phone you want to choose?");
    //         // product.forEach(element => {
    //         //     //console.log(element.price);
    //         //     agent.add(element.product_name);
    //         // });

    //     }

    //     function bookFlight(agent) {
    //         agent.add("hello")
    //         //agent.add(product);
    //     }


    //     function fallback(agent) {
    //         agent.add("I didn't understand");
    //         agent.add("I'm sorry, can you try again?");
    //     }


    //     function getdetails(agent) {
    //         agent.add("Iphone");
    //         Product.find({ "product_name": r }, function (err, product) {
    //         product.forEach(element => {
    //             //console.log(element.price);
    //             if (element.product_name === r) {
    //                 agent.add("Name: "+element.product_name);
    //                 agent.add("Price: "+element.price);
    //                 agent.add("Category: "+element.category);
    //             }
    //         });
    //      });

    //     }


    //     intentMap.set('Default Welcome Intent', welcome);
    //     intentMap.set('Default Fallback Intent', fallback);
    //     intentMap.set('BookFlight', bookFlight);
    //     intentMap.set('Getdetails', getdetails);
    //     agent.handleRequest(intentMap);

    //});

//}

exports.add = function (req, res) {

    var new_product = new Product(req.body);

    new_product.save(function (err, product) {

        if(err) {
            res.send(err);
        }
        else { //If no errors, send it back to the client
            res.json({
                message: "Product successfully added!",
                product_name: "hi"
            });
        }

    });

};



exports.update = function (req, res) {

    var id = mongoose.Types.ObjectId(req.query.productId);

    Product.findOneAndUpdate({ _id: id }, req.body, { new: true }, function (err, product) {

        if (err)
            res.send(err);

        res.json(product);

    });

};

exports.delete = function (req, res) {

    var id = mongoose.Types.ObjectId(req.query.productId);

    Product.remove({ _id: id }, function (err, product) {

        if (err)
            res.send(err);

        res.json({ message: 'Product successfully deleted' });

    });

};