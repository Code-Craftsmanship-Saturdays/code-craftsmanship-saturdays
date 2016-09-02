// List of higher order functions to illustrate higher order functions.

function projector(param, fn) {
  return fn(param);
}

function toUpperCase(param) {
  return projector(param, function(param) {
    return String.prototype.toUpperCase.call(param);
  });
}

function toLowerCase(param) {
  return projector(param, function(param) {
    return String.prototype.toLowerCase.call(param);
  });
}

function exists(param, arr) {
  return projector(param, function(arr) {
    return arr.indexOf(param) > -1;
  });
}

function mapIt(arr, fn) {
  var projectionArray = [];
  arr.forEach(function(elem) {
    projectionArray.push(fn(elem));
  });
  return projectionArray;
}

exports.projector = projector;
exports.toUpperCase = toUpperCase;
exports.toLowerCase = toLowerCase;
exports.exists = exists;
exports.map = mapIt;