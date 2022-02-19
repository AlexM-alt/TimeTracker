let chai = require("chai");
let chaiHTTP = require("chai-http");
let server = require("../src/app")

chai.should();

chai.use(chaiHTTP);

describe("Tasks API", () => {
  /**
   * Test Create Work
   */
  describe("GET /");

  /**
   * Test End Work
   */

  /**
   * Get All Works
   */
  describe("GET /", () => {
    it("It should GET all the", (done) => {
      chai
        .request(server)
        .get("/")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("array");
          response.body.length.should.be.eq(2);
          done();
        });
    });
  });

  /**
   * Get Create Analysis
   */
});
