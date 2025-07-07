// • Modules ...?
// A module is a file containing code that can be imported and reused in other files
// Modules enable code seperation, reusability, and maintanability
// Typescript modules adhere to the ES Modules (ESM) specification.

// • ES Modules ..vs.. Typescript Modules

// ES Modules (ESM)
// • Introduced in ES6 (ECMAScript 2015.)
// • Use import and export keywords.
// • Support naivelyin modern browsers and Node.js

// Typescript Modules 
// • Built on top of ES modules
// • use the same import and export syntax
// • During Compilation, Tpescript can emit modules in different formats
//---(e.g., CommonJS, ES6)

// • Exporting code
// Exports allow you to share functions, variable, and classes between modules

export const plus = (a : number, b : number) : number => a + b;
export const minus = (a : number, b : number) : number => a - b;