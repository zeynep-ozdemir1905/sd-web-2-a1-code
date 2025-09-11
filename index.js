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

// 1. Print out the names of each character in the console, then render them in the HTML list with id "names-list"
const namesList = document.getElementById("names-list");
users.forEach(user => {
  if (user.name) {
    console.log(user.name);
    namesList.innerHTML += `<li>${user.name}</li>`;
  }
});

// 2. Print out the names of characters whose age is less than 40 in the console, then render them in the HTML list with id "young-characters-list"
const youngList = document.getElementById("young-characters-list");
users.forEach(user => {
  if (user.name && user.age < 40) {
    console.log(user.name);
    youngList.innerHTML += `<li>${user.name}</li>`;

  }
});
// 3. Create a reusable function that takes any array and uses logic to render a list of character names in the HTML. Use this function to populate the list with id "function-list"
function showNames(array, elementId) {
  const list = document.getElementById(elementId);
  array.forEach(user => {
    if (user.name) {
      list.innerHTML += `<li>${user.name}</li>`;
    }
  }); 
}
showNames(users, "function-list");

// 4. Create a function that takes an array and an age threshold parameter. The function should only display characters whose age is below the given number. Render results in the list with id "age-filter-list"
function showNamesByAge(array, ageLimit, elementId) {
  const list = document.getElementById(elementId);
  array.forEach(user => {
     if (user.name && user.age < ageLimit) {
      list.innerHTML += `<li>${user.name}</li>`;
    }
  });
    
}
showNamesByAge(users, 40, "age-filter-list");

// 5. Add error handling to your functions that will log an error message using console.error() if any object doesn't have a "name" property. Display any error messages in the div with id "error-messages"
const errorDiv = document.getElementById("error-messages");
const errorList = document.getElementById("error-handling-list");

let hasError = false;

users.forEach(user => {
  if (!user.name) {
    errorList.innerHTML += `
      <li>
        ID ${user.id}: <span class="error-message">(no name)</span>
      </li>
    `;
    console.error(`Error: Missing name for id ${user.id}`);
    hasError = true;
  } else {
    errorList.innerHTML += `
      <li>
        ID ${user.id}: ${user.name}
      </li>
    `;
  }
});

if (!hasError) {
  errorDiv.innerHTML += `<p class="success">All names found successfully!</p>`;
}


// 6. Test your error handling by creating a second array that's intentionally broken (missing name properties) and passing it to your functions. Verify that your error handling works correctly and displays errors in the div with id "broken-array-errors"
const brokenDiv = document.getElementById("broken-array-errors");
const brokenList = document.getElementById("broken-array-list");

const brokenUsers = [
  { id: 1, age: 23 },
  { id: 2, name: null },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 3 },
];

brokenUsers.forEach(user => {
  let nameText = user.name ? user.name : "missing name properties"; 
  let nameClass = user.name ? "success" : "error-message"; 

  brokenList.innerHTML += `
    <li>
      ID ${user.id}: <span class="${nameClass}">${nameText}</span>
    </li>
  `;

  if (!user.name) console.error(`Error: Missing name for id ${user.id}`);
});