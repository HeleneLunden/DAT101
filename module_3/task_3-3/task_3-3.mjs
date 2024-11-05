"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* ● Part 1 (3 points)
Create a function that takes no parameters and returns no values. Have it print today's date in the
Norwegian standard. Example: "Friday, October 18, 2019" Use an example from this resource:
toLocaleString , Use "no-NB" as an alias for the Norwegian language in the function call to
"toLocaleDateString"*/

function printTodaysdate() {
    let today = new Date();
    
    let date1 = today.toLocaleDateString('no-NB',{
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
    } );
    
    printOut(date1);
    }
    
    printTodaysdate();
    printOut(newLine);
    

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* ● Part 2 (20 points)
Level Up Your Date Function: Take your "Today's Date" function from Task 1 and supercharge it! Not
only should it display today's date in elegant Norwegian fashion, but it also needs to return that date as a
powerful date object, ready for further manipulation.
The Hype Train is Leaving the Station: Craft a new function that calculates the number of days left until
the epic release of 2XKO, the highly-anticipated tag-team fighting game set in the League of Legends
universe, launching on May 14th, 2025.
Time for the Grand Reveal: Combine the might of your two functions to print today's date and the thrilling
countdown to 2XKO's debut. Feel free to add a bit of flair to your output - maybe a themed message or a
touch of visual excitement!
Remember:
● This task isn't just about coding; it's about harnessing the power of dates and functions to create
something both informative and engaging.
● Accuracy is key! Make sure your countdown is precise and your date formatting is impeccable.
● Creativity is encouraged! Let your passion for gaming and multimedia shine through in your output.*/

function showDateAndCountdown() {
   
    let today = new Date();
    
    
    let releaseDate = new Date('2025-05-14');
    
    let daysLeft = Math.round((releaseDate - today) / (24 * 60 * 60 * 1000));
    
    let norwegianDate = today.toLocaleDateString('no-NB', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        
    });
    
   printOut("Dagens dato: " + norwegianDate);
   printOut("Bare " + daysLeft + "dager igjen til den episke lanseringen av 2XKO!");
}
showDateAndCountdown();
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* ● Part 3 (8 points)
Create a function that receives the radius of a circle and prints the diameter, circumference, and area.*/

function circle(radius) {
   
    let diameter = 2 * radius;
    let circumference = 2 * Math.PI * radius;
    let area = Math.PI * Math.pow(radius, 2);
    
    printOut("Diameter is " + diameter);
    printOut("Circumference is " + circumference.toFixed(2));
    printOut("Area is " + area.toFixed(2)); 
}

circle(5);
printOut(newLine);


printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* ● Part 4 (8 points)
Create a function that receives the width and height of a rectangle in an object. Print the circumference
and area of the given rectangle.*/

function object(rectangle) {
   
    let circumference = 2 * (rectangle.width + rectangle.height);
    let area = rectangle.width * rectangle.height;
    
    printOut("Cirumference is " + circumference);
    printOut("Areal is " + area);
}

object({ width: 5, height: 10 });
printOut(newLine);


printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* ● Part 5 (12 points)
Create a function that handles the conversion between Celsius, Fahrenheit, and Kelvin. Use three different
numbers and print all three combinations as integers (no decimals). Design the function to take two
parameters: first the temperature, then the temperature type/id. Use these parameters to convert to the
other two temperature types and print them. */

function convertTemperature(temp, scale) {
    let celsius, fahrenheit, kelvin;

    if (scale === "C") {
        celsius = temp;
        fahrenheit = Math.round((celsius * 9/5) + 32);
        kelvin = Math.round(celsius + 273.15);
    } else if (scale === "F") {
        fahrenheit = temp;
        celsius = Math.round((fahrenheit - 32) * 5/9);
        kelvin = Math.round(celsius + 273.15);
    } else if (scale === "K") {
        kelvin = temp;
        celsius = Math.round(kelvin - 273.15);
        fahrenheit = Math.round((celsius * 9/5) + 32);
    } else {
        printOut("Ugyldig skala");
        return;
    }

    printOut("Celsius: " + celsius);
    printOut("Fahrenheit: " + fahrenheit);
    printOut("Kelvin: " + kelvin);
}

convertTemperature(25, "C");

printOut(newLine);


printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* ● Part 6 (12 points)
Create a function that calculates the price without VAT (sales tax). The function needs two arguments, one
for the price including VAT (gross amount) and one for the tax group in text (normal = 25%, food = 15%,
hotel, transport, and cinema = 10%). The text argument should not be case-sensitive. If the VAT group is
not correct, the text "Unknown VAT group!" should be printed. The function must return the price without
tax, i.e., the net price. Call the function four times with different gross amounts. One for each of the VAT
groups (25, 15, and 10) and one with an unknown group for example “goblins”. Tip: Use "NaN" to identify
that an unknown VAT group is returned from the function. Formula: net = (100 * gross) / (vat + 100).*/

