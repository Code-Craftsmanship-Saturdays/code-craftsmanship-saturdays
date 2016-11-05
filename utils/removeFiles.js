const del = require('del');
const {
    join
} = require('path');

function joinPath(list) {
    return list.map(elem => {
        join(__dirname, elem);
    })
}

function removeFile(list) {
    const joinPaths = joinPath(list);
    del(joinPaths)
    .then(paths => {
        console.log(`Deleted files: ${paths.join("\n")}`);
    })
    .catch(err => console.log(err));
}

exports.removeFile = removeFile;