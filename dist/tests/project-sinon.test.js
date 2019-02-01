"use strict";

var _common = require("./common.test");

var _sinon = require("sinon");

var _sinon2 = _interopRequireDefault(_sinon);

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _project = require("../models/project.model");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("# Project APIs Test with Sinon", function () {
    var apiBase = process.env.API_BASE || '/api';
    var newProject = {
        title: 'Project-1',
        summary: 'This is summary.',
        description: 'This is description',
        submitDate: new Date()
    };
    var should = _common.chai.should();

    before(async function () {
        var passportStub = _sinon2.default.stub(_passport2.default, "authenticate").callsFake(function (strategy, options, callback) {
            callback(null, {
                "username": "test@tech.com"
            }, null);
            return function (req, res, next) {};
        });
    });
    after(function () {
        _passport2.default.authenticate.restore();
    });
    it("should save the project", function () {
        return _common.request.post(apiBase + "/project").send(newProject).expect(200).expect(function (res) {
            res.body.success.should.be.true;
            res.body.msg.should.equal("New project is created successfully.");
        });
    });

    it("should get list of projects", function () {
        return (0, _project.cleanCollection)().then(function () {
            return _common.request.post(apiBase + "/project").send(newProject).expect(200).then(function () {
                return _common.request.get(apiBase + "/project").send().expect(200).expect(function (res) {
                    res.body.should.be.an('array').to.have.lengthOf(1);
                    var item = res.body[0];
                    item.should.have.property('title').to.equal(newProject.title);
                    item.should.have.property('summary').to.equal(newProject.summary);
                    item.should.have.property('description').to.equal(newProject.description);
                });
            });
        });
    });
});