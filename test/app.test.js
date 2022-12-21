const assert = require("assert");
const expect = require("expect.js");
const app = require("../app");
const request = require("supertest");

describe("GET /hunts", () => {
  it("200: returns all hunts", () => {
    return request(app)
      .get("/hunts")
      .expect(200)
      .then((res) => {
        console.log(res.text);
        assert(res.text.hunts.length > 0);
        res.text.hunts.forEach((hunt) => {
          expect(hunt).to.be.an("object");
        });
      });
  });
});
