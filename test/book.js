process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Book = require('../models/productModel');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();


chai.use(chaiHttp);

// describe('Books', () => {
//     beforeEach((done) => {
//         Book.remove({}, (err) => {
//             done();
//         });
//     });
    describe('/GET book', () => {
        it('it should GET all the books', (done) => {
            chai.request(server)
                .get('/products')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    //res.body.length.should.be.eql(0);
                    done();
                });
        });
    });
    /*
    * Test the /POST route
    */
    describe('/POST product', () => {
        it('it should POST a product ', (done) => {
            let prod = {
                product_name: "Apple Iphone ",
                price: "700",
                category: "mobile"
            };
            chai.request(server)
                .post('/products')
                .send(prod)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Product successfully added!');
                    //res.body.product.should.have.property('product_name');
                    //res.body.book.should.have.property('price');
                    //res.body.book.should.have.property('category');
                    done();
                });
        });
    });
