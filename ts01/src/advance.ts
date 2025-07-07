// • Type Aliases and Interfaces
// • Optional and Default Properties
// • Readonly and Index Signatures
// • Literal Types

// • Type Aliases and Interfaces
// Type Aliases allow you to define a custom type reuse and better readability.

type UserID = string | number;

let id1 : UserID = "\'614dd75a9693912a00f0514d\'"

console.log(id1);

type Users = {
    id : number | string,
    name  : String,
    isActive : boolean
}

const used : Users = {
    id : "614dd75a9693912a00f0514d",
    name : "Wealth",
    isActive : true
}

console.log(used);

// Interfaces determine or defines the structure of an object.
// They are more flexible than aliases in some cases.


interface Employed {
    employeeID : number
    name : string
    department? : string //Optional Property
}

const emp : Employed = {
    employeeID : 81279,
    name  : "Wealth"
}

console.log(emp);

interface ManagerS extends Employed {
    teamSize : number;
}

const mgr : ManagerS = {
    employeeID : 1034,
    name  : "Wealth",
    department : "IT",
    teamSize : 2
}

console.log(mgr);

// Difference between Type Aliases and Interfaces
// • Interfaces : Used for Objects and can be extended
// • Type Aliases : Used for any Type (e.g, union type, primitives, e.t.c) but cannot be extended directly


// • Optional and Default Properties

// • Optional Properties
// Use ? to male a property optional in an object or interface

interface Product {
    id : number;
    name : string;
    description? : string;
}

const products : Product = {
    id : 1, 
    name : "Laptop"
}

console.log(products);

// • Default Properties
// Typescript doesn't provide native support for default values in interfaces or types,
// but you can set defaults when creating objects

interface Config {
    timeout? : number;
}

const config : Config = {};
config.timeout = config.timeout ?? 500;
console.log(config.timeout);