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

