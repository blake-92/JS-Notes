// DOM Manipulation

const heading = document.querySelector(".heading");
const links = document.querySelectorAll(".navegacion a");

// Change the text
heading.textContent = "Nuevo Heading";

// Add a atributte
heading.id = "new-heading";

// Delete a atributte
heading.removeAttribute("id");

// Chance a attribute value
const inputName = document.querySelector("#nombre");
inputName.placeholder = "Type your name";
