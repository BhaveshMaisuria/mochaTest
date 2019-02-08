"use strict";

var _common = require("./common.test");

describe("# Auth APIs", function () {
    var apiBase = process.env.API_BASE || '/api';
    var newUser = {
        "username": "test@gmail.com",
        "password": "test"
    };
    it("should create user", function () {
        return (0, _common.cleanExceptDefaultUser)().then(function () {
            return _common.request.post(apiBase + '/auth/signup').send(newUser).expect(200).then(function (res) {
                res.body.success.should.be.true;
            });
        });
    });

    it("should retrieve the token", function () {
        return (0, _common.cleanExceptDefaultUser)().then(function (res) {
            return (0, _common.loginWithDefaultUser)().then(function (res) {
                res.status.should.equal(200);
                res.body.success.should.be.true;
                res.body.token.should.not.be.empty;
            });
        });
    });

    it("should not login with the right user but wrong password", function () {
        return _common.request.post(apiBase + '/auth/signin').send({
            "username": newUser.username,
            "password": "random"
        }).expect(401);
    });

    it("should return invalid credentials error", function () {
        return _common.request.post(apiBase + '/auth/signin').send({
            "username": newUser.username,
            "password": ""
        }).expect(401).then(function (res) {
            return _common.request.post(apiBase + '/auth/signin').send({
                "username": newUser.username,
                "password": "mypass"
            }).expect(401);
        });
    });
});