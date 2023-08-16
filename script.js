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

