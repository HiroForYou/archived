const request = require("supertest");
const httpStatus = require("http-status-codes");
const { expect } = require("chai");
const app = require("../index");

describe("Publisher APIs", () => {
  const url = "/v1/publishers";
  describe(`GET ${url}`, () => {
    it("should return list of publishers", () => {
      return request(app)
        .get(url)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body).to.be.an("array");
        });
    });
  });
  // describe(`POST ${url}`, () => {
  //   it("should create a publisher", () => {
  //     return request(app)
  //       .post(url)
  //       .send({
  //         name: "publisher name",
  //         description: "publisher description",
  //         imageLink: "publisher imageLink",
  //       })
  //       .expect(httpStatus.CREATED)
  //       .then((res) => {
  //         expect(res.body).to.be.an("object");
  //       });
  //   });
  // });
});
