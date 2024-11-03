"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* ● Part 1 Counting Up and Down (8 points)
Use "for" loops to generate two lines on the HTML page. One should count from 1 to 10, and the other
should count from 10 to 1. Use only two lines to print the rows.*/

let upCount = "";
for (let i = 1; i <= 10; i++) {
    upCount += i + " ";
}
printOut(upCount.trim());

let downCount = "";
for (let i = 10; i >= 1; i--) {
    downCount += i + " ";
}
printOut(downCount.trim());

printOut(newLine);


printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* ● Number Guessing Game (12 points)
Create a program that can guess a number between 1 and 60. Declare a variable and assign it a value, for
example, 45. Let the computer "guess" by generating a random number. Use a "while" loop and the
"random" function. Keep the "while" loop running as long as the "guessed number" is incorrect. Print the
number once the "while" loop has completed. You do not need to print anything while the "while" loop is in
progress.*/
printOut("Number Guessing Game");

const targetNumber = 45;
let guessedNumber = 0;

while (guessedNumber !== targetNumber) {
    guessedNumber = Math.floor(Math.random() * 60) + 1;
}
printOut(`Guessed number: ${guessedNumber}`);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* ● Guessing Game - Level Up! (20 points)
Take the program from part 2 and expand it to guess a number between 1 and one million. Print the
number of guesses as well as the number of milliseconds it took to guess the number. HINT: Use the
Date.now() function to measure time.*/

printOut("Guessing Game - Level Up");

const target = Math.floor(Math.random() * 1000000) + 1;
let guess = 0;
let attempts = 0;
let startTime = Date.now();

while (guess !== target) {
    guess = Math.floor(Math.random() * 1000000) + 1;
    attempts++;
}
let endTime = Date.now();
let timeTaken = endTime - startTime;

printOut(`Attempts: ${attempts}, Time taken: ${timeTaken} ms`);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* ● Part 4 Prime Number Hunter (15 points)
Use a "for" loop and a "while" loop to find all prime numbers greater than 1 and less than 200.
○ HINT: A prime number is any natural number greater than 1 that is only divisible by itself and
1. The number 1 is not a prime. (See Wikipedia on primes or ask your AI).*/

printOut("Prime Number Hunter");

let primeNumbers = "";
for (let num = 2; num < 200; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        primeNumbers += num + " ";
    }
}
printOut(primeNumbers.trim());
printOut(newLine);



printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* ● Part 5 Nested Loops & Patterns (15 points)
Create two loops that print 9 columns and 7 rows with the text "K1, R1" for the first cell, "K2, R1" for the
second cell, and so on.
○ Hint: Use what we call nested loops. This is a "for" loop within another "for" loop.
Use the provided printOut function to print each row with its sets of columns; remember to place this in
the right level of the nested for loops.*/

printOut("Nested Loops & Patterns");

for (let row = 1; row <= 7; row++) {
    let line = "";
    for (let col = 1; col <= 9; col++) {
        line += `K${col}R${row} `;
    }
    printOut(line.trim());
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* ● Grade Simulator & Sorting Challenge (10 points + Bonus Hint)
Simulate 5 student grades using the Math.random() function, from 1 to 236 (inclusive).
For each grade, print the student's grade (A to F) based on the point distribution provided:
○ A: 89% – 100%
○ B: 77% – 88%
○ C: 65% – 76%
○ D: 53% – 64%
○ E: 41% – 52%
○ F: 0% – 40%
Sorting Challenge (Bonus): Sort and print the 5 grades in descending order (from A to F) without using
an array. You can use a for loop and a do/while loop to achieve this.
Hint for Success: If you successfully complete the sorting challenge, you'll unlock a valuable hint for Part
9 of "DAT101: Mandatory assignment 4.1" that will make it easier to solve. The learning outcomes remain
the same, but this hint will give you a head start!*/

printOut("Grade Simulator & Sorting Challenge");

// Generate grades
let grades = [];
for (let i = 0; i < 5; i++) {
    grades.push(Math.floor(Math.random() * 236) + 1);
}

// Map grades to letter grades
let letterGrades = grades.map(grade => {
    if (grade >= 211) return "A";
    if (grade >= 182) return "B";
    if (grade >= 153) return "C";
    if (grade >= 124) return "D";
    if (grade >= 95) return "E";
    return "F";
});

// Print grades
printOut("Grades: " + letterGrades.join(", "));

// Sort grades in descending order
let sortedGrades = [];
do {
    let max = Math.max(...grades);
    sortedGrades.push(max);
    grades.splice(grades.indexOf(max), 1);
} while (grades.length > 0);

printOut("Sorted Grades: " + sortedGrades.join(", "));
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* ● Part 7 Dice Rolling Extravaganza (20 points)
Simulate 6 dice and print how many "throws" it takes to get:
● 1 2 3 4 5 6 (full straight)
● 3 pairs
● 2 of a kind and 4 of a kind (tower)
● All the same (Yahtzee)*/

printOut("Dice Rolling Extravaganza");

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function countOccurrences(arr) {
    const counts = {};
    for (let num of arr) {
        counts[num] = (counts[num] || 0) + 1;
    }
    return Object.values(counts).sort((a, b) => b - a);
}

function rollUntilGoals() {
    let rollsFullStraight = 0;
    let rollsThreePairs = 0;
    let rollsTower = 0;
    let rollsYahtzee = 0;

    let foundFullStraight = false;
    let foundThreePairs = false;
    let foundTower = false;
    let foundYahtzee = false;

    while (!foundFullStraight || !foundThreePairs || !foundTower || !foundYahtzee) {
        let dice = Array.from({ length: 6 }, rollDice).sort((a, b) => a - b);

        // Full straight (1 2 3 4 5 6)
        if (!foundFullStraight) {
            rollsFullStraight++;
            if (dice.every((value, index) => value === index + 1)) {
                foundFullStraight = true;
                printOut(`Full straight achieved in ${rollsFullStraight} rolls`);
            }
        }

        // Count occurrences for 3 pairs, tower, and Yahtzee
        const counts = countOccurrences(dice);

        // 3 pairs (three pairs of two)
        if (!foundThreePairs) {
            rollsThreePairs++;
            if (counts.length === 3 && counts.every(count => count === 2)) {
                foundThreePairs = true;
                printOut(`3 pairs achieved in ${rollsThreePairs} rolls`);
            }
        }

        // Tower (2 of a kind and 4 of a kind)
        if (!foundTower) {
            rollsTower++;
            if (counts[0] === 4 && counts[1] === 2) {
                foundTower = true;
                printOut(`Tower (2 of a kind and 4 of a kind) achieved in ${rollsTower} rolls`);
            }
        }

        // Yahtzee (all the same)
        if (!foundYahtzee) {
            rollsYahtzee++;
            if (counts[0] === 6) {
                foundYahtzee = true;
                printOut(`Yahtzee achieved in ${rollsYahtzee} rolls`);
            }
        }
    }
}

rollUntilGoals();
printOut(newLine);
