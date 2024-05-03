// Arrays and arrangements manipulation

const technologies = ["HTML", "CSS", "JS", "React", "Node", "MongoDB"];
console.table(technologies);

// Add a new element at the end
const newTechnologies = [...technologies, "Express"];

// Add a new element at the beginning
// const newTechnologies = ["Express", ...technologies];

// Delete by fitler a element
const newTech = technologies.filter((tech) => tech !== "React");

// Modify by map a element
const newTech2 = technologies.map((tech) => {
  if (tech === "React") {
    return "React Native";
  }
  return tech;
});

console.table(newTech2);

// Mutating the original array

// Modify the value of an element but it mutates the original array
// technologies[2] = "Javascript";

// Add a new element but it mutates the original array
// technologies.push("Express");

// Detele the first element but it mutates the original array
// technologies.shift();
