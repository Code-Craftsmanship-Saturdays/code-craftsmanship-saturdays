"use strict";

const chai = require('chai');
const should = chai.should();
const {
    join
} = require('path');

const {
    printContents
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
  
});