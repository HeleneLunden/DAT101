"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/*Use JavaScript to calculate the following expression, ensuring the result is -34:
2 + 3 * 2 - 4 * 6
Display both the original expression and the modified expression (with parentheses) along with their
results on the HTML page.*/ 
const originalExpression = 2 + 3 * 2 - 4 * 6;
const modifiedExpression = 2 + 3 * (2 - 4) * 6;

printOut("originalExpression =" + originalExpression);
printOut("modifiedExpression =" + modifiedExpression)
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/*Convert 25 metres and 34 centimeters to inches. An inch is 25.4 millimeters (maximum 2 decimal places in
the answer). */
const meters = 25;
const centimeters = 34;
const totalMillimeters = (meters*1000) + (centimeters*10);
const inches = (totalMillimeters / 25.4).toFixed(2);
printOut("inches = " + inches);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Convert 3 days, 12 hours, 14 minutes, and 45 seconds to minutes. (Not allowed to use date objects). The
task must be solved with primitives.*/
const days = 3
const hours = 12
const minutes = 14
const seconds = 45
const totalMinutes = (days*24*60) + (hours*60) + minutes + (seconds/60);
printOut("totalMinutes = " + totalMinutes);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Convert 6,322.52 minutes to days, hours, minutes, and seconds. (Not allowed to use date objects). The
task must be solved with primitives.*/
let totalMinutesPart4 = 6322.52;
//Converting to whole days//
let daysPart4 = Math.floor(totalMinutesPart4 / 1440);
totalMinutesPart4 %= 1440;
//Converting to whole hours//
let hoursPart4 = Math.floor(totalMinutesPart4/60);
totalMinutesPart4 %= 60;
//Remaining minutes//
let minutesPart4 = Math.floor(totalMinutesPart4);
//Remaining seconds//
let secondsPart4 = Math.floor((totalMinutesPart4-minutesPart4) *60);

printOut("daysPart4 = " + daysPart4);
printOut("hoursPart4 = " + hoursPart4);
printOut("minutesPart4 = " + minutesPart4);
printOut("secondsPart4 = " + secondsPart4);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Convert 54 dollars to Norwegian kroner, and print the price for both:
NOK → USD and USD → NOK.
Use 76 NOK = 8.6 USD as the exchange rate.
The answer must be in whole "Kroner" and whole "dollars".*/
let dollars = 54;
let usdToNokRate = 76 / 8.6;
let nok = Math.round(dollars*usdToNokRate);
let nokToUsdRate = 8.6 / 76;
let convertedDollars = Math.round(nok*nokToUsdRate);
printOut("USD to NOK: " + nok + " NOK");
printOut("NOK to USD: " + convertedDollars + " USD");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Create a variable that contains the following text:
"There is much between heaven and earth that we do not understand."*/
let text = "There is much between heaven and earth that we do not understand."
//● Print the number of characters in the text.//
printOut("Number of characters: " + text.length);
//● Print the character at position number 19.//
printOut("Character at position 19: " + text.charAt(19));
//● Print the characters starting at position number 35 and 8 characters forward.//
printOut("Characters from 35, and 8 characters forward: " + text.substr(35, 8));
//● Print the index at which "earth" starts in the text//
printOut("Index of earth: " + text.indexOf("earth"));
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Comparison, print the values for the following expressions (evaluate whether the statements are true):*/
// ● Is 5 greater than 3?//
if (5 > 3) {
    printOut("5 is greater than 3");
} else {
    printOut("5 is not greater than 3");
}
// ● Is 7 greater than or equal to 7?//
if (7 >= 7) {
    printOut("7 is greater than or equal to 7");
} else {
    printOut("7 is less than 7");
}
// ● Is "a" greater than "b"?//
if ("a" > "b") {
    printOut("'a' is greater than 'b'");
} else {
    printOut("'a' is not greater than 'b'");
}
// ● Is "1" less than "a"?//
if ("1" < "a") {
    printOut("'1' is less than 'a'");
} else {
    printOut("'1' is not less than 'a'");
}
// ● Is "2500" less than "abcd"?//
if ("2500" < "abcd") {
    printOut("'2500' is less than 'abcd'");
} else {
    printOut("'2500' is not less than 'abcd'");
}
// ● "arne" is not equal to "thomas".//
if ("arne" !== "thomas") {
    printOut("'arne' is not equal to 'thomas'");
} else {
    printOut("'arne' is equal to 'thomas'");
}
// ● (2 equals 5) is this statement true?//
if (2 === 5) {
    printOut("2 equals 5: this statement is true");
} else {
    printOut("2 equals 5: this statement is not true");
}
// ● ("abcd" is greater than "bcd") is this statement false?//
if ("'abcd' > 'bcd'") {
    printOut("'abcd' > 'bcd': this statement is not false");
} else {
    printOut("'abcd' > 'bcd': this statement is false");
}
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/*Convert and print the following expressions:*/
//● from text "254" to a number//
let num1 = parseFloat("254");
printOut("num1 = " + num1);
//● from text "57.23" to a number//
let num2 = parseFloat(57.23);
printOut("num2 = " + num2);
//● from text "25 kroner" to a number//
let num3 = parseFloat("25 kroner");
printOut("num3 = " + num3 + " kroner");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/*Create a variable "r" and randomly generate a number from 1 to 360 (1 >= r <= 360).*/
let r = Math.floor(Math.random()*360) + 1;
printOut("Random number from 1 to 360: " + r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/*Use modulus (%) to calculate how many weeks and days are in 131 days.*/
let totalDays = 131;
let weeks = Math.floor(totalDays/7);
let remainingDays = totalDays % 7;
printOut("Weeks: " + weeks + ", Days: " + remainingDays);
printOut(newLine);