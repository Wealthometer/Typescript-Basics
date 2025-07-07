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

let someValue : unknown = "Hello, World";

// using angle bracket syntax
let strLenght1 : number = (<string>someValue).length;

// Using `as` syntax
let strLenght2 : number = (someValue as string).length;

console.log(strLenght1);
console.log(strLenght2);


// ⁋ Fumction types describes the input and output types of a function
    // • Example: Declaring a function

let sum : (a : number, b : number) => number;
sum = ( x , y ) => x + y;

console.log(sum( 5 , 3 ));

// ⁋ Call Signature
    // • Call signature are used in interfaces or typealiases to describe a function′s structure

interface MathOperation {
    (a : number , b : number) : number;
}

const product : MathOperation = (x , y) => x * y;

console.log(product(16 , 16));

// ⁋ Optional Parameters in functions
    // • you can use "?" for optional Parameters.

function greetings ( name : string , age? : number) : string {
    return age ? `Hello, ${name}. Age: ${age}` : `Hello, ${name}`;
}

console.log(greetings('Wealth'));
console.log(greetings('Wealth' , 999));

// ⁋ Generics
    // • Generics Allows you to craete multiple components that works with
    //-- multiple types instaed of a single one

// Generic Function
function indentify<T> (value : T) : T {
    return value;
}

console.log(indentify<number>(42));
console.log(indentify<string>("Hello"));

function combine<U , V> (a : U , b : V) {
    return [a , b];
}

console.log(combine<number , string>(1 , "Wealth"));

// Generic Interface
interface Pair<W , X> {
    first : W;
    second : X;
}

const pair : Pair<number, string> = {
    first : 999,
    second : "Wealth"
}

console.log(pair);

// Generic Classes
//  Defining a generic class

class Box<Y> {
    private _contents : Y;

    constructor(value : Y) {
        this._contents = value;
    }

    getContents() : Y {
        return this._contents;
    }
}

const numberBox = new Box<number>(123);
console.log(numberBox.getContents());

const stringBox = new Box<string>("Wealth");
console.log(stringBox.getContents());