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
    name = "Harshit",
    age = 21,
}