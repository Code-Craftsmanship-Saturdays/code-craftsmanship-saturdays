"use strict";

const chai = require('chai');
const should = chai.should();
const {
    join
} = require('path');

const {
    printContents,
    averageNumberSets
} = require('../../third-session/usagesForPartialApplication');

describe('Test Usages of Partial Application', () => {
	it('prettyPrintContents should print out contents of dat files', done => {
        const datPath = 'test/data';
        const expectedNumLetter = 'One';
        const expectedSoldier = 'Rambo,John,Army,Sergeant First Class';
        const expectedObject = "{";
        printContents(datPath).then(contents => {
            const numLetters = contents.filter(content => {
                return content[0] === expectedNumLetter;
            });
            numLetters.should.equal(expectedNumLetter);

            const soldiers = contents.filter(content => {
                return content[0] === expectedSoldier;
            });
            soldiers.should.equal(expectedSoldier);

            const obj = contents.filter(content => {
                return content[0] === expectedObject;
            });
            obj.should.equal(expectedObject);
            done();
        }).catch(err => {
            done();
        });
    });
  
    it('averageNumberSets should return an average for 2 or more sets', done => {
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
            .reduce((prev,curr) => prev + curr, 0) 
                / [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].length;

        const numbers = [1, 2, 3, 4, 5];
        const otherNumbers = [6, 7, 8, 9, 10];
        const moreNumbers = [11, 12, 13, 14, 15];

        const average = averageNumberSets(Array.prototype.concat.apply([], numbers.concat(otherNumbers, moreNumbers)));
        average.should.equal(expected);
        done();
    });
});