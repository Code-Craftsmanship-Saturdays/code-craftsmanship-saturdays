const chai = require('chai');
const should = chai.should();
const BasicCurry = require('../../third-session/basicCurry');
const AdvancedCurry = require('../../third-session/advancedCurry');

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

    it('curryItUp should sum up values', done => {
        const {
            counter,
            curryItUp,
            counterES6,
            curryItUpES6
        } = AdvancedCurry;

        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const otherNumbers = [11, 12, 13, 14, 15];
        const expected = numbers.concat(otherNumbers).reduce((prev, curr) => prev + curr, 0);

        const curryValues = curryItUp(counter, numbers);
        const sumValues = curryValues(otherNumbers);
        sumValues.should.equal(expected);

        const expectedValue = numbers.reduce((prev,curr) => prev + curr, 0);
        
        const curryWithNumbers = curryItUpES6(counterES6, 1, 2, 3, 4, 5);
        const sumValuesWithNumbers = curryWithNumbers(6, 7, 8, 9, 10);
        sumValuesWithNumbers.should.equal(expectedValue);

        const curryWithArray = curryItUpES6(counterES6, numbers);
        const sumValuesWithArray = curryWithArray(otherNumbers);
        sumValuesWithArray.should.equal(expected);
        done();
    });
  
});