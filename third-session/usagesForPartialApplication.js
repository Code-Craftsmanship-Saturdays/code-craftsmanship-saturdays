"use strict";

const {
    join,
    extname
} = require('path');
const {
    readdir,
    readFile,
    readFileSync
} = require('fs');

const {
    partialApply
} = require('./partialApplication');


function joinDir(directory) {
    return join(__dirname, directory);
}

function contents(file) {
    return readFileSync(file, 'utf8');
}

function showContents(...files) {
    return [...files
        .filter(elem => extname(elem) === '.dat')
        .map(elem => {
            const element = joinDir(`../test/data/${elem}`);
            return contents(element);
        })
    ].map(content => {
        return content.split("\n");
    });
}

function prettyPrintContents(joinDir) {
    return new Promise((resolve, reject) => {
        readdir(joinDir, (err, files) => {
            if (err) {
                resolve(err);
            }
            const readContent = partialApply(showContents, files)();
            resolve(readContent);
        });
    });
}

exports.printContents = prettyPrintContents;