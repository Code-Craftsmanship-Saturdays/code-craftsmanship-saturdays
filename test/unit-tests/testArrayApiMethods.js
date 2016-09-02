const chai = require('chai');
const should = chai.should();
const Concat = require('../../second-session/concat');
const Every = require('../../second-session/every');

describe('Array Methods API tests', function() {
	
	it('Concat should merge arbitrary number of simple arrays', function(done) {
      const data = Concat.arrayMerge({
        city: ['san diego', 'cinccinati', 'raleigh'],
        states: ['California', 'Florida', 'North Carolina'],
        zipCodes: ['45244', '28314', '33771', '12345']
      });
      data.should.have.lengthOf(10);
			done();
	});

  it('Every should return true only if all elements pass test', function(done) {
   const oneString = Every.allPassTest([1, 2, 3, 4, 5, 'pizza']);
   oneString.should.equal(false);

   const allNumbers = Every.allPassTest([6, 7, 8, 9, 10]);
   allNumbers.should.equal(true);
   done();
  });
  
});