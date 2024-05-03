// Arrays Destructuring

const technologies = ["HTML", "CSS", "JS", "React", "Node", "MongoDB"];

// Classic assignment
const mongo = technologies[5];

// Desctructuring new assignment
const [, , , reactJS] = technologies;

// Desctructuring all the array by position
const [html, css, js, react, node, mongodb] = technologies;

// Desctructuring the array by position and rest
const [tech1, tech2, tech3, ...rest] = technologies;

console.log(mongo, reactJS);
console.log(html, css, js, react, node, mongodb);
console.log(tech1, tech2, tech3, rest);
