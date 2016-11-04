"use strict";

var counter = function() {
    var numbers = Array.prototype.slice.call(arguments);
    return numbers.reduce(function(prev, curr) {
        return prev + curr;
    }, 0);
}

var curryItUp = function(fn) {
    var args = Array.isArray(Array.prototype.slice.call(arguments, 1)) 
                ? Array.prototype.slice.call(arguments, 1)[0]
                : Array.prototype.slice.call(arguments, 1);
    return function() {
        var otherArgs = Array.isArray(Array.prototype.slice.call(arguments))
                        ? Array.prototype.slice.call(arguments)[0]
                        : Array.prototype.slice.call(arguments);
        return fn.apply(this, args.concat(otherArgs));
    }
}

const counterES6 = (...numbers) => 
    numbers.reduce((prev, curr) => prev + curr, 0);

const curryItUpES6 = (fn, ...firstNumbers) => (...secondNumbers) => {
    return fn.apply(this, Array.prototype.concat.call(...firstNumbers, ...secondNumbers));
}
                    

module.exports = {
    counter,
    curryItUp,
    counterES6,
    curryItUpES6
}