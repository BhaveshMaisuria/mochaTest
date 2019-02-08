'use strict';

var _user = require('../models/user.model');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = require('chai').expect;

describe('# Expect', function () {
    it('should create the user', function (done) {

        var newUserData = {
            "username": "expect@gmail.com",
            "password": "test"
        };

        var UserModel = new _user2.default(newUserData);
        UserModel.save(function (err, data) {
            expect(err).to.be.null;

            expect(data).to.exist;
            expect(data).to.be.an('object');

            expect(data.id).to.ok;
            expect(data.id).to.be.a('string');

            expect(data.username).to.exist;
            expect(data.username).to.be.a('string');
            expect(data.username).to.be.equal('expect@gmail.com');

            expect(data.password).to.exist;
            expect(data.password).to.be.a('string');
            expect(data.password.length).to.be.gt(10);

            done();
        });
    });
});