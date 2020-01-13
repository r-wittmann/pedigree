import Fuse from "fuse.js";
const personData = require("../data/person_data");

const options = {
    shouldSort: true,
    tokenize: true,
    threshold: 0.2,
    location: 0,
    distance: 5,
    maxPatternLength: 32,
    minMatchCharLength: 3,
};

export function fuzzySearch(searchTerm, keys) {
    let fuse = new Fuse(personData, Object.assign({}, options, {keys}));
    let result = fuse.search(searchTerm, {limit: 15});
    return result;
}