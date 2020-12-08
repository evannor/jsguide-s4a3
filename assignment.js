const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

// if (randomNumber > 0.7) {
//   alert("Random number is greater than 0.7: " + randomNumber);
// }

const newArray = [21, 63, 69, 42, 96];
const evenArray = [];
// Output even numbers
for (i=0; i< newArray.length; i++) {
  if(newArray[i] % 2 === 0) {
    evenArray.push(newArray[i]);
  }
}
console.log(evenArray);

// Print out each item in array
for (const number of newArray){
  console.log(number);
}

// Print out items of array backwards
for (i = newArray.length; i >= 0; i--) {
  console.log(newArray[i]);
}

// New random number and alerts
const newRandom = Math.random();

if (newRandom > 0.7 && randomNumber > 0.7) {
  alert("Both numbers are greater than 0.7");
} else if (newRandom < 0.2 || randomNumber < 0.2) {
  alert(randomNumber + " " + newRandom + " are the numbers");
} else {
  alert("Numbers didn't pass either conditions");
}
