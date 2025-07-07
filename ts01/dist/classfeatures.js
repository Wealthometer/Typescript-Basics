"use strict";
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
    static calculateArea(radius) {
        return this.PI * radius * radius;
    }
}
Calculator.PI = 3.142; // • Static Property
console.log(Calculator.PI); // • Accesing Static Property
console.log(Calculator.calculateArea(5)); // • Accesing Static Method
// • Getters and Setters
// Getters(get) are used to retrieve a property
// Setters(set) are used to update a property
class User {
    constructor(age) {
        this._age = age;
    }
    // Getter
    get age() {
        return this._age;
    }
    // Setter
    set age(newAge) {
        if (newAge > 0) {
            this._age = newAge;
        }
        else {
            console.log("Age Must Be Positive");
        }
    }
}
const users = new User(25);
console.log(users.age); // • Getting the Age
users.age = 30; // • Setting tge age
console.log(users.age); // • Getting the new age
users.age = 15;
console.log(users.age);
// ⁋ Abstract Classes & Interfaces
// • Abstract classes cannot be instantained directly.
// • They serve as a blueprint for other classes.
// • They can contain abstract methods (without implementation) and concrete methods.
class Animal {
    move() {
        console.log("Moving...");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Bark....!");
    }
}
const myDog = new Dog();
myDog.makeSound();
myDog.move();
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const rec = new Rectangle(5, 10);
console.log(rec.getArea());
// • Inheritance
// Inheritance allows one class (child) to inherit proprties and methods
//---- from another class
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
    drive() {
        console.log(`${this.brand} is driving`);
    }
}
class Car extends Vehicle {
    constructor(brand, model) {
        super(brand);
        this.model = model;
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
    draw() {
        console.log("Drawing a circle");
    }
}
class Squrae extends Shapes {
    draw() {
        console.log("Drawing a Square");
    }
}
function renderShape(shaper) {
    shaper.draw();
}
const shaper = [new Circle(), new Squrae(), new Shapes()];
shaper.forEach(renderShape);
// • Practical Example
class Employees {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    calculateAnnualSalary() {
        return this.salary * 12;
    }
}
class Managers extends Employees {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }
    getDetails() {
        return `Manager: ${this.name}, Department: ${this.department}`;
    }
    getBenefits() {
        return ["Health Insurance", "Company Car"];
    }
}
const managers = new Managers("Alice", 5000, "IT");
console.log(managers.getDetails());
console.log("$" + managers.calculateAnnualSalary());
console.log(managers.getBenefits());
