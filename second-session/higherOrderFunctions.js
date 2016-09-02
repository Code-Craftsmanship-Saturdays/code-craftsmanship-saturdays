// List of higher order functions to illustrate higher order functions.

function stringFunc(param, fn) {
  return fn(param);
}

function toUpperCase(param) {
  return stringFunc(function(param) {
    return String.prototype.toUpperCase.call(param);
  });
}

function toLowerCase(param) {
  return stringFunc(function(param) {
    return String.prototype.toLowerCase.call(param);
  });
}

function exists(arr) {
  return stringFunc(function(arr) {
    return Array.prototype.indexOf.call(arr) > -1;
  });
}

function mapIt(arr, fn) {
  this.projectionArray = [];
  arr.forEach(function(elem) {
    this.projectionArray.push(fn(elem));
  });
  return this.projectionArray;
}

exports.stringFunc = stringFunc;
exports.toUpperCase = toUpperCase;
exports.toLowerCase = toLowerCase;
exports.exists = exists;
exports.map = mapIt;