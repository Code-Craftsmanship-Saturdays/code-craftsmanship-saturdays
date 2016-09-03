const chai = require('chai');
const should = chai.should();
const Promises = require('../../second-session/promises');

describe('Test promises implementation example', function() {
	
	it('Create logs directory with a file', function(done) {
      Promises.makeLogDirectory()
      .then(function(message) {
        message.should.equal('Created sample.log file for logs directory.');
        done();
      })
      .catch(function(err) {
        done(err);
      });
	});

  it('Sample log should already exist', function(done) {
    Promises.logMessage()
    .then(function(message) {
      message.should.equal('Sample Log exists');
      done();
    })
    .catch(function(err) {
      done(err)
    })
  });
  
});