// Javascript Objects

// Exercise 1

function isObject(value) {
    return typeof value === "object" && value !== null;
}

console.log(isObject({})); // true
console.log(isObject(null)); // false

// Exercise 2

const user = {
    name: 'John'
}

function removeProperty(propertyObject, propertyKey) {
    if (propertyObject[propertyKey] !== undefined) {
        return delete propertyObject[propertyKey];
    }
    return false
}
console.log(removeProperty(user, 'name')); // true
console.log(removeProperty(user, 'name')); // false
console.log(removeProperty(user, 'weight')); // false

console.log(user);

// Exercise 3

const firstJohn = {
    firstName: 'John',
    lastName: 'Smith'
}
const secondJohn = {
    firstName: 'John',
    lastName: 'Smith'
}
const adam = {
    firstName: 'Adam',
    lastName: 'Johnson'
}

function checkIfUsersHaveTheSameName(userOne, userTwo) {
    return (userOne['firstName'] === userTwo['firstName']) && (userOne['lastName'] === userTwo['lastName']);
}
console.log(checkIfUsersHaveTheSameName(firstJohn, secondJohn)); // true
console.log(checkIfUsersHaveTheSameName(firstJohn, adam)); // false

// Exercise 4

function getVoteCount(voters) {
    return voters['upvotes'] - voters['downvotes'];
}

console.log(getVoteCount({ upvotes: 10, downvotes: 5 })); // 5
console.log(getVoteCount({ upvotes: 75, downvotes: 90 })); // -15
console.log(getVoteCount({ upvotes: 50, downvotes: 50 })); // 0

// Exercise 5

function getCubeVolume(volume) {
    return volume['width'] * volume['length'] * volume['height'];
}

console.log(getCubeVolume({ width: 10, length: 5, height: 2})); // 100
console.log(getCubeVolume({ width: 100, length: 500, height: 0})); // 0
console.log(getCubeVolume({ width: 15, length: 2, height: 5})); // 150

// Exercise 6

function getCityInformation(cityInformation) {
    return `${cityInformation['name']} is in ${cityInformation['country']} and has an area of ${cityInformation['areaInKilometers']} square kilometers`
}

console.log(getCityInformation({
    name: 'Warsaw',
    country: 'Poland',
    areaInKilometers: 517
})); // Warsaw is in Poland and has an area of 517 square kilometers

// Exercise 7

const john = {
    firstName: 'John',
    lastName: 'Smith'
}
const newUser = getUserCopy(john);

function getUserCopy(userToCopy) {
    return Object.assign({},userToCopy);
}

console.log(newUser.firstName); // John
console.log(newUser.lastName); // Smith
console.log(newUser === john); // false <-- this is crucial

// Exercise 8

const animal = {
    name: "dog",
    legs: 4,
    color: "white"
}

function animalSentence(animalToSentence) {
    return `This ${animalToSentence.color} ${animalToSentence.name} has ${animalToSentence.legs} legs.`
}
console.log(animalSentence(animal));