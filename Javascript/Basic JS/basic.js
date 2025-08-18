// TODO Javacript series 
// This is a simple JavaScript file to demonstrate basic syntax and functionality

// TODO what is console.log in JavaScript?
// console.log is a function used to print messages to the web console, which is useful for debugging purposes.
console.log("Hello, World!");
// It outputs the string "Hello, World!" to the console.

// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------

// TODO Variables in JavaScript
// Variables are used to store data values. In JavaScript, you can declare variables using var, let, or const.
const accountId = 1011; // const is used for constants that won't change
let acountEmail = "harshit@gmail.com"; // let is used for variables that can change
var accountPassword = "12345"; // var is an older way to declare variables, but still valid 
accountCity = "Meerut"; // If you don't declare a variable with var, let, or const, it becomes a global variable
// -----------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------
// ! Reassigning variables
// accountId = 2022; // This will throw an error because accountId is a constant and cannot be reassigned
accountEmail = "HCHC@.com"; // This is valid because acountEmail is declared with let and can be reassigned
accountPassword = "67890"; // This is valid because accountPassword is declared with var and can be reassigned
accountCity = "Delhi"; // This is valid because accountCity is declared with let and can be reassigned
console.log(accountId); // Outputs: 1011 
console.table([accountId, acountEmail, accountPassword, accountCity]); // Outputs the variables in a table format
