const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.7) {
  alert("Random number is greater than 0.7: " + randomNumber);
}

const newArray = [21, 63, 69, 42, 96];
const evenArray = [];
// Output even numbers
for (i=0; i< newArray.length; i++) {
  if(newArray[i] % 2 === 0) {
    evenArray.push(newArray[i]);
  }
}
console.log(evenArray);

for (const number of newArray){
  console.log(number);
}