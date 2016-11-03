"use strict";

var counter = function() {
    var numbers = Array.prototype.slice.call(arguments);
    return numbers.reduce(function(prev, curr) {
        return prev + curr;
    }, 0);
}

var curryItUp = function(fn) {
    var args = Array.prototype.slice.call(arguments, 1)[0];
    return function() {
        var otherArgs = Array.prototype.slice.call(arguments)[0];
        return fn.apply(this, args.concat(otherArgs));
    }
}

const counterES6 = (...numbers) => numbers.reduce((prev, curr) => prev + curr, 0);

const curryItUpES6 = (fn, firstNumbers) => (secondNumbers) => fn.apply(this, firstNumbers.concat(secondNumbers));

module.exports = {
    counter,
    curryItUp,
    counterES6,
    curryItUpES6
}