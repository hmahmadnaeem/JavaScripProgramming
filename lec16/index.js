console.log("\n --->>> class 16, Date Handling <<<--- \n");

var currentDate = new Date("2070-01-01T01:01:02.021Z");
console.log("--->>> current complete date is : ", currentDate);

// year
var currentYear = currentDate.getFullYear();
console.log("--->>> current year is : ", currentYear);

// month
var currentMonth = currentDate.getMonth();
console.log("--->>> current month is : ", currentMonth);

// date
var todayDate = currentDate.getDate();
console.log("--->>> current today date is : ", todayDate);

// day
var currentDay = currentDate.getDay();
console.log("--->>> current day is : ", currentDay);

// hour
var currentHour = currentDate.getHours();
console.log("--->>> current hour is : ", currentHour);

// minute
var currentMin = currentDate.getMinutes();
console.log("--->>> current minute is : ", currentMin);

// second
var currentSec = currentDate.getSeconds();
console.log("--->>> current sec is : ", currentSec);

// get week day name
var weekName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var currentDay = currentDate.getDay();
console.log("--->>> current day is : ", weekName[currentDay]);

// get month name
var monthName = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
var currentMonth = currentDate.getMonth();
console.log("--->>> current day is : ", monthName[currentMonth]);
// ---
console.log("\n");
