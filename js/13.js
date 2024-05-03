// Function Declaration

// Function no parameter no return
function hello() {
  console.log("Hello World");
}
hello();

// Function with parameter no return
function greet(name) {
  console.log(`Hello ${name}`);
}
greet("Saul");

// Function no parameter with return
function getPi() {
  return 3.1416;
}
const pi = getPi();
console.log(pi);

// Function with parameter and return
function sum(a, b) {
  return a + b;
}
const result = sum(5, 10);
console.log(result);

// Function with parameter by default
function greeting(name = "Anonymous") {
  console.log(`Hello ${name}`);
}
greeting("John");
greeting();
