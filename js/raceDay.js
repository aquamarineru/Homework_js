let raceNumber = Math.floor(Math.random() * 1000);
let registredEarly = true;

let runnerAge = 18;

if(runnerAge > 18 && registredEarly) {
  raceNumber += 1000;
}

if(runnerAge > 18 && registredEarly) {
  console.log(`Race will begin at 9:30, your race number is: ${raceNumber}`)
} else if(runnerAge > 18 && !registredEarly) {
  console.log(`Late adults run at  11:00, your race number is: ${raceNumber}`)
} else if (runnerAge < 18) {
  console.log(`Youth registrants run at 12:30 pm , your race number is: ${raceNumber}`)
} else {
  ("Please, approach the registration desk, thanks!")
}