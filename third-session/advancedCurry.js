"use strict";

var counter = function() {
    var numbers = Array.prototype.slice.call(arguments);
    return numbers.reduce(function(prev, curr) {
        return prev + curr;
    }, 0);
}

var curryItUp = function(fn, firstNumbers) {
    let args;
    if (!Array.isArray(firstNumbers)) {
        args = Array.prototype.slice.call(arguments, 1);
    }
    return function(secondNumbers) {
        let otherArgs;
        if (!Array.isArray(secondNumbers)) {
            otherArgs = Array.prototype.slice.call(arguments);
            return fn.apply(this, Array.prototype.concat.call(args, otherArgs));
        }
        return fn.apply(this, Array.prototype.concat.call(firstNumbers, secondNumbers));
    }
}

const counterES6 = (...numbers) => 
    numbers.reduce((prev, curr) => prev + curr, 0);

const curryItUpES6 = (fn, ...firstNumbers) => 
    (...secondNumbers) => {
        return fn.apply(
            this, 
            Array.prototype.concat.call(...firstNumbers, ...secondNumbers)
        );
}
                    
module.exports = {
    counter,
    curryItUp,
    counterES6,
    curryItUpES6
}