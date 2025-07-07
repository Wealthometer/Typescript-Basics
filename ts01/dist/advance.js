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
// cars.make = "Benz" // Invalid cos it is a readonly property
