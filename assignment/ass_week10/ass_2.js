// Assignment Two
// write a program that determins the time of the day
// based on current time and greet users acccordingly
// 12am - 12pm - Good morning
// 12pm - 6pm - Good afternoon
// 6pm - 12am - Good evening
//Tip: Use the date object to get the current time

const hour = new Date().getHours(); 
let greeting;

if (hour => 0 && hour < 12) {
  greeting = "Good morning";
  
} else if (hour => 12 && hour < 18)
{
  greeting = "Good afternoor";
}
else if (hour => 18 && hour < 24)
{
 greeting = "Good evening"
}
else {
  greeting = "Invalid time"
}
console.log(greeting)