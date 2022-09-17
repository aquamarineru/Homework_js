// javascript ternary operator

// ternary operator is a shorthand way of writing an if statement
// its useful when you want to assign a value to a variable based on a condition

// syntax:
// condition ? value if true : value if false

// example:
let x = 5
let y = x > 10 ? 10 : x
console.log(y) // 5

// HOMEWORK: 
// 1. write a ternary operator that assigns a value to a variable based on a condition (like a variable that is either true or false (a boolean))
const number = 5
const result = number >= 5 ? console.log("Done!") : console.log("Error!") // Done
// 2. write a ternary operator that assigns a value to a variable based on a condition and uses another ternary operator as one of the values

const carSpeed = 130
const speedLimit = carSpeed > 120 ? console.log('Way Too Fast!!') :
    carSpeed >= 80 ? console.log('You may go!') :
        carSpeed >= 60 ? console.log('Hit the gas!') : console.log('Turtle!')
console.log(speedLimit)