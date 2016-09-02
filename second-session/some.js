function projector(arr, fn) {
  return fn(arr);
}

function someArbitraryStringExists(arr, param) {
  return projector(arr, function(arr) {
    return arr.some(function(elem) {
      return elem === param;
    });
  });
}

exports.itExists = someArbitraryStringExists;