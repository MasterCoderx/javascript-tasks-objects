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