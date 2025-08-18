//TODO "use strict"; // treat all code as newer version of ECMAScript (ES6) for better performance and error handling
 // JavaScript we do not need to use "use strict" in modern JavaScript it is by default
// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------
//! alert(3 + 5) // This will show an alert box with the result of 3 + 5, which is 8 in our browser but we are using node.js so it will not work

console.log(3
    + 5);  //! code readability is important
    console.log(3 + 5); //! this is the preferred way to write code, it is more readable and maintainable
    
    console.log("Harshit");
//-----------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------

// TODO Data Types in JavaScript
// JavaScript has dynamic typing, meaning variables can hold values of any type and can change types.
let name = "Harshit"; // String data type
let age = 20; // Number data type
let isLoggedIn = true; //(True/False) Boolean data type

// TODO PRIMITIVE DATA TYPES
//! number => 2 to power 53
//! bigint => 2 to power 53 and above
//! string => "Hello, World!"
//! boolean => true or false
//! null => represents an intentional absence of any value / standalone value 
//! undefined => a variable that has been declared but not assigned a value
//! symbol => a unique and immutable primitive value, often used as object property keys



// TODO NON-PRIMITIVE DATA TYPES
// Non-primitive data types are more complex and can hold collections of values or more complex entities.
//! object => a collection of key-value pairs, where keys are strings and values can be any data type
// let user = { // Object data type
//     name: "Harshit",
//     age: 20,
//     isLoggedIn: true
// };
// ---------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------
// TODO Type Checking
console.log(typeof "Harshit"); // Outputs: string
console.log(typeof 23); // Outputs: number
console.log(typeof isLoggedIn); // Outputs: boolean
console.log(typeof undefined); // Outputs: undefined
console.log(typeof null); // Outputs: object (this is a known bug in JavaScript)

