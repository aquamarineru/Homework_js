
// LOOOOOOPPPPP


// 0. click run to see the output in the console

for (let i = 0; i < 7; i++) {
    console.log(["welcome", "to", "13", "for", "loop", "challenge", "exercises"][i])
  }
  
  
  
  
  
  
  
  // 1. Write a for loop that will iterate from 0 to 15. inside the loop, console.log i
  // Sample Output:
  // 01234567891011121314 
  for (let i = 0; i < 15; i++){
    console.log(i)
  }
  
  
  
  
  
  
  // 2. Write a for loop that will iterate from 0 to 3. inside the loop, console.log "i think we're trapped in a loop!"
  // Sample Output:
  // "i think we're trapped in a loop!"
  // "i think we're trapped in a loop!"
  // "i think we're trapped in a loop!"
  
  for (let i = 0; i < 3; i++) {
    console.log("i think we're trapped in a loop!")
  }
  
  
  
  
  
  
  // 3. Write a for loop that will iterate from 0 to 15. inside the loop, console.log i minus 10
  // Sample Output:
  // -10 -9 -8 -7 -6 -5 -4 -3 -2 -1 0 1 2 3 4
  
  for ( let i = 0; i < 15; i ++) {
    console.log(i - 10)
  }
  
  
  
  
  
  // 4. Write a for loop that will iterate from -10 to 0. inside the loop, console.log i
  // Sample Output:
  // -10 -9 -8 -7 -6 -5 -4 -3 -2 -1
  
  for(let i = -10; i < 0; i ++ )
    console.log(i)
  
  
  
  
  
  let total = 0
  // 5. Write a for loop that will iterate from 0 to 10. inside the loop, add i to total. after the loop console.log total
  // Sample Output:
  // 55
  
  for( i = 0; i < 10; i++ ) {
    total += i
  }
  
  console.log(total)
  
  
  
  
  
  // 6. Write a for loop that will iterate up by *2* instead of one each iteration, from 0 to 10. 
  // inside the loop, console.log i
  // Sample Output:
  // 0 2 4 6 8 10
  
  
  for (let i = 0; i < 6; i ++) {
      console.log(i * 2)
  }
  
  
  
  // 7. Write a for loop that will iterate from 0 to 10. inside the loop, console.log i plus 1
  // Sample Output:
  // 1 2 3 4 5 6 7 8 9 10
  
  for (let i = 0; i < 10; i ++) {
      console.log(i + 1)
  }
  
  
  
  
  
  
  // 8. Write a for loop that will iterate from 0 to 10. inside the loop, console.log the next i value
  // Sample Output:
  // 1 2 3 4 5 6 7 8 9 10
  
  
  for (let i = 1; i <= 10; i ++) {
      console.log(i + 1)
  }
  
  
  
  
  
  // 9. Write a for loop that will iterate from 0 to 10.
  // For each iteration of the for loop, console.log i multiplied by 5
  // Sample Output:
  // 0 5 10 15 20 25 30 35 40 45 
  
  
  for (let i = 0; i < 10; i ++) {
      console.log(i * 5)
  }
  
  
  
  
  // 10. Write a for loop that will iterate from 10 to 0. inside the loop, console.log i
  // Sample Output:
  // 10 9 8 7 6 5 4 3 2 1 
  for (let i = 10; i > 0; i --) {
      console.log(i)
  }
  
  
  
  
  
  // 11. Write a for loop that will iterate from 0 to 10.
  // For each iteration of the for loop, console.log i multiplied by itself
  // Sample Output:
  // 0 1 4 9 16 25 36 49 64 81
  
  for (let i = 1; i < 10 ; i ++) {
      console.log(i * i)
  }
  
  
  
  // 12. Write a for loop that will iterate from 0 to 15.
  // For each iteration, it will check if i is odd or even, and display a message to the screen.
  // google ***"javascript modulus operator"*** to find out how to check if a number is odd or even
  // Sample Output:
  // "0 is even"
  // "1 is odd"
  // "2 is even"
  // "3 is odd"
  
  for (let i = 0; i <= 15; i++) {
      if (i === 0){
          console.log(i + " is even");
      }else if (i % 2 === 0){
          console.log(i + " is even")
      }else {
          console.log(i + " is odd")
      }
  }
  
  // 13. fizz buzz - write a for loop that will iterate from 0 to 100.
  // for each iteration, it will check if i is divisible by 3, 5, or both 3 and 5
  // google ***"how to check if a number is divisible by another number in javascript"***
  // ask for help :D do this step by step, you don't have to complete every requirement at once
  // if i is divisible by 3, console.log "fizz"
  // if i is divisible by 5, console.log "buzz"
  // if i is divisible by 3 and 5, console.log "fizz buzz"
  // if i is not divisible by 3 or 5, console.log i
  // Sample Output:
  // fizz buzz
  // 1
  // 2
  // fizz
  // 4
  // buzz
  // fizz
  // 7
  // 8
  // fizz
  // buzz
  // 11
  // fizz
  // 13
  // 14
  // fizz buzz
  // ...etc.
  
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