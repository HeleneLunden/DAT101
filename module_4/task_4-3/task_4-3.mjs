"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", 
  "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir", 
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/*● Part 1: Rectangle Calculations (10 points)
Create code in cmbTask1CalculateClick to calculate the perimeter and area of the given rectangle.*/
function cmbTask1CalculateClick() {
  const length = parseFloat(document.getElementById("rectLength").value);
  const width = parseFloat(document.getElementById("rectWidth").value);
  const perimeter = 2 * (length + width);
  const area = length * width;
  document.getElementById("txtTask1Output").innerText =
    `Perimeter: ${perimeter}, Area: ${area}`;
}

//--- Part 2 ----------------------------------------------------------------------------------------------
/* ● Part 2: Dynamic Word List (15 points)
Create an event function that is triggered if you press a key while txtTask2Word has keyboard focus.
Every time the user presses "return" or "enter", add the word to the task2Words array and print how
many words and all the words in txtTask2Output. Clear the input field every time the user presses
"enter" or "return".
○ Tip: txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress)*/

const task2Words = [];
function txtTask2WordKeyPress(event) {
  if (event.key === "Enter") {
    const input = event.target.value;
    if (input) {
      task2Words.push(input);
      event.target.value = "";
      document.getElementById("txtTask2Output").innerText =
        `Words: ${task2Words.join(", ")}, Count: ${task2Words.length}`;
    }
  }
}

document.getElementById("txtTask2Word").addEventListener("keypress", txtTask2WordKeyPress);

//--- Part 3 ----------------------------------------------------------------------------------------------
/*● Part 3: Checkbox Evaluation (15 points)
Create a click event function to check which of the checkboxes are selected. And print the result in
txtTask3Output.*/
function evaluateCheckboxes() {
  const checkboxes = document.querySelectorAll("input[name='chkTask3']");

  const selected = [];

  
  checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
          selected.push(checkbox.value); 
      }
  });

  const output = document.getElementById("txtTask3Output");
  if (selected.length > 0) {
      output.innerText = "Selected checkboxes: " + selected.join(", ");
  } else {
      output.innerText = "No checkboxes selected.";
  }
}

document.getElementById("cmbTask3CheckAnswer").addEventListener("click", evaluateCheckboxes);


//--- Part 4 ----------------------------------------------------------------------------------------------
/* ● Part 4: Radio Button Selection (15 points)
Use a for-loop to add "radio" buttons to the divTask4Cars element. Get the values from the CarTypes
array. Print the selected car in txtTask4Output.*/
function createCarRadios() {
  const container = document.getElementById("divTask4Cars");
  CarTypes.forEach((car) => {
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "carType";
    radio.value = car.caption;

    const label = document.createElement("label");
    label.textContent = car.caption;
    label.appendChild(radio);

    container.appendChild(label);
    container.appendChild(document.createElement("br"));
  });
}

function displaySelectedCar() {
  const selected = document.querySelector("input[name='carType']:checked");
  if (selected) {
    document.getElementById("txtTask4Output").innerText = `Selected Car: ${selected.value}`;
  }
}

document.getElementById("divTask4Cars").addEventListener("change", displaySelectedCar);
createCarRadios();

//--- Part 5 ----------------------------------------------------------------------------------------------
/* ● Part 5: Dropdown Selection (15 points)
Create an event function that occurs when the element selectTask5Animals changes value (change),
and print the user's selection in the txtTask5Output element.*/
function handleDropdownChange() {
  const dropdown = document.getElementById("selectTask5Animals");

  const selectedAnimal = dropdown.options[dropdown.selectedIndex].text;

  const output = document.getElementById("txtTask5Output");
  output.innerText = "Selected animal: " + selectedAnimal;
}


document.getElementById("selectTask5Animals").addEventListener("change", handleDropdownChange);


//--- Part 6 ----------------------------------------------------------------------------------------------
/*● Part 6: Dynamic Dropdown & Selection (15 points)
Take all the names from the GirlsNames array and add them to the selectTask6Girls element.
Create an event function in the same way as in task 5 and print the name the user selects in
txtTask6Output.*/
function populateGirlsDropdown() {
  const dropdown = document.getElementById("selectTask6Girls");
  GirlsNames.forEach((name) => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    dropdown.appendChild(option);
  });
}

function handleGirlsSelection() {
  const selectedName = document.getElementById("selectTask6Girls").value;
  document.getElementById("txtTask6Output").innerText = `Selected: ${selectedName}`;
}

document.getElementById("selectTask6Girls").addEventListener("change", handleGirlsSelection);
populateGirlsDropdown();
//--- Part 7 ----------------------------------------------------------------------------------------------
/* ● Part 7: Table Population (15 points)
Use the data from filmtittel (movie title), filmsjanger (movie genre), filmregissør (movie
director), and filmrate (movie rating) and fill in the HTML table every time the user clicks the
"cmbAddMovie" button. Fill in the data from the MovieGenre array in selectMovieGenre.*/
function populateGenreDropdown() {
  const genreDropdown = document.getElementById("selectMovieGenre");

  MovieGenre.forEach(genre => {
      const option = document.createElement("option");
      option.value = genre;
      option.textContent = genre;
      genreDropdown.appendChild(option);
  });
}


function addMovieToTable() {
  const title = document.getElementById("txtMovieTitle").value.trim();
  const genre = document.getElementById("selectMovieGenre").value;
  const director = document.getElementById("txtMovieDirector").value.trim();
  const rate = document.getElementById("txtMovieRate").value.trim();

  
  if (!title || !director || rate < 1 || rate > 10) {
      alert("Please fill in all fields correctly. Rate must be between 1 and 10.");
      return;
  }

 
  const table = document.getElementById("tblMovies");


  const newRow = table.insertRow();

 
  const nrCell = newRow.insertCell(0); 
  const titleCell = newRow.insertCell(1); 
  const genreCell = newRow.insertCell(2); 
  const directorCell = newRow.insertCell(3); 
  const rateCell = newRow.insertCell(4); 


  const rowNumber = table.rows.length - 1;

  
  nrCell.textContent = rowNumber;
  titleCell.textContent = title;
  genreCell.textContent = genre;
  directorCell.textContent = director;
  rateCell.textContent = rate;

  document.getElementById("txtMovieTitle").value = "";
  document.getElementById("txtMovieDirector").value = "";
  document.getElementById("txtMovieRate").value = 5;
}

populateGenreDropdown();

document.getElementById("cmbAddMovie").addEventListener("click", addMovieToTable);
