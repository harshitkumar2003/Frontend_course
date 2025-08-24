//! Primitive data types in JavaScript are the most basic data types that represent single values. They include:
// 1. Number: Represents both integer and floating-point numbers.
// 2. BigInt: Represents integers with arbitrary precision.
// 3. String: Represents a sequence of characters.
// 4. Boolean: Represents a logical entity and can have two values: true or false.
// 5. Null: Represents the intentional absence of any object value.
// 6. Undefined: Represents a variable that has been declared but not assigned a value.
// 7. Symbol: Represents a unique and immutable value, often used as object property keys.

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');


console.log(id === anotherId);

const bigNumber = 4254624354264526n


//!-----------------------------------------------------------------------------------------------------------------
// Non-primitive data types in JavaScript are more complex and can hold collections of values or more complex entities. They include:
// 1. Object: A collection of key-value pairs, where keys are strings and values can be any data type.
// 2. Array 
// 3. Functions

const heros = ["Ironman", "Hulk", "Thor"];

let myObj = {
    name: "Harshit",
    age: 21
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(myFunction());

console.log(typeof myFunction); // Outputs: function
console.log(typeof heros); // Outputs: object
console.log(typeof myObj); // Outputs : object
console.log(typeof anotherId); // Outputs: symbol

//!----------------------------------------------------------------------------------------------------------------
//! Stack (PRIMITIVE DATA TYPES):
// TODO Primitive data types are stored directly in the stack memory. They are immutable and have a fixed size.
let num1 = 10;
let num2 = num1; // num2 is a copy of num1
num1 = 20; // Changing num1 does not affect num2
console.log(num1); // Outputs: 20
console.log(num2); // Outputs: 10

let name = "Harshit";
let anotherName = name; // anotherName is a copy of name
name = "John"; // Changing name does not affect anotherName
console.log(name); // Outputs: John
console.log(anotherName); // Outputs: Harshit

//! Heap (NON-PRIMITIVE DATA TYPES):
// TODO Non-primitive data types are stored in the heap memory. They are mutable and can change their size.
let user = {
    name: "Harshit",
    age: 21
};

let anotherUser = user; // anotherUser is a reference to the same object in memory
user.age = 22; // Changing user affects anotherUser

console.log(user); // Outputs: { name: 'Harshit', age: 22 }

console.log(user.age); // Outputs: 22
  
console.log(anotherUser.age); // Outputs: 22