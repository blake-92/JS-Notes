// Array methods

const technologies = ["HTML", "CSS", "JS", "React", "Node", "MongoDB"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Filter - Filter the array
const newArray1 = technologies.filter((tech) => tech === "JS");
console.log(newArray1);

const newArray2 = technologies.filter((tech) => tech !== "JS");
console.log(newArray2);

// Includes - Check if an item exists
const isExist = technologies.includes("JS");
console.log(isExist);

// Some - Check if at least one item is true
const isExist2 = technologies.some((tech) => tech === "JS");
console.log(isExist2);

// Find - Find the first item that matches the condition
const found = technologies.find((tech) => tech === "JS");
console.log(found);

// Every - Check if all items are true
const isExist3 = technologies.every((tech) => tech === "JS");
console.log(isExist3);

// Reduce - Reduce the array to a single value
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);
