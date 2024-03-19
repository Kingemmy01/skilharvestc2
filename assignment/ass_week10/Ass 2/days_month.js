//write a program that determines the days in a month using javascript

function getDaysInMonth(month, year) {
    // Months are 0-based, so January is month 0, February is month 1, etc.
    // To get the last day of the month, we set the day to 0 of the next month.
    return new Date(year, month + 1, 0).getDate();
}


const month = 10; 
const year = 2024;
const daysInMonth = getDaysInMonth(month, year);
console.log(`There are ${daysInMonth} days in the month of March ${year}.`);
