const payload = require('../netflixPayload.js');

const flattenPayload = payload["netflixPayload"].reduce( (item) => {
    return item;
});

console.log(flattenPayload);