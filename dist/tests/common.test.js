"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cleanExceptDefaultUser = exports.loginWithDefaultUser = exports.should = exports.chai = exports.request = undefined;

var _user = require("../models/user.model");

var _user2 = _interopRequireDefault(_user);

var _app = require("../app");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

process.env.NODE_ENV = "test";
process.env.API_BASE = "/api";

var request = exports.request = require("supertest")(_app2.default);
var chai = exports.chai = require("chai");
var should = exports.should = chai.should();

var defaultUser = {
    "username": "bhavesh@gmail.com",
    "password": "test"
};

var createUser = async function createUser() {
    var UserModel = new _user2.default(defaultUser);
    await UserModel.save();
};

var getDefaultUser = async function getDefaultUser() {
    var users = await _user2.default.find({
        "username": defaultUser.username
    });
    if (users.length === 0) {
        await createUser();
        return getDefaultUser();
    } else {
        return users[0];
    }
};

var loginWithDefaultUser = exports.loginWithDefaultUser = async function loginWithDefaultUser() {
    var user = await getDefaultUser();
    return request.post(process.env.API_BASE + "/auth/signin").send({
        "username": defaultUser.username,
        "password": defaultUser.password
    }).expect(200);
};

var cleanExceptDefaultUser = exports.cleanExceptDefaultUser = async function cleanExceptDefaultUser() {
    var user = await getDefaultUser();
    await _user2.default.deleteMany({
        "username": {
            $ne: user.username
        }
    });
};