function greet( name : string ): string {
    return `Hello, ${ name }`;
}

const userName : string = "Wealth";
console.log( greet ( userName ) );

//string
let username : string = "Wealth";
console.log( username );

//number
let age : number = 57;
let temperature : number = 36.9;
console.log( age + " years old" , temperature + "°c" );

//bolean
let isDeveloper : boolean = true;
console.log( isDeveloper );

// any
let data : any = "Hello";
data = 42;
data = true;
console.log(data);

//void
function greets () : void {
    console.log("Hello, World");
}

greets();

// null & undefined
let emptyVal : null = null;
let notAssigned : undefined = undefined;
console.log(emptyVal, "," , notAssigned);

// variable annotation
let city : string = "Lagos";
let population : number = 200000;
let isCapital : boolean = true;

console.log(city, population, isCapital);

// function annotations
function add( a : number , b :number ) : number {
    return a + b;
}

console.log(add(10, 20));

// Explicit Typing
// it is when you declare the type of variable to avaoi confusion or errors
function multiply( c : number , d : number ) : number {
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
let isActive = true //inferred a boolean

console.log(message, count, isActive);

// Inference with Functions
// If no type annotation are provided,
// Typescript infers the return type from the function body

function square ( num : number ) {
    return num * num;
}

console.log(square(15));