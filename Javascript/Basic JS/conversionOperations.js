//! ---------------------------------------------
//! for number conversion
//! ---------------------------------------------
// let score = "23" //TODO Number data type

// console.log(typeof score); //TODO Outputs: string
//TODO The above line shows that score is currently a string, even though it contains a number.
// console.log(typeof (score)); //TODO Outputs: string

// let valueInNumber = Number(score); //TODO  Converts the string "23" to a number
// console.log(typeof valueInNumber); //TODO Outputs: number
//!-----------------------------------------------------------------------------------------------------------------



//!-----------------------------------------------------------------------------------------------------------------
// let score = "23abc" // TODO Number data type

// console.log(typeof score); // TODO Outputs: string
//TODO  The above line shows that score is currently a string, even though it contains a number.
// console.log(typeof (score)); //TODO  Outputs: string

// let valueInNumber = Number(score); //TODO Converts the string "23" to a number
// console.log(typeof valueInNumber); //TODO Outputs: number wrong output because "23abc" cannot be converted to a number so valueInNumber will be NaN (Not a Number) 
// console.log(valueInNumber); //TODO Outputs: NaN
//!-----------------------------------------------------------------------------------------------------------------



//!-----------------------------------------------------------------------------------------------------------------
// let score = null // TODO Null data type

// console.log(typeof score); // TODO Outputs: object
//TODO  The above line shows that score is currently null, which is a special value in JavaScript.
// console.log(typeof (score)); //TODO  Outputs: object

// let valueInNumber = Number(score); //TODO converts the null value to a number
// console.log(typeof valueInNumber); //TODO Outputs: number
// console.log(valueInNumber); //TODO Outputs: 0
//!-----------------------------------------------------------------------------------------------------------------




//!-----------------------------------------------------------------------------------------------------------------
// let score = undefined // TODO Undefined data type

// console.log(typeof score); // TODO Outputs: undefined
//TODO  The above line shows that score is currently undefined, which means it has not been assigned a value.
// console.log(typeof (score)); //TODO  Outputs: undefined

// let valueInNumber = Number(score); //TODO converts the undefined value to a number
// console.log(typeof valueInNumber); //TODO Outputs: number
// console.log(valueInNumber); //TODO Outputs: NaN (Not a Number) because undefined cannot be converted to a number
// //! -----------------------------------------------------------------------------------------------------------------




// //! -----------------------------------------------------------------------------------------------------------------

// let score = true // TODO Boolean data type

// console.log(typeof score); // TODO Outputs: boolean
//TODO The above line shows that score is currently a boolean value, which can be either true or false.
// console.log(typeof (score)); // TODO Outputs: boolean

// let valueInNumber = Number(score); //TODO converts the boolean value to a number
// console.log(typeof valueInNumber); //TODO Outputs: number
// console.log(valueInNumber); //TODO Outputs: 1

//!-----------------------------------------------------------------------------------------------------------------





//!-----------------------------------------------------------------------------------------------------------------
//!-------------------------------------------------
//! for boolean conversion
//!-------------------------------------------------
// let isLoggedIn = "Harshit"; // TODO String data type


// let booleanIsLoggedIn = Boolean(isLoggedIn); //TODO converts the string "Harshit" to a boolean value
// console.log(booleanIsLoggedIn); //TODO Outputs: true because a non-empty string is considered truthy in JavaScript
//!-----------------------------------------------------------------------------------------------------------------



//!-----------------------------------------------------------------------------------------------------------------
// let isLoggedIn = ""; // TODO empty String data type


// let booleanIsLoggedIn = Boolean(isLoggedIn); //TODO converts the empty string to a boolean value
// console.log(booleanIsLoggedIn); //TODO Outputs: false because an empty string is considered falsy in JavaScript
//!-----------------------------------------------------------------------------------------------------------------



//!-----------------------------------------------------------------------------------------------------------------
// let isLoggedIn = 0; // TODO Number data type


// let booleanIsLoggedIn = Boolean(isLoggedIn); //TODO converts the number 0 to a boolean value
// console.log(booleanIsLoggedIn); //TODO Outputs: false because 0 is considered falsy in JavaScript
//!-----------------------------------------------------------------------------------------------------------------



//!-----------------------------------------------------------------------------------------------------------------
//  let isLoggedIn = null; // TODO Null data type


