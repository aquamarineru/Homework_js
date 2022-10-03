/* 1.
Write a function, greetWorld(). Your function should have no parameters and return the string 'Hello, World!'.

Helpful Notes:

Your function can be a function expression or a function declaration.
Notice that the prompt requires your function to return the string—it will not pass the test if the string is printed to the console rather than returned.
Your code must return 'Hello, World!' exactly. The test will not pass with the following strings: 'hello, world!', 'Hello, world!', 'Hello World!', 'Hello World', 'Hello, World.', etc. */

const greetWorld = () => {
    return 'Hello, World!'
  }

/* 2.
The most common minimum age to vote is 18. Write a function canIVote() that takes in a number, representing the person’s age, and returns the boolean true if they are 18 years old or older, and the boolean false if they are not. */

const canIVote = age => {
    if(age >= 18){
      return true
    } else {
      return false
    }
  }
/* 3.
Write a function, agreeOrDisagree(), that takes in two strings, and returns 'You agree!' if the two strings are the same and 'You disagree!' if the two strings are different. */ 

const agreeOrDisagree = (first, second) => {
    if (first === second) {
      return 'You agree!' 
    } else {
      return 'You disagree!'
    }
  }
console.log(agreeOrDisagree("yep", "yep")) 

/* 4.
Write a function, lifePhase(), that takes in a person’s age, as a number, and returns which phase of life they are in.

Here are the classifications:
0-3 should return 'baby'
4-12 should return 'child'
13-19 should return 'teen'
20-64 should return 'adult'
65-140 should return 'senior citizen'
If the number is less than 0 or greater than 140, the program should return 'This is not a valid age' */