function calculateNetPrice(gross, vatGroup) {
    vatGroup = vatGroup.toLowerCase();
    
    let vat;
    if (vatGroup === "normal") {
        vat = 25;
    } else if (vatGroup === "food") {
        vat = 15;
    } else if (vatGroup === "hotel" || vatGroup === "transport" || vatGroup === "cinema") {
        vat = 10;
    } else {
        return "Unknown VAT group!"; 
    }
    
    let net = (100 * gross) / (vat + 100);
    return net.toFixed(0); 
}

let netPrice1 = calculateNetPrice(1250, "normal"); 
let netPrice2 = calculateNetPrice(1150, "food");   
let netPrice3 = calculateNetPrice(1100, "hotel");  
let netPrice4 = calculateNetPrice(1000, "textile"); 


printOut("With tax: 1250. Net price for 'normal' VAT: " + netPrice1);
printOut("With tax: 1150. Net price for 'food' VAT: " + netPrice2);
printOut("With tax: 1100. Net price for 'hotel' VAT: " + netPrice3);
printOut(" Net price for textile: " + netPrice4);


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* ● Part 7 (5 points)
Create a function that takes 3 arguments and returns the following calculation:
● Speed = Distance / Time
If speed is missing, calculate speed. If time is missing, calculate time. If distance is missing, calculate the
distance. If more than one parameter is missing, return NaN.*/

function calculateSpeedDistanceTime(distance, time, speed) {
    if (
        (distance === null || distance === undefined) && 
        (time === null || time === undefined) ||
        (time === null || time === undefined) && 
        (speed === null || speed === undefined) ||
        (distance === null || distance === undefined) && 
        (speed === null || speed === undefined)
    ) {
        return NaN;
    }

    if (speed === null || speed === undefined) {
        return distance / time;
    }
    
    if (time === null || time === undefined) {
        return distance / speed;
    }
    
    if (distance === null || distance === undefined) {
        return speed * time;
    }

    return NaN;
}

printOut("Speed (when distance = 100, time = 2): " + calculateSpeedDistanceTime(100, 2, null));
printOut("Time (when distance = 100, speed = 50): " + calculateSpeedDistanceTime(100, null, 50));
printOut("Distance (when speed = 50, time = 2): " + calculateSpeedDistanceTime(null, 2, 50));
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* ● Part 8 (5 points)
Create a function that takes four parameters and returns a result. Parameter one: A text string. Parameter
two: Value for the maximum size of the text string. Parameter three: Text character. Parameter four:
Consecutive insertion of characters (boolean value). Take the text parameter; if it's smaller than the
maximum, make it larger with the specified character, either before or after, using the given boolean value.
Have the function return the new string and print it out.*/

function adjustString(text, maxSize, char, insertBefore) {
    if (text.length >= maxSize) {
        return text;
    }

    let difference = maxSize - text.length;
    let extraChars = char.repeat(difference);


    if (insertBefore) {
        return extraChars + text;
    } else {
        return text + extraChars;
    }
}

let result1 = adjustString("hello", 10, "*", true);
let result2 = adjustString("world", 8, "-", false);

printOut("Result 1: " + result1); 
printOut("Result 2: " + result2);  
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* ● Part 9 (25 points)
From mathematics, we have the following expression:
1 + 2 = 3
4 + 5 + 6 = 7 + 8
9 + 10 + 11 + 12 = 13 + 14 + 15
16 + 17 + 18 + 19 + 20 = 21 + 22 + 23 + 24
25 + 26 + 27 + 28 + 29 + 30 = 31 + 32 + 33 + 34 + 35
Create a function or functions that can test this expression for 200 lines. If the test fails, print out where the
two sides are not equal and stop the loop. If all 200 lines are OK, print "Maths fun!".*/

function checkMathExpressions() {
    let leftStart = 1;
    let lineLength = 2; 

    for (let line = 1; line <= 200; line++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let i = 0; i < lineLength; i++) {
            leftSum += leftStart + i;
        }

        for (let i = 0; i < lineLength - 1; i++) {
            rightSum += leftStart + lineLength + i;
        }

        if (leftSum !== rightSum) {
            printOut("Line " + line + " failed: " + leftSum + " != " + rightSum);
            return;
        }

        leftStart += 2 * lineLength - 1;
        lineLength++;
    }

    printOut("Maths fun!");
}

checkMathExpressions();

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* ● Part 10 (10 points)
Recursive function. Create a function that calculates the factorial of a given number. Factorial of 5 = 5 * 4 *
3 * 2 * 1. Factorial of 6 = 6 * 5 * 4 * 3 * 2 * 1. Etc.
Have the function call itself to calculate the result and print the final answer.*/

function factorial(n) {
 
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

let number = 7;
let result = factorial(number);
printOut("The factorial of " + number + " is: " + result);
printOut(newLine);
