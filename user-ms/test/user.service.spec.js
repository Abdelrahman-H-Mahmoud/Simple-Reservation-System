const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const {UserService,UserServiceError} = require('../src/services/user.service');

chai.use(chaiAsPromised);

const expect = chai.expect;

describe('User Service', () => {

    let userService = null
    before(function (done) {
        userService = sinon.createStubInstance(UserService);
        let data = [
            { _id: 1, name: 'Abdo', role: 'USER', bonus: 100 },
            { _id: 2, name: 'ahmed', role: 'USER', bonus: 200 },
            { _id: 3, name: 'lily', role: 'USER', bonus: 300 },
            { _id: 4, name: 'ray', role: 'USER', bonus: 400 },
        ];
        userService.findAllUsers.resolves(data);
        userService.findUserById.withArgs(1).resolves(data[0]);

        userService.subctractBonusFromUser.withArgs(1, 50).resolves({ n: 1, nModified: 1, ok: 1 });
        userService.subctractBonusFromUser.withArgs(1, 150).rejects(new UserServiceError('NotEnoughBonus'));
        done();
    });

    it('expecting findAllUsers method to return array of data', (done) => {
        expect(userService.findAllUsers())
            .to.eventually
            .to.deep
            .include({ _id: 4, name: 'ray', role: 'USER', bonus: 400 })
            .notify(done);
    });

    it('expecting findOne method to return object', (done) => {
        expect(userService.findUserById(1))
            .to.eventually
            .to.deep
            .equal({ _id: 1, name: 'Abdo', role: 'USER', bonus: 100 })
            .notify(done);
    });

    it('expecting subctractBonusFromUser method to return success', (done) => {
        expect(userService.subctractBonusFromUser(1, 50))
            .to.eventually
            .to.deep
            .equal({ n: 1, nModified: 1, ok: 1 })
            .notify(done);
    });

    it('expecting subctractBonusFromUser method to throw error', (done) => {
        expect(userService.subctractBonusFromUser(1, 150))
            .to.eventually
            .be.rejectedWith("NotEnoughBonus")
            .notify(done);
    });

});