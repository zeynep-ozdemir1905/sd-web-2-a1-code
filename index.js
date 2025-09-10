"use strict";

// sample data - expanded Star Wars characters with varied ages
const users = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

document.addEventListener("DOMContentLoaded", () => {
  const namesList = document.getElementById("names-list");
  users.forEach(user => {
    const li = document.createElement("li");
    li.textContent = user.name;
    namesList.appendChild(li);
  });
});

// 1. Print out the names of each character in the console, then render them in the HTML list with id "names-list"
console.log("All character names");
users.forEach(user => {
  console.log(user.name);
});


// 2. Print out the names of characters whose age is less than 40 in the console, then render them in the HTML list with id "young-characters-list"
const youngCharacters = users.filter(user => user.age < 40);
console.log("Characters younger than 40");
youngCharacters.forEach(user => {
  console.log(user.name);
});
renderNamesList(youngCharacters, "young-characters-list");

// 3. Create a reusable function that takes any array and uses logic to render a list of character names in the HTML. Use this function to populate the list with id "function-list"
console.log("Using reusable function to render all users");
renderNamesList(users, "function-list");

// 4. Create a function that takes an array and an age threshold parameter. The function should only display characters whose age is below the given number. Render results in the list with id "age-filter-list"
function renderFilteredByAge(array, ageThreshold, ulId, errorDivId = null) {
  const filtered = array.filter(user => user.age < ageThreshold);
  console.log(`Characters younger than 40 ${ageThreshold}`);
  filtered.forEach(user => console.log(user.name));
  renderNamesList(filtered, ulId, errorDivId);
}
renderFilteredByAge(users, 40, "age-filter-list");

// 5. Add error handling to your functions that will log an error message using console.error() if any object doesn't have a "name" property. Display any error messages in the div with id "error-messages"
function renderNamesList(array, ulId, errorDivId = null) {
  const ul = document.getElementById(ulId);
  const errorDiv = errorDivId ? document.getElementById(errorDivId) : null;
  ul.innerHTML = "";
  if (errorDiv) errorDiv.innerHTML = "";
  array.forEach((obj, index) => {
    if (!obj.hasOwnProperty("name") || !obj.name) {
      const errorMsg = `Error: Object at index ${index} is missing a valid "name" property.`;
      console.error(errorMsg);
      if (errorDiv) {
        const p = document.createElement("p");
        p.textContent = errorMsg;
        errorDiv.appendChild(p);
      }
      return;
    }
    const li = document.createElement("li");
    li.textContent = obj.name;
    ul.appendChild(li);
  });
}
// 6. Test your error handling by creating a second array that's intentionally broken (missing name properties) and passing it to your functions. Verify that your error handling works correctly and displays errors in the div with id "broken-array-errors"
const brokenUsers = [
  { id: 11, age: 20}, 
  { id: 12, name: "Anaking Skywalker", age: 22 },
  { id: 13}, 
  {id: 14, nameL: null, age: 40} 
];
console.log("Testing error handling with broken array");
renderNamesList(brokenUsers, "broken-array-list", "broken-array-errors");
renderFilteredByAge(brokenUsers, 40, "broken-array-list", "broken-array-errors");
