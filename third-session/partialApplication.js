"use strict";

const path = require('path');

/*  Generic function that takes in function 
*   and partial applies polyadic number of arguments. 
*/
const partialApplication = (fn, ...args) =>
    (...otherArgs) => 
        fn.apply(this, Array.prototype.concat.call(args, otherArgs));

