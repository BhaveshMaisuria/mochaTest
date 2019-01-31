import User from "../models/user.model";
const expect = require('chai').expect;

describe('# Expect', () => {
    it('should create the user', (done) => {

        const newUserData = {
            "username": "expect@gmail.com",
            "password": "test"
        };

        const UserModel = new User(newUserData);
        UserModel.save((err, data) => {
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