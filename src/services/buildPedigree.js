const personData = require("../data/person_data");

export function findParents(selectedPerson) {
    if (selectedPerson.parents.length === 0) return;
    let parentObjects = [];
    for (let parentId of selectedPerson.parents) {
        parentObjects.push(personData.find(item => item.personId === parentId))
    }
    return parentObjects;
}

export function findChildren(selectedPerson) {
    let childrenObjects = [];
    for (let person of personData) {
        if (person.parents.indexOf(selectedPerson.personId) > -1) {
            childrenObjects.push(person);
        }
    }
    return childrenObjects;
}
