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
//  let isLoggedIn = undefined; // TODO undefined data type


//  let booleanIsLoggedIn = Boolean(isLoggedIn); //TODO converts the undefined value to a boolean value
//  console.log(booleanIsLoggedIn); //TODO Outputs: false because undefined is considered falsy in JavaScript
