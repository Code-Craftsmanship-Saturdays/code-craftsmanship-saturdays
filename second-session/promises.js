const fs = require('fs');
const path = require('path');

var pathToDir = path.resolve(__dirname, "../logs");


function createLogDirectory(folder) {
  return new Promise(function(resolve, reject) {
    fs.mkdir(folder, function(err, stats) {
      if (err) {
        reject(err);
      } else {
        resolve(stats);
      }
    });
  });
}

function createSampleLogFile(directory, file) {
  return new Promise(function(resolve, reject) {
    var contents = 'I am a sample log report.';
    fs.writeFile(path.join(directory, file), contents, 'utf8', function(err, stats) {
      if (err) {
        reject(err);
      };
      resolve(stats)
    });
  });
}

function makeLogDirectoryWithSampleFile() {
  return createLogDirectory(pathToDir)
    .then(function() {
      createSampleLogFile(pathToDir, 'sample.log');
    })
    .then(function() {
      return 'Created sample.log file for logs directory.';
    })
    .catch(function(err) {
      if (err.code === 'EEXIST') {
        return "Logs directory exists already.";
      } else {
        return err;
      }
    });
}

function doesSampleLogExist(file) {
  return new Promise(function(resolve, reject) {
    fs.stat(pathToDir + '/' + file, function(err, stat) {
      if (err == null) {
        resolve("Sample Log exists");
      } else if (err.code == 'ENOENT') {
        reject("Sample Log does not exist");
      } else {
        reject(`Some other error: ${err.code}`);
      }
    });
  });
}

function sampleLogMessage() {
  return doesSampleLogExist('sample.log')
  .then(function(code) {
    return code;
  })
  .catch(function(err) {
    return err;
  });

}

exports.makeLogDirectory = makeLogDirectoryWithSampleFile;
exports.logMessage = sampleLogMessage;