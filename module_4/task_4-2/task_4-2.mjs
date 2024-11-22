"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");

/* o Part 1: Array Creation & Traversal (5 points)
Create an array where you hard-code all the numbers from 1 to 20. Use a for loop to "run through" the
array and print all the elements in the array. */

printOut("Part 1 Solution:");

// Hard-coded array with numbers 1 to 20
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    for (let i=0; i < numbers.length; i++){
    printOut((numbers[i]).toString());
    }
    printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/*● Part 2: Array Joining (5 points)
Take the array from task 1 and use a built-in method found in the array object to print all the elements with
a custom defined character separating all the elements.
○ Hint: You should be able to do it with just one line of code
😃*/
printOut("Part 2 Solution:");
printOut(numbers.join(" | ")); // Join with a custom separator "|"

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* ● Part 3: String to Array & Traversal (10 points)
Create a constant that contains the text "Hei på deg, hvordan har du det?" (Hello there, how are you?)
Take this text and convert it into an array that contains all the words in the text, i.e., each element should
contain only one word from the text. Use a loop to traverse (run through) this array so that you can print
which word number, which index the word is at, and the word itself.*/
printOut("Part 3 Solution:");
const text = "Hei på deg, hvordan har du det?";
let words = text.split(" "); // Convert text to array of words
words.forEach((word, index) => {
  printOut(`Word ${index + 1} (index ${index}): ${word}`);
});
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/*● Part 4: Array Manipulation: Removing Elements (10 points)
Create an array with these names: "Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid",
"Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth" and "Kristin".
Then create a function that will remove an element from an array. Let the function have two parameters.
Parameter number one is the array from which you will remove the element, parameter two is the text that
should be removed from the array. Check if the element exists in the array so that you can inform whether
the element exists or not in the array*/
printOut("Part 4 Solution:");
let names = [
  "Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", 
  "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", 
  "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"
];

function removeElement(array, element) {
  if (array.includes(element)) {
    array.splice(array.indexOf(element), 1);
    return `${element} was removed.`;
  } else {
    return `${element} does not exist in the array.`;
  }
}

printOut(removeElement(names, "Marit")); // Example test
printOut(removeElement(names, "Sofia")); // Test with a name not in the array
printOut(newLine);


printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* ● Part 5: Array Merging (10 points)
Create a new array with these names: "Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah",
"Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor"and
"Magnus" Merge the arrays with girl names and boy names into a new array with all the names.
○ Hint: You can solve this with two lines of code. Remember that an empty array also has
properties and methods*/
printOut("Part 5 Solution:");
let boyNames = [
  "Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", 
  "Filip", "Noah", "Elias", "Isak", "Henrik", "Aksel", 
  "Kasper", "Mathias", "Jonas", "Tobias", "Liam", 
  "Håkon", "Theodor", "Magnus"
];

let allNames = [...names, ...boyNames]; // Merge arrays
printOut(allNames.join(", ")); // Print merged array
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Create a class called TBook. 
TBook
---Attributes-----
Private constant Title (title of the book)
Private constant Author (author of the book)
Private constant ISBN (ISBN number of the book)
----Methodes------
constructor (aTitle, aAuthor, aISBN)
Public function toString()

Let the constructor fill in the three attributes (title, author, and ISBN number). Create a public function
"toString" in the class, it should return a text string that contains the three attributes of the class.
Create an array that contains three instances of the TBook class. Use a loop to print out the books that are
in the list.
*/
// Define the TBook class
class TBook {
    constructor(aTitle, aAuthor, aISBN) {
      this.title = aTitle; // Private constant Title
      this.author = aAuthor; // Private constant Author
      this.isbn = aISBN; // Private constant ISBN
    }
  
