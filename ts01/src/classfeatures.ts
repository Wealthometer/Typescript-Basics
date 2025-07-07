// ⁋ Advance Class Features

// • Static Properties and Methods
// • Getters and Setters
// • Abstract Classes and Interfaces
// • Inheritance
// • Polymorphism

//* Static properties and methods belongs to the class itself,
//--not to instances of the class
//* They are accessed using the class name, not thee object

class Calculator {
    static PI: number = 3.142; // • Static Property

    static calculateArea(radius : number) : number { // • Static Method
        return this.PI * radius * radius;
    }
}

console.log(Calculator.PI); // • Accesing Static Property
console.log(Calculator.calculateArea(5)); // • Accesing Static Method


// • Getters and Setters
// Getters(get) are used to retrieve a property
// Setters(set) are used to update a property

class User {
    private _age : number;

    constructor (age : number) {
        this._age = age;
    }

    // Getter
    get age() : number {
        return this._age;
    }

    // Setter
    set age( newAge : number ) {
        if (newAge > 0) {
            this._age = newAge;
        } else {
            console.log("Age Must Be Positive");
        }
    }
}

const users  = new User(25);
console.log(users.age); // • Getting the Age
users.age = 30; // • Setting tge age
console.log(users.age); // • Getting the new age
users.age = 15;
console.log(users.age);


// ⁋ Abstract Classes & Interfaces
// • Abstract classes cannot be instantained directly.
// • They serve as a blueprint for other classes.
// • They can contain abstract methods (without implementation) and concrete methods.


abstract class Animal {
    abstract makeSound() : void; // • abstract method

    move() : void { // • Concrete method
        console.log("Moving...");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Bark....!");
    }
}

const myDog = new Dog();
myDog.makeSound();
myDog.move();


interface Shape {
    getArea() : number; // • Abstract Method
}

class Rectangle implements Shape {
    constructor(public width : number, public height : number) {}
    getArea() : number {
        return this.width * this.height;
    }
}

const rec = new Rectangle(5, 10);
console.log(rec.getArea());


// • Inheritance
// Inheritance allows one class (child) to inherit proprties and methods
//---- from another class

class Vehicle {
    constructor (public brand : string) {}

    drive() {
        console.log(`${this.brand} is driving`);
    }
}

class Car extends Vehicle {
    constructor (brand : string, public model : string) {
        super(brand);
    }

    displayModel() {
        console.log(`${this.brand} - ${this.model}`);
    }
}

const myCar = new Car("Toyota", "Corolla");
myCar.drive();
myCar.displayModel();


// • Polymorphism
// Polymorphism allows the same method to behave differently based
// ---on the content or class

class Shapes {
    draw() {
        console.log("Drawing a generic shape");
    }
}

class Circle extends Shapes {
    draw(): void {
        console.log("Drawing a circle");
    }
}

class Squrae extends Shapes {
    draw(): void {
        console.log("Drawing a Square");
    }
}

function renderShape(shaper : Shapes) {
    shaper.draw();
}

const shaper : Shapes[] = [new Circle(), new Squrae(), new Shapes()];
shaper.forEach(renderShape);

// • Practical Example

abstract class Employees {
    constructor (public name : string, protected salary : number) {}

    abstract getDetails() : string; // Abstarct Methos

    calculateAnnualSalary() : number {
        return this.salary * 12;
    }
}

interface Benefits {
    getBenefits() : string[];
}

class Managers extends Employees implements Benefits {
    constructor (name : string, salary : number, private department : string) {
        super(name, salary);
    }

    getDetails(): string {
        return `Manager: ${this.name}, Department: ${this.department}`;
    }

    getBenefits(): string[] {
        return ["Health Insurance", "Company Car"]
    }
}

const managers = new Managers("Alice", 5000, "IT");
console.log(managers.getDetails());
console.log("$" + managers.calculateAnnualSalary());
console.log(managers.getBenefits());

