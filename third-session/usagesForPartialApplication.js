"use strict";

const {
    join,
    extname
} = require('path');
const {
    readdir,
    readFileSync,
    writeFileSync
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
        return content.split("\n")[0] === "One" 
                ? content.split("\n")
                : content[0] === "{"
                ? JSON.parse(JSON.stringify(content.trim().split("\n").join("")))
                : content.split("\n")
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
    }).then(data => {
        return createNewFileWithStory(data);
    }).catch(err => {
        return new Error(err);
    });
}

function writeContent(...info) {
    const storyNumber = Number(info[info.length-1]) + 1;
    const cleanInfo = info.slice(0, info.length-1);
    return writeFileSync(
        joinDir.call(this, `../test/data/soldier${storyNumber}.txt`), 
        cleanInfo, 
        'utf8'
    );
}

function createNewFileWithStory(data) {
    const fileName = joinDir('../test/data/soldier.txt');
    data.map( (info, index, arr) => {
        return new Promise((resolve, reject) => {
            return partialApply(writeContent, info)(index);
        })
    });
}

function averageUp(...numbers) {
    return numbers.reduce((prev, curr) => prev + curr, 0) / numbers.length;
}

function averageMultipleSets(args) {
    return partialApply(averageUp, args)();
}

exports.averageNumberSets = averageMultipleSets;
exports.printContents = prettyPrintContents;