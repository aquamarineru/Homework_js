// 1 Min/Max
//We have the values: 9,11,55,22
//How do we find the minimum and maximum value Display your result in the console.
console.log(Math.min(9, 11, 55, 22));
console.log(Math.max(9, 11, 55, 22));

//2 SetTimeout
//Write a script that displays "hello" in the console after 2 seconds.

function sayHi() {
    console.log('Ciao!')
}

setTimeout(sayHi, 2000);

//3 SetInterval
//Write a script that displays "hello" in the console every 2 seconds.

function sayHello() {
    console.log('Hello!')
}

setInterval(sayHello, 2000);

// 4 Fibonacci sequence

function fibonacci() {
    let a = 0
    let b = 1
    for (i = 1; i <= 10; i++) {
        console.log(a)
        let c = a + b
        a = b
        b = c
    }
}
fibonacci() // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34


// Fizz Buzz function SOSSSS!!!!! interview
function fizzBuzz(number) {
    switch (0) {
        case Number(!(!(number % 3) && !(number % 5))): return 'FizzBuzz';
        case number % 3: return 'Fizz';
        case number % 5: return 'Buzz';
        default: return a;
    }
}
console.log(fizzBuzz(0, 100));

for (let i = 0; i < 100; i++){
 
      if (i % 3 ==0 && i % 5 == 0 ){
        console.log('fizzbuzz')
      } else if (i % 5 ==0) {
        console.log('buzz')
      } else if (i % 3 == 0){
        console.log('fizz')
      } else {
        console.log(i)
      }
    }

for (let i = 0; i <= 15; i++) {
    if (i===0){
        console.log(i + " is even");
    }else if (i % 2 === 0){
        console.log(i + " is even")
    }else {
        console.log(i + " is odd")
    }
}

for (let i = 1; i < 10 ; i ++) {
    console.log(i * i)
}

for (let i = 10; i > 0; i --) {
    console.log(i)
}

for (let i = 0; i < 10; i ++) {
    console.log(i * 5)
}

for (let i = 1; i <= 10; i ++) {
    console.log(i)
}
for (let i = 0; i < 10; i ++) {
    console.log(i + 1)
}

for (let i = 0; i < 6; i ++) {
    console.log(i * 2)
}

