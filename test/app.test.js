const expect = require("expect.js");
const request = require("supertest");
const mongoose = require("mongoose");
require("dotenv/config");
const app = require("../app");

before(() => {
  mongoose.set("strictQuery", true);
  return mongoose.connect(process.env.DATABASE_URL);
});

after((done) => {
  return mongoose.connection.close(done);
});

describe("GET /hunts", () => {
  it("200: returns all hunts", (done) => {
    request(app)
      .get("/api/hunts")
      .expect(200)
      .then((res) => {
        const fetchedHunts = JSON.parse(res.text).hunts;
        fetchedHunts.forEach((hunt) => {
          expect(hunt).to.be.an("object");
        });
      })
      .catch((err) => {
        throw err;
      })
      .finally(() => {
        done();
      });
  });
});
