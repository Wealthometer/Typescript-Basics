"use strict";
// • Type Assertions
// • Function Types and Call Signatures
// • Generics
// • Generic Functions
// • Generic Interfaces
// • Generic Classes
// ⁋ Type Assertions
// • It is a way of telling the compiler the specific type of variable,
//-- overriding its inferred type
// • There are two ways to asserta type
// • Angle Bracket Syntax: <Type>value
// • as Syntax: value as Type
let someValue = "Hello, World";
// using angle bracket syntax
let strLenght1 = someValue.length;
// Using `as` syntax
let strLenght2 = someValue.length;
console.log(strLenght1);
console.log(strLenght2);
// ⁋ Fumction types describes the input and output types of a function
// • Example: Declaring a function
let sum;
sum = (x, y) => x + y;
console.log(sum(5, 3));
const product = (x, y) => x * y;
console.log(product(16, 16));
// ⁋ Optional Parameters in functions
// • you can use "?" for optional Parameters.
function greetings(name, age) {
    return age ? `Hello, ${name}. Age: ${age}` : `Hello, ${name}`;
}
console.log(greetings('Wealth'));
console.log(greetings('Wealth', 999));
// ⁋ Generics
// • Generics Allows you to craete multiple components that works with
//-- multiple types instaed of a single one
// Generic Function
function indentify(value) {
    return value;
}
console.log(indentify(42));
console.log(indentify("Hello"));
function combine(a, b) {
    return [a, b];
}
console.log(combine(1, "Wealth"));
const pair = {
    first: 999,
    second: "Wealth"
};
console.log(pair);
// Generic Classes
//  Defining a generic class
class Box {
    constructor(value) {
        this._contents = value;
    }
    getContents() {
        return this._contents;
    }
}
const numberBox = new Box(123);
console.log(numberBox.getContents());
const stringBox = new Box("Wealth");
console.log(stringBox.getContents());
