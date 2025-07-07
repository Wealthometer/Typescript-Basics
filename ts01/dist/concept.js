"use strict";
// arrays
let number = [1, 2, 3, 4, 5];
let names = ['Alice', 'Bob', 'Charlie'];
console.log(number, names);
// array method
number.push(6);
names.pop();
console.log(number, names);
// Tuple is a fixed lenght array where element can have a different type
// Declaring a tuple
let user = [13, "Wealth", true];
console.log(user);
// accessing and modifying a tuple
user[1] = "Wealth-Praise";
console.log(user[1]);
// Optional Elements in tuples
// defining optional tuple elements
let address = ["Wealth"];
address[1] = 16;
console.log(address);
address[2] = "Praise";
console.log(address);
address[3] = true;
console.log(address);
// Enums allows you to define a set of named constant,
// which makes code more readable
// Numeric Enum : By default, enums use numeric values starting from 0
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["East"] = 1] = "East";
    Direction[Direction["South"] = 2] = "South";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
console.log(Direction.North);
console.log(Direction[2]);
// String Enums: Assigning a string value to enum members
var StringEnum;
(function (StringEnum) {
    StringEnum["status1"] = "Active";
    StringEnum["status2"] = "Present";
    StringEnum["status3"] = "Regular";
    StringEnum["status4"] = "Punctual";
})(StringEnum || (StringEnum = {}));
console.log("StringEnum.status1 = " + '"' + StringEnum.status1 + '"');
console.log("StringEnum.status2 = " + '"' + StringEnum.status2 + '"');
console.log("StringEnum.status3 = " + '"' + StringEnum.status3 + '"');
console.log("StringEnum.status4 = " + '"' + StringEnum.status4 + '"');
console.log(StringEnum);
// Heterogenous Enums : Enums can have mixed string and Numeric value
var mix;
(function (mix) {
    mix[mix["yes"] = 1] = "yes";
    mix["no"] = "No";
})(mix || (mix = {}));
;
console.log(mix.no, mix.yes);
// Union Types
// Union types allows variables to hold values of two different type
// Declaring Union Types
let id;
id = "w3e4r5t6y7";
console.log(id);
function printId(id) {
    console.log(`ID: ${id}`);
}
printId("a1 b2 b3 c4 c5 c6 d7 e8 f9");
const manager = {
    name: "Wealth",
    age: 999,
    employeeId: 53,
    department: "IT"
};
console.log(manager);
