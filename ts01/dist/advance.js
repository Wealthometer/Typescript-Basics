"use strict";
// • Type Aliases and Interfaces
// • Optional and Default Properties
// • Readonly and Index Signatures
// • Literal Types
var _a;
let id1 = "\'614dd75a9693912a00f0514d\'";
console.log(id1);
const used = {
    id: "614dd75a9693912a00f0514d",
    name: "Wealth",
    isActive: true
};
console.log(used);
const emp = {
    employeeID: 81279,
    name: "Wealth"
};
console.log(emp);
const mgr = {
    employeeID: 1034,
    name: "Wealth",
    department: "IT",
    teamSize: 2
};
console.log(mgr);
const products = {
    id: 1,
    name: "Laptop"
};
console.log(products);
const config = {};
config.timeout = (_a = config.timeout) !== null && _a !== void 0 ? _a : 500;
console.log(config.timeout);
const cars = { make: "Toyota", model: "Highlander" };
cars.model = "Camry";
console.log(cars);
const translations = {
    hello: "Hola",
    world: "Mundo"
};
console.log(translations.hello);
console.log(translations.world);
const scores = {
    math: 95,
    science: 90
};
console.log(scores);
// • Literal Types
// Literal types allow a variable to have a specific set of values.
// String and Numeric Literals
let direction;
direction = "North";
console.log(direction);
direction = "South";
console.log(direction);
direction = "East";
console.log(direction);
direction = "West";
console.log(direction);
// • Literal Types In Functions
// literal types are useful for creating safer APIs
function respond(action) {
    if (action === "Start") {
        return "Starting......";
    }
    else {
        return "Stopping......";
    }
}
console.log(respond("Start"));
console.log(respond("Stop"));
const btn = {
    label: "Submit",
    size: "medium"
};
console.log(btn);
