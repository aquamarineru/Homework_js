const getSleepHours = day => {
    if(day === 'Monday') {
      return 8
    } else if (day === 'Tuesday') {
      return 7
    } else if (day === 'Wednesday') {
      return 8
    }else if (day === 'Thursday') {
      return 6
    }else if (day === 'Friday') {
      return 8
    }else if (day === 'Saturday') {
      return 9
    }else if (day === 'Sunday') {
      return 9
    } else {
      return 'Error!'
    }
  }
  console.log(getSleepHours('Tuesday'));
  
  const getActualSleepHours = () =>
  getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday')
  
  console.log(getSleepHours('Monday'))
  
  const getIdealSleepHours = () => {
    let idealHours = 8
    return idealHours * 7
  }
  console.log(getIdealSleepHours())
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours()
  
    const idealSleepHours = getIdealSleepHours()
    if(actualSleepHours === idealSleepHours) {
      console.log("You get the perfect amount of sleep")
    }else if(actualSleepHours > idealSleepHours) {
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' more hour(s) of sleep this week')
    } else if(actualSleepHours < idealSleepHours) {
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.')
  } else {
    console.log("Error! Something went wrong, check your code!")
  }
  }
  calculateSleepDebt()
  const numberDigits = (x) => {
    if(x => 0 && x <= 9) {
  return `One digit: ${x}`;
  }
  else if(x => 10 && x <= 99) {
  return `Two digit: ${x}`;
  }
  else {
  return `The number is: ${x}`;
  }
  }