const chai = require('chai');
const should = chai.should();
const Concat = require('../../second-session/concat');

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
  
});