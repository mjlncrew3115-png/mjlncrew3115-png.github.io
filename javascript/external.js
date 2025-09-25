// Homework Part 2 (a): Prompt the user for their name
user_name = window.prompt("Please enter your name", "Type your name here");

// Homework Part 2 (b): Replace the header text with the user’s name
// Grab the header element from index.html
const header = document.querySelector("#header h1");
// Replace its text content
header.textContent = "Hello, welcome " + user_name + "!";
