const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below

for(let i = 0; i <rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if(rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }

}

console.log("And if you don't know, now you know.")

/* 
1.
Log each element from rapperArray in a for loop with the iterator variable i.

2.
After the for loop, log the string "And if you don't know, now you know." to the console. Note: since there’s a single quote character, ', in our string, we can use double quotes around the string to make sure character prints.

3.
Add a break inside your loop’s block that breaks out of the loop if the element at the current index in the rapperArray is 'Notorious B.I.G.'. */