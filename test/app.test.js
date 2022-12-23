let chai = require("chai");
const mongoose = require("mongoose");
require("dotenv/config");
const app = require("../app");
const { describe } = require("mocha");
const chaiHttp = require("chai-http");

chai.should();

chai.use(chaiHttp);

before(() => {
  mongoose.set("strictQuery", true);
  return mongoose.connect(process.env.DATABASE_URL);
});

after((done) => {
  return mongoose.connection.close(done);
});

describe("/GET hunts", () => {
  it("it should GET all the hunts", (done) => {
    chai
      .request(app)
      .get("/api/hunts")
      .end((err, res) => {
        res.should.have.status(200);
        const fetchedHunts = JSON.parse(res.text);
        fetchedHunts.should.be.a("object");
        fetchedHunts.hunts.map((hunt) => {
          hunt.should.include.keys(
            "location",
            "title",
            "distance",
            "startPoint",
            "id"
          );
          hunt.should.not.have.property("__v");
        });

        done();
      });
  });
});

describe("/GET hunt by id", () => {
  it("it should GET the hunt by id", (done) => {
    chai
      .request(app)
      .get("/api/hunts/63a2f9a7d6e2c5b09cef8a89")
      .end((err, res) => {
        res.should.have.status(200);
        const fetchedHunt = JSON.parse(res.text);
        fetchedHunt.hunt.should.be.a("object");
        fetchedHunt.hunt.should.have.property('title','Heaton Rush')
        fetchedHunt.hunt.should.have.property('location','Manchester')
        fetchedHunt.hunt.should.have.property('checkpoints')
        done();
      });
  });

  it("400 : invalid hunt id", (done) => {
    chai
      .request(app)
      .get("/api/hunts/15")
      .end((err, res) => {
        res.should.have.property('statusCode', 400);
        res.should.have.property('text','{"msg":"no such hunt"}')
        done();
      });
  });

  it("400 : valid but non-existent hunt id", (done) => {
    chai
      .request(app)
      .get("/api/hunts/123456789012345678901234")
      .end((err, res) => {

        res.should.have.property('statusCode', 400);
        res.should.have.property('text','{"msg":"no such hunt"}')
        done();
      });
  });
});
