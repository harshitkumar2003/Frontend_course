const score = 400
    // console.log(score) //! 400

const balance = new Number(100)
    // console.log(balance) //! [Number: 100] type with value 

// console.log(balance.toString().length) //! 3 -> count the number of string

// console.log(balance.toFixed(9)) //! 100.000000000 -> add precision depend on given value

const number = 23.232
    // console.log(number.toPrecision(4)) //! 23.23 -> print values depend on the given number in precision

const anotherNum = 30000000000
    // console.log(anotherNum.toLocaleString('en-IN')) //! 30,00,00,00,000 ->change amount in style of indian language
    // console.log(anotherNum.toLocaleString('en-US')) //! 30,000,000,000 ->change amount in style of US language


// TODO---------------------------Maths--------------------------------

console.log(Math)
    // console.log(Math.abs(-4)) //! only for -ve number convert to +ve
    // console.log(Math.round(4.3)) //!round of the number
    // console.log(Math.ceil(4.3)) //!select only top value no matter its 4.2 it take 5
    // console.log(Math.floor(4.3)) //!select only down value no matter its 4.9 it take 4
    // console.log(Math.min(4, 3, 6, 2)) //! select min value
    // console.log(Math.max(4, 3, 6, 2)) //! select max value

console.log(Math.random()) //! given values only in range 0 and 1 -> 0.1, 0 .2, 0.3
console.log((Math.random() * 10) + 1) //! for given 1 but sometime it give 0
console.log(Math.floor(Math.random() * 10) + 1) //! for avoid 0 from upper condition we use this

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min); //!for range in btw 10 to 20