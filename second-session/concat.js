// Use concat to flatten arrays among other things.
function projector(arr, fn) {
  return fn(arr);
}

function mergeArrays(obj) {
  return projector(obj, function(elem) {
    return Array.prototype.concat.apply([], Object.keys(obj).map(function(elem) {
      return obj[elem];
    }));
  });
}

exports.arrayMerge = mergeArrays;