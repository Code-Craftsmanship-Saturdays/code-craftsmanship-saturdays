const chai = require('chai');
const should = chai.should();
const BasicCurry = require('../../third-session/basicCurry');

describe('Test All the Currying Functions', () => {
	
	it('curryWithES5 and curryWithES6 should both return a name and rank', done => {
        const config = {
            name: 'John Rambo',
            rank: 'Sergeant'
        };
        const expected = `name is ${config.name} and rank is ${config.rank}`;
        const actual = BasicCurry.curryWithES5(config.name)(config.rank);
        actual.should.equal(expected);

        const actualWithES6 = BasicCurry.curryWithES6(config.name)(config.rank);
        actualWithES6.should.equal(expected);

        const name = BasicCurry.curryWithES6(config.name);
        const rank = name(config.rank);
        rank.should.equal(expected);
        done();
    });

    it('curryWithES5 and curryWithES6 should both return function if not provided additional parameters', done => {
        const config = {
            name: 'John Rambo'
        };
        const expected = "function";
        const actual = BasicCurry.curryWithES5(config.name);
        (typeof actual).should.equal(expected);

        const actualWithES6 = BasicCurry.curryWithES6(config.name);
        (typeof actualWithES6).should.equal(expected);
        done();
    });

    it('deepCurryWithES6 and deepCurryExample should return state, city, and zipCode', done => {
        const {
            deepCurryExample,
            deepCurryWithES6
        } = BasicCurry;

        const config = {
            state: 'North Carolina',
            city: 'Raleigh',
            zipCode: '27601'
        };

        const expected = `state is ${config.state} city is ${config.city} zipCode is ${config.zipCode}`;
        const actual = deepCurryExample(config.state)(config.city)(config.zipCode);
        actual.should.equal(expected);

        const actualWithES6 = deepCurryWithES6(config.state)(config.city)(config.zipCode);
        actualWithES6.should.equal(expected);

        const state = deepCurryWithES6(config.state);
        const city = state(config.city);
        const zipCode = city(config.zipCode);
        zipCode.should.equal(expected);
        done();
    });
  
});