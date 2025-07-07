"use strict";
function greet(name) {
    return `Hello, ${name}`;
}
const userName = "Wealth";
console.log(greet(userName));
//string
let username = "Wealth";
console.log(username);
//number
let age = 57;
let temperature = 36.9;
console.log(age + " years old", temperature + "°c");
//bolean
let isDeveloper = true;
console.log(isDeveloper);
// any
let data = "Hello";
data = 42;
data = true;
console.log(data);
//void
function greets() {
    console.log("Hello, World");
}
greets();
// null & undefined
let emptyVal = null;
let notAssigned = undefined;
console.log(emptyVal, ",", notAssigned);
// variable annotation
let city = "Lagos";
let population = 200000;
let isCapital = true;
console.log(city, population, isCapital);
// function annotations
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
// Explicit Typing
// it is when you declare the type of variable to avaoi confusion or errors
function multiply(c, d) {
    return c * d;
}
// it ensures that your code is clear and robust
console.log(multiply(5, 4));
// Type Inference
// it automatically infer the type of variable based on the assigned value.
// This reduces redundancy while maintaining type safety
// Simple Inference
let message = "I am learning Typescript"; // inferred a string
let count = 10; // Inferred a number
let isActive = true; //inferred a boolean
console.log(message, count, isActive);
// Inference with Functions
// If no type annotation are provided,
// Typescript infers the return type from the function body
function square(num) {
    return num * num;
}
console.log(square(15));
