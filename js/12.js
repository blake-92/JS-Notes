// Array iteration

const technologies = ["HTML", "CSS", "JS", "React", "Node", "MongoDB"];
console.table(technologies);

// For iteration
// for (let i = 0; i < technologies.length; i++) {
//   console.log(technologies[i]);
// }

// Foreach iteration (Alternative of for loop) (no return)
technologies.forEach((tech) => {
  console.log(tech);
});

// Map iteration (returns new array)
const arrayMap = technologies.map((tech) => {
  return tech;
});
console.table(arrayMap);

// for...of iteration (not too much used)
for (let tech of technologies) {
  console.log(tech);
}
