'use strict';

var _user = require('../models/user.model');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var should = require('chai').should();

describe('# Should', function () {
    it('should create the user', function (done) {

        var newUserData = {
            "username": "should@gmail.com",
            "password": "test"
        };

        var UserModel = new _user2.default(newUserData);
        UserModel.save(function (err, data) {
            should.not.exist(err);

            should.exist(data);
            data.should.be.an('object');

            should.exist(data.id);
            data.id.should.be.a('string');

            should.exist(data.username);
            data.username.should.be.a('string');
            data.username.should.be.equal('should@gmail.com');

            should.exist(data.password);
            data.password.should.be.a('string');
            data.password.should.not.equal('test');
            data.password.length.should.be.gt(10);

            done();
        });
    });
});