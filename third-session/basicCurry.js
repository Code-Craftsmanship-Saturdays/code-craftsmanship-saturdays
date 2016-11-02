"use strict";

var curryWithES5 = function curryOneLevel(name) {
    return function(rank) {
        return 'name is ' + name + ' and rank is ' + rank;
    }
}

const curryWithES6 = name => rank => `name is ${name} and rank is ${rank}`;

var deepCurryExample = function curryTwoLevels(state) {
    return function(city) {
        return function (zipCode) {
            return 'state is ' + state + ' city is ' + city + ' zipCode is ' + zipCode;
        }
    }
}

const deepCurryWithES6 = state => city => zipCode => `state is ${state} city is ${city} zipCode is ${zipCode}`;

module.exports = {
    curryWithES5,
    curryWithES6,
    deepCurryExample,
    deepCurryWithES6
};