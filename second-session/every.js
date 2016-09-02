function projector(arr, fn) {
  return fn(arr);
}

function allTrue(arr) {
  return projector(arr, function(arr) {
    return arr.every(function(elem) {
      return typeof elem === "number" && isFinite(elem) && Math.floor(elem) === elem;
    });
  });
}

exports.allPassTest = allTrue;