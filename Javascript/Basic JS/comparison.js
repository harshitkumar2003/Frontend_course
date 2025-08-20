//TODO Some basic comparison operators in JavaScript
// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);
// console.log(2 === 1);

//! Where is the problem? 
// TODO When comparing strings with numbers, JavaScript converts the string to a number.
// console.log("2" > 1);
// console.log("02" > 1);

//TODO comparison with null and number
console.log(null > 0); // null is converted to 0
console.log(null == 0); // null is equal to 0
console.log(null >= 0); // null is not less than 0

// TODO comparison with undefined
console.log(undefined > 0); // undefined is not a number, so it is not greater than 0
console.log(undefined == 0); // undefined is not equal to 0 
console.log(undefined < 0); // undefined is not a number, so it is not less than 0
