'use strict';

var _user = require('../models/user.model');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var assert = require('chai').assert;

describe('# Assert', function () {
    it('should create the user', function (done) {
        var newUserData = {
            "username": "assert@gmail.com",
            "password": "test"
        };

        var UserModel = new _user2.default(newUserData);
        UserModel.save(function (err, data) {
            assert.isNull(err);

            assert.isDefined(data);
            assert.isObject(data);

            assert.isDefined(data.id);
            assert.isString(data.id);

            assert.isDefined(data.username);
            assert.isString(data.username);
            assert.equal('assert@gmail.com', data.username);

            assert.isDefined(data.password);
            assert.isString(data.password);
            assert.notEqual('test');
            assert.isAbove(data.password.length, 10);

            done();
        });
    });
});