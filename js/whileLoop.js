/* 
1.Below the cards array, declare a variable, currentCard, with the let keyword but don’t assign it a value.

2.
Create a while loop with a condition that checks if the currentCard does not have that value 'spade'.

Inside the block of your while loop, add the following line of code:

currentCard = cards[Math.floor(Math.random() * 4)];
Math.floor(Math.random() * 4) will give us a random number from 0 to 3. We’ll use this number to index the cards array, and assign the value of currentCard to a random element from that array.


Hint
Remember the != operator used for “not”.

3.
Awesome! Your loop is running, but you can’t tell because it doesn’t output anything. Let’s add a console.log() statement to our while block. Inside the block, after you assign currentCard a new value, log currentCard to the console.

For fun you can run your code a few times and see how the output changes! */

const cards = ['diamond', 'spade', 'heart', 'club'];


let currentCard;
while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard)
}