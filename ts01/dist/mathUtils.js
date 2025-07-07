"use strict";
// • Modules ...?
// A module is a file containing code that can be imported and reused in other files
// Modules enable code seperation, reusability, and maintanability
// Typescript modules adhere to the ES Modules (ESM) specification.
Object.defineProperty(exports, "__esModule", { value: true });
exports.minus = exports.plus = void 0;
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
const plus = (a, b) => a + b;
exports.plus = plus;
const minus = (a, b) => a - b;
exports.minus = minus;