    // Public function toString()
    toString() {
      return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}`;
    }
  }
  
  // Create an array containing three instances of the TBook class
  let books = [
    new TBook("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565"),
    new TBook("1984", "George Orwell", "9780451524935"),
    new TBook("To Kill a Mockingbird", "Harper Lee", "9780061120084")
  ];
  
  // Use a loop to print out all the books in the array
  for (const book of books) {
    printOut(book.toString()); // Print the string representation of each book
  }
  
  printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/*● Part 7: Arrays of Objects & Static Objects (15 points)
Create a static object that looks like this:
const EWeekDays = {
    WeekDay1: { value: 0x01, name: "Mandag" },
    WeekDay2: { value: 0x02, name: "Tirsdag" },
    WeekDay3: { value: 0x04, name: "Onsdag" },
    WeekDay4: { value: 0x08, name: "Torsdag" },
    WeekDay5: { value: 0x10, name: "Fredag" },
    WeekDay6: { value: 0x20, name: "Lørdag" },
    WeekDay7: { value: 0x40, name: "Søndag" },
    Workdays: { value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager" },
    Weekends: { value: 0x20 + 0x40, name: "Helg" },
  };
  You can replace the language in the "name" attributes with whatever you want.
Use this function: Object.keys(EWeekDays) to create an array with the "keys" that exist in the
EWeekDays object.
Create a loop that traverses this "key" array and prints all the elements that exist in the EWeekDays object
○ Hint: Use W3Schools as I have shown you, here you see good examples of exactly this!
  */

// Static object EWeekDays
const EWeekDays = {
    WeekDay1: { value: 0x01, name: "Mandag" },
    WeekDay2: { value: 0x02, name: "Tirsdag" },
    WeekDay3: { value: 0x04, name: "Onsdag" },
    WeekDay4: { value: 0x08, name: "Torsdag" },
    WeekDay5: { value: 0x10, name: "Fredag" },
    WeekDay6: { value: 0x20, name: "Lørdag" },
    WeekDay7: { value: 0x40, name: "Søndag" },
    Workdays: { value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Arbeidsdager" },
    Weekends: { value: 0x20 + 0x40, name: "Helg" },
  };
  
  // Use Object.keys to get the array of keys from EWeekDays
  let keys = Object.keys(EWeekDays);
  
  // Loop through the keys and print each element
  for (const key of keys) {
    let day = EWeekDays[key]; // Get the object for the current key
    printOut(`${key}: Value = ${day.value}, Name = ${day.name}`);
  }
  
  printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* ● Part 8 Sorting & Callbacks (15 points)
Create an array that contains 35 random numbers from 1 to 20 (inclusive). Sort these arrays in ascending
and descending order. To get full credit for this task, it must be solved with "callback" functions that you
use in the .sort(...) method of this array.*/

// Generate an array with 35 random numbers between 1 and 20
let randomNumbers = Array.from({ length: 35 }, () => Math.floor(Math.random() * 20) + 1);

// Sort in ascending order using a callback function
let ascending = [...randomNumbers].sort((a, b) => a - b);

// Sort in descending order using a callback function
let descending = [...randomNumbers].sort((a, b) => b - a);

// Print the original array
printOut("Original array:");
printOut(randomNumbers.join(", "));

// Print the sorted arrays
printOut("Ascending order:");
printOut(ascending.join(", "));

printOut("Descending order:");
printOut(descending.join(", "));

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/*● Part 9 Frequency Analysis (15 points)
Based on part 8, print out how many times the different numbers occur in the array. First, print the
numbers and their frequency, then print the frequencies and which numbers they correspond to. You must
print the most frequent ones first, and if there are multiple numbers where the frequency is the same, then
it should again be sorted from the smallest to the largest number.*/

const frekvens = {};
randomNumbers.forEach(num => frekvens[num] = (frekvens[num] || 0) + 1);

printOut("Number frequencies:");
Object.entries(frekvens).forEach(([num, freq]) => {
    printOut("Number " + num + ": " + freq + " times");
});

const sortedFrequencies = Object.entries(frekvens)
    .map(([num, freq]) => [parseInt(num), freq])
    .sort((a, b) => b[1] - a[1] || a[0] - b[0]);

printOut("Frequencies sorted from most to least frequent:");
sortedFrequencies.forEach(([num, freq]) => {
    printOut(freq + " occurrences of number " + num);
});
printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* ● Part 10 Two-Dimensional Arrays (10 points)
Create an array that contains rows and columns (2 dimensions, 5x9). Start with an empty array. Use "for"
loops to create rows and columns, respectively. In each "cell," create a text that shows which row and
column the "cell" is in. Then create two new sets of "for" loops to print the array itself.
○ Hint: For each round in the loop for the rows, you create a column. And for each round in the
columns, you write the "cell" value.*/

// Opprett en tom array for 2 dimensjoner
let twoDimensionalArray = [];

// Opprett rader og kolonner (5x9)
for (let row = 0; row < 5; row++) {
  let currentRow = []; // En midlertidig array for hver rad
  for (let col = 0; col < 9; col++) {
    currentRow.push(`Row: ${row}, Col: ${col}`); // Legg til cellens tekst
  }
  twoDimensionalArray.push(currentRow); // Legg til raden i hovedarrayet
}

// Skriv ut hele arrayet rad for rad
printOut("Two-Dimensional Array:");
for (let row = 0; row < twoDimensionalArray.length; row++) {
  let rowContent = twoDimensionalArray[row].join(" | "); // Kombiner kolonner med separator
  printOut(rowContent); // Skriv ut raden
}

printOut(newLine);
