/**
 * Created on 03.2018.
 */

'use strict';

const request = require("supertest");

const server   = require("../server");

describe("Our amazing site", function () {
    after(function (done) {
        server.close();
        return done();
    });

    it("has a nice welcoming message", function (done) {
        return request(server)
            .get("/")
            .expect("Страница Koa.")
            .end(done);
    });
});