//1 Write a function named greaterNum that: • takes 2 arguments, both numbers. • returns whichever number is the greater (higher) number. • Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
function greaterNum(a, b) {
    let c = (a > b) ? a : b
    console.log("greater number among" + a + " and " + b + " is " + c)

}
greaterNum(1.5, 0.5) //greater number among1.5 and 0.5 is 1.5
greaterNum(10, 2) // greater number among10 and 2 is 10
greaterNum(2, 4)// greater number among2 and 4 is 4

//2 Date
//- Display the time (hh:mm) in the console.
//- Display the day (mm.dd)

let date = new Date()

console.log(date.getHours() + ":" + date.getMinutes())

const month = date.getMonth()
const year = date.getFullYear()

console.log(month + '.' + year)


//3 We have the values 4,3,5,8; put these values in an array and display in the console:
//all the values
//the first value
//the length of the array

let num = [4, 3, 5, 8]
console.log(num)
console.log(num[0])
console.log(num.length)

// 4 Array Sort
//We have the values 4,3,5,8; put these values in a array, sort this array and console.log() this array. Result : 3,4,5,8

num.sort()
console.log(num) //[ 3, 4, 5, 8 ]

// Sort exercise

let fruit = ["🍎", "🍊", "🍎", "🍊", "🍎"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangesShelf. 
// Use a for loop a conditional statment, and textContent property.

function sortFruit() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍎") {
            appleShelf.textContent += "🍎"
        } else if (fruit[i] === "🍊") {
            orangeShelf.textContent += "🍊"
        }
    }
}
sortFruit()

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/

let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

console.log("The 5 largest countries in the world:")

for (let i = 0; i < largeCountries.length; i++) {
    console.log("- " + largeCountries[i])
}
/* output:
- China
- India
- USA
- Indonesia
- Pakistan */

// 5 For
//On this array: ['one', 'two', 'three']
//Make a for loop and, at each turn, display the value in the console.
const myArray = ["one", "two", "three"];
for (let i = 0; i < myArray.length; i++) {

    console.log(myArray[i]) // one two three
}

// 6 ForEach
//On this array: ['one', 'two', 'three']
//Make a forEach loop and, at each turn, display the value in the console.

const mySecondArray = ["one", "two", "three"];

mySecondArray.forEach(element => console.log(element))

function hello() {
    return 1
}

hello() + 2

var a = ['i', 'r', 'q', 'k', 'x', 'j']
a.indexOf('q') //2

var a = 1
a === 6
a + 1 // 2!!!!

var a = 3
a === 18
a + 2 // 5

var a = 0
a = 5
a + 1 // 6!!!

var a = 2
if (2 < 4) {
    a = 1
}
a + 3 // 4

function hi(a, b) {
    return a * b
}

function hello(a, b) {
    return hi(a, b + 2) // (3, 2+2)
}

hello(3, 2) // 12