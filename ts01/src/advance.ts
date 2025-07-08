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

// • Readonly and Index Signatures
// • The readonly modifier ensures that property can't be modified after initialization

interface Cars {
    readonly make : string;
    model : string
}

const cars : Cars = { make : "Toyota", model : "Highlander" };


cars.model = "Camry";
console.log(cars);
// cars.make = "Benz" // Invalid cos it is a readonly property

// • Index Signatures
// Index signatures allow you to define the structure of dynamic properties in an object.

interface StringMap {
    [key : string] : string
}

const translations : StringMap = {
    hello : "Hola",
    world : "Mundo"
}

console.log(translations.hello);
console.log(translations.world);

// • Restricting index signature values

interface NumberMap {
    [key : string] : number
}

const scores : NumberMap = {
    math : 95,
    science : 90
}

console.log(scores);

// • Literal Types
// Literal types allow a variable to have a specific set of values.

// String and Numeric Literals
let direction : "North" | "South" | "East" | "West"
direction = "North"
console.log(direction);
direction = "South"
console.log(direction);
direction = "East"
console.log(direction);
direction = "West"
console.log(direction);

// • Literal Types In Functions
// literal types are useful for creating safer APIs

function respond (action : "Start" | "Stop") : string {
    if (action === "Start") {
        return "Starting......";
    } else {
        return "Stopping......"
    }
}

console.log(respond("Start"));
console.log(respond("Stop"));

// • Combining Literal Types with Objects

type ButtonSize = "small" | "medium" | "large";

interface Button {
    label : string;
    size : ButtonSize;
}

const btn : Button = {
    label : "Submit",
    size : "medium"
}

console.log(btn);