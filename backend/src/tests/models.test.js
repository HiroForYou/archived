const request = require("supertest");
const httpStatus = require("http-status-codes");
const { expect } = require("chai");
const app = require("../index");

describe("Model APIs", () => {
  const url = "/v1/models";
  describe(`GET ${url}`, () => {
    it("should return list of models", () => {
      return request(app)
        .get(url)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body).to.be.an("array");
        });
    });
  });
  // describe(`POST ${url}`, () => {
  //   it("should create a model", () => {
  //     return request(app)
  //       .post(url)
  //       .send({
  //         name: "model name",
  //         description: "model description",
  //         publisherId: mongoose.Types.ObjectId(),
  //         taskId: mongoose.Types.ObjectId(),
  //         downloadLink: "model downloadLink",
  //         size: 48.76,
  //         sourceLink: "model sourceLink",
  //       })
  //       .expect(httpStatus.CREATED)
  //       .then((res) => {
  //         expect(res.body).to.be.an("object");
  //       });
  //   });
  // });
});
