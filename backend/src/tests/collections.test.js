const request = require("supertest");
const httpStatus = require("http-status-codes");
const { expect } = require("chai");
const app = require("../index");

describe("Collection APIs", () => {
  const url = "/v1/collections";
  describe(`GET ${url}`, () => {
    it("should return list of collections", () => {
      return request(app)
        .get(url)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body).to.be.an("array");
        });
    });
  });
  // describe(`POST ${url}`, () => {
  //   it("should create a collection", () => {
  //     return request(app)
  //       .post(url)
  //       .send({
  //         name: "collection name",
  //         description: "collection description",
  //         publisherId: mongoose.Types.ObjectId(),
  //       })
  //       .expect(httpStatus.CREATED)
  //       .then((res) => {
  //         expect(res.body).to.be.an("object");
  //       });
  //   });
  // });
});