//  let booleanIsLoggedIn = Boolean(isLoggedIn); //TODO converts the null value to a boolean value
//  console.log(booleanIsLoggedIn); //TODO Outputs: false because null is considered falsy in JavaScript
//!-----------------------------------------------------------------------------------------------------------------



//!-----------------------------------------------------------------------------------------------------------------
//    let isLoggedIn = undefined; // TODO undefined data type


//   let booleanIsLoggedIn = Boolean(isLoggedIn); //TODO converts the undefined value to a boolean value
//   console.log(booleanIsLoggedIn); //TODO Outputs: false because undefined is considered falsy in JavaScript
//!-----------------------------------------------------------------------------------------------------------------



//!-----------------------------------------------------------------------------------------------------------------
//!-------------------------------------------------
//! for string conversion
//!-------------------------------------------------
// let message = 23; // TODO Number data type

// let  messagestring= String(message); //TODO converts the number 23 to a string value
// console.log(messagestring); //TODO Outputs: "23" because the number 23 is converted to a string
// console.log(typeof messagestring); //TODO Outputs: string because the value is now a string type 
//!-----------------------------------------------------------------------------------------------------------------



//!-----------------------------------------------------------------------------------------------------------------
// let message = true; // TODO Boolean data type

// let  messagestring= String(message); //TODO converts the boolean value true to a string value
// console.log(messagestring); //TODO Outputs: "true" because the boolean true is converted to a string
// console.log(typeof messagestring); //TODO Outputs: string because the value is now a string type  
//!-----------------------------------------------------------------------------------------------------------------



//!-----------------------------------------------------------------------------------------------------------------
// let message = ""; // TODO Empty String data type

// let  messagestring= String(message); //TODO converts the empty string to a string value
// console.log(messagestring); //TODO Outputs: "" because the empty string remains empty when converted to a string
// console.log(typeof messagestring); //TODO Outputs: string because the value is still a string type 
//!-----------------------------------------------------------------------------------------------------------------



//!-----------------------------------------------------------------------------------------------------------------
// let message = null; // TODO null data type

// let  messagestring= String(message); //TODO converts the null value to a string value
// console.log(messagestring); //TODO Outputs: "null" because null is converted to the string "null"
// console.log(typeof messagestring); //TODO Outputs: string because the value is now a string type 
//!-----------------------------------------------------------------------------------------------------------------



//!-----------------------------------------------------------------------------------------------------------------
// let message = undefined; // TODO Undefined data type

// let  messagestring= String(message); //TODO converts the undefined value to a boolean value
// console.log(messagestring); //TODO Outputs: "23" because the number 23 is converted to a string 
// console.log(typeof messagestring); //TODO Outputs: string because the value is now a string type 
//!-----------------------------------------------------------------------------------------------------------------



//!-----------------------------------------------------------------------------------------------------------------
//! Way to convert a number to a string using the unary plus operator 
// let value = 3 // TODO Number data type
// let valueInString = -value;
// console.log(valueInString); //TODO Outputs: -3 because the negative sign is applied to the number 3 
//!-----------------------------------------------------------------------------------------------------------------



//!-----------------------------------------------------------------------------------------------------------------
console.log(2+3); //TODO Outputs: 5 because the addition operator is used to add two numbers
console.log(2 - 3); //TODO Outputs: -1 because the subtraction operator is used to subtract 3 from 2
console.log(2 * 3); //TODO Outputs: 6 because the multiplication operator is used to multiply two numbers
console.log(2 / 3); //TODO Outputs: 0.6666666666666666 because the division operator is used to divide 2 by 3
console.log(2 % 3); //TODO Outputs: 2 because the modulus operator is used to find the remainder of 2 divided by 3
console.log(2 ** 3); //TODO Outputs: 8 because the exponentiation operator is used to raise 2 to the power of 3
console.log(2 + "3"); //TODO Outputs: "23" because the addition operator is used with a number and a string, resulting in string concatenation
console.log(2 - "3"); //TODO Outputs: -1 because the subtraction operator is used with a number and a string, resulting in numeric subtraction
console.log("2" + 2); //TODO Outputs: "22" because the addition operator is used with a string and a number, resulting in string concatenation
console.log("2" + 2 + 2 + 4); //TODO Outputs: "22" because the addition operator is used with a string and a number, resulting in string concatenation



//!-----------------------------------------------------------------------------------------------------------------

