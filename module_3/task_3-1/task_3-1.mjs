"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* ● Part 1
Complete the given "if" in the task_3-3.mjs file at part 1, statement so that it matches this: If I wake up at
exactly 7 o'clock then I can catch the bus to school. Run the program with different values of wake-up time
(6, 7, 8).
Print out to the HTML page the expression statement you made.

● Part 2
Extend part 1 to match this "if" and "else" statement: "If I wake up at exactly 7 o'clock, I can take the bus to
school, otherwise I have to take the car to school". Run the program with different values of wake-up time
(6, 7, 8).

● Part 3
Extend part 2 to expand more options: “If I wake up at exactly 7 o'clock, I can take the bus to school,
otherwise if I wake up exactly at 8 o'clock, I can take the train to school, otherwise I have to take the car to
school”. Run the program with a different value of wake-up time (7, 8).*/
printOut("Part 1, 2 and 3");
let wakeUpTime = 7;
if (wakeUpTime === 7) {
  printOut("My wake up time is 7, so I can take the bus to school.");
} else if (wakeUpTime === 8) {
  printOut ("My wake up time is 8, so I can take the train to school.");
} else {
  printOut ("My wake up time is neither 7 or 8, so I have to take the car to school.");
}
printOut(newLine); 

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* ● Part 4
Write an if statement that checks whether an integer variable is negative or positive, print the text
"Positive" or "Negative" accordingly. Run the program with different types of values for the variable to
check the if statement.

● Part 5
Change part 4 to print “Positive”, “Negative” or “Zero” accordingly. Run the program with different types of
values for the variable to check the "if" statement.*/

let number = -7;
if (number > 0) {
  printOut ("The number  " + number + " is positive.");
} else if (number < 0) {
  printOut ("The number " + number + " is negative.");
} else {
  printOut ("The number is zero.");
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* ● Part 6
Imagine you have a photo editing profession. And you have a website where people can upload pictures
for you to work on. However, the images must be 4MP or larger, if they are smaller, you cannot use them.
Create a variable that holds a generated random integer between 1 and 8 (inclusive). Use this variable to
simulate the uploaded image size and print it. Then create an if statement that prints out “Thank you” if the
size is equal to or greater than the limit. Otherwise, print out "The image is too small".*/
let imageSize = Math.floor(Math.random()*8)+1;
printOut("Image size: " + imageSize + "MP");
if (imageSize >= 4) {
  printOut ("Thank you.");
} else {
  printOut ("The image is too small.");
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* ● Part 7
Expand part 6 to exclude if the image size is larger or equal to 6MP, then print out “Image is too large”.*/
if (imageSize >= 6 ) {
  printOut ("Image is too large.");
} else if (imageSize >=4) {
  printOut ("Thank you");
} else {
  printOut ("The image is too small.")
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* ● Part 8
Use this code:
const monthList =["January", "February", "Mars", "April", "Mai",
"Jun", "July", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
Print if monthName contains “r”: “You must take vitamin D” else “You do not need to take vitamin D”*/

const monthList =["January", "February", "March", "April", "June", "July", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random()*noOfMonth)];
printOut("Month: " + monthName);
if (monthName.includes("r")){
  printOut ("You must take vitamin D.");
} else {
  printOut ("You do not need to take vitamin D");
}
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* ● Part 9
Expand exercise 8 to print how many days there are in the current month. And do not use date object.*/

let daysInMonth;

switch (monthName) {
  case "February":
    daysInMonth = 28;
    break;
    case "April":
      case "June":
        case "September":
          case "November":
            daysInMonth = 30;
            break;
    default:
      daysInMonth = 31;
      break;
}

printOut("Days in " + monthName + ": " + daysInMonth);
printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* ● Part 10
Imagine you have an art gallery, but you need to refurbish the premises, so you close the gallery from
March through May, but in April you have temporary premises in the building next door. Use the month
constant in exercise 8 to inform the status of your gallery in that month.*/

if (monthName === "April") {
  printOut ("The gallery is open in temporary premises in the building in the building next door.");
} else if (["March", "May"].includes(monthName)) {
  printOut ("The gallery is closed for refurbishment.");
} else {
  printOut ("The gallery is open as usual.");
}

printOut(newLine);
