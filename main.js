let raceNumber = Math.floor(Math.random() * 1000);
// check is runner registred early or not 
let runnerEarlyRegistration = true;
// runners age
const runnerAge = 10;
//checks is runner adult and registered earlier and give him a number
if (runnerAge > 18 && runnerEarlyRegistration) {
  raceNumber += 1000;
  //console.log(`${raceNumber}`);
}
// says when race for 18+ and early registration starts
if (runnerAge > 18 && runnerEarlyRegistration) {
  console.log(`${raceNumber} race starts at 9:30 am.`);
} else if (runnerAge > 18 && !runnerEarlyRegistration) {
  console.log(`${raceNumber} race starts at 11:00 am.`)
} else if (runnerAge < 18) {
  console.log(`${raceNumber} race starts at 12:30 pm.`)
} else{
  console.log('Please, visit a registration desk.')
}
