const chai = require('chai');
const should = chai.should();
const HigherOrderFunctions = require('../../second-session/higherOrderFunctions');

describe('Higher Order Functions API tests', function() {
	
	it('toUpperCase function should return string uppercased', function(done) {
      const city = HigherOrderFunctions.toUpperCase('cincinnati');
      city.should.equal('CINCINNATI');
			done();
	});

  it('toLowerCase function should return string lowercase', function(done) {
      const pizza = HigherOrderFunctions.toLowerCase('PiZZa');
      pizza.should.equal('pizza');
			done();
	});

  it('Exists should be true if string exists in array', function(done) {
      const tacos = HigherOrderFunctions.exists('tacos', ['pizzas', 'tacos', 'pastries']);
      tacos.should.equal(true);
			done();
	});

  it('Map should return new copy', function(done) {
    const newCopy = HigherOrderFunctions.map(['one', 'two', 'three'], function(elem) {
      return elem + ' and ';
    });
    newCopy.should.include('one and ');
    done();
  });
  
});