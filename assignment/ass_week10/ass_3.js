// write a program that determines the grade of a student based on the student's score
// A - 70 - 100
// B - 60 - 69
// C - 50 - 59
// D - 40 - 49
// F - 0 - 39
const score = 40;
if (score >= 70 && score <= 100) {
    console.log('A');
} else if (score >= 60 && score <= 69) {
    console.log('B');
} else if (score >= 50 && score <= 59) {
    console.log('c');
} else if (score >= 40 && score <= 49) {
    console.log('D');
} else if (score >= 0 && score <= 39) {
    console.log('F');
}
else {
    console.log("Invalid Number");
}

