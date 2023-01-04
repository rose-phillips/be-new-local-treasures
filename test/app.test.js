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
        console.log(fetchedHunts)
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
  it.skip("it should GET the hunt by id", (done) => {
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

describe("/GET all stats", ()=> {
  it("it should GET all the stats", (done) => {
    chai
      .request(app)
      .get("/api/stats")
      .end((err, res) => {
        res.should.have.status(200);
        const fetchedStats = JSON.parse(res.text);
        fetchedStats.should.be.a("object");
        fetchedStats.stats.map((stat) => {
          stat.should.include.keys(
            "hunt",
            "time",
            "username",
            "date",
            "id"
          );
          stat.should.not.have.property("__v");
        });

        done();
      });
  });
})

describe("/GET all stats of specific hunt", ()=> {
  it("it should GET all the stats from a hunt", (done) => {
    chai
      .request(app)
      .get("/api/stats/heaton-rush")
      .end((err, res) => {
        res.should.have.status(200);
        const fetchedStats = JSON.parse(res.text);
        fetchedStats.should.be.a("object");
        fetchedStats.stats.map((stat) => {
          stat.should.include.keys(
            "hunt",
            "time",
            "username",
            "date",
            "id"
          );
          stat.should.have.property("hunt", "Heaton Rush")
          
        });

        done();
      });
  });
})

describe("POST new stat for specific hunt", ()=> {
  it("should post a stat for a specific hunt", (done) => {
    chai.request(app)
    .post("/api/stats")
    .send({hunt: 'Temple Run',
    date: '04-01-2023',
    time: 9999,
    username: 'HB123'})
    .end((err, res)=> {
      res.should.have.status(201)
      res.should.have.property('text', 'stat posted')
      done()
    })
  })
})