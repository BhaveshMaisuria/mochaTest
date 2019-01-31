import User from "../models/user.model";
const should = require('chai').should();

describe('# Should', () => {
    it('should create the user', (done) => {

        const newUserData = {
            "username": "should@gmail.com",
            "password": "test"
        };

        const UserModel = new User(newUserData);
        UserModel.save((err, data) => {
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