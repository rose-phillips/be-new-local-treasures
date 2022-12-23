const expect = require("expect.js");
const request = require("supertest");
let chai = require('chai');
const mongoose = require("mongoose");
require("dotenv/config");
const app = require("../app");
const { describe } = require("mocha");
const assert = require("assert");
const chaiHttp = require("chai-http");
const { json } = require("body-parser");

chai.should()

chai.use(chaiHttp);

before(() => {
  mongoose.set("strictQuery", true);
  return mongoose.connect(process.env.DATABASE_URL);
});

after((done) => {
  return mongoose.connection.close(done);
});



describe('/GET hunts', () => {
  it('it should GET all the hunts', (done) => {
    chai.request(app)
        .get('/api/hunts')
        .end((err, res) => {
          
          res.should.have.status(200);
          const fetchedHunts = JSON.parse(res.text)
          fetchedHunts.should.be.a('object');
          // fetchedHunts.hunts.map(hunt => {
           
          //   hunt.should.include.keys('location','title', 'distance','startPoint', 'id')
          //   hunt.should.not.have.property('__v')
          //   hunt.should.have.property('startPoint')
            
            
          // });
             
          done();
        });
  });
});


