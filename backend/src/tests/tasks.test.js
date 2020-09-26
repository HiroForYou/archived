const request = require("supertest");
const httpStatus = require("http-status-codes");
const { expect } = require("chai");
const app = require("../index");

describe("Task APIs", () => {
  const url = "/v1/tasks";
  describe(`GET ${url}`, () => {
    it("should return list of tasks", () => {
      return request(app)
        .get(url)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body).to.be.an("array");
        });
    });
  });
});
