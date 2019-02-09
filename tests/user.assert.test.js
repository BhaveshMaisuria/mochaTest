import User from "../models/user.model";
const assert = require('chai').assert;

describe('# Assert', () => {
    it('should create the user', (done) => {
        const newUserData = {
            "username": "assert@gmail.com",
            "password": "test"
        };

        const UserModel = new User(newUserData);
        UserModel.save((err, data) => {
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