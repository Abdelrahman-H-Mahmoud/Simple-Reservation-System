const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
const UserRepo = require('../src/repositories/user.repo');

chai.use(chaiAsPromised);

const expect = chai.expect;

describe('User Repo', () => {

    let userRepo = null
    before(function (done) {
        userRepo = sinon.createStubInstance(UserRepo);
        let data = [
            { _id: 1, name: 'Abdo', role: 'USER', bonus: 100 },
            { _id: 2, name: 'ahmed', role: 'USER', bonus: 200 },
            { _id: 3, name: 'lily', role: 'USER', bonus: 300 },
            { _id: 4, name: 'ray', role: 'USER', bonus: 400 },
        ];
        userRepo.find.resolves(data);
        userRepo.findOne.resolves(data[0]);
        userRepo.updateOne.withArgs({_id:1},{bonus:500}).resolves({ n: 1, nModified: 1, ok: 1 });
        done();
    });

    it('expecting find method to return array of data', (done) => {
        expect(userRepo.find()).to.eventually
            .to.deep
            .include({ _id: 4, name: 'ray', role: 'USER', bonus: 400 })
            .notify(done);
    });

    it('expecting findOne method to return object', (done) => {
        expect(userRepo.findOne()).to.eventually
            .to.deep
            .equal({ _id: 1, name: 'Abdo', role: 'USER', bonus: 100 })
            .notify(done);
    });

    it('expecting updateOne method to return success', (done) => {
        expect(userRepo.updateOne({_id:1},{bonus:500})).to.eventually
            .to.deep
            .equal({ n: 1, nModified: 1, ok: 1 })
            .notify(done);
    });

});