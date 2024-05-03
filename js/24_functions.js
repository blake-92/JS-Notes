// ECMAScript Modules
// Exporting functions

// Export methods at the beginning of the function
// export function sum(a, b) {
//   return a + b;
// }

// export function substract(a, b) {
//   return a - b;
// }

// Default export (only one default export per module)
// export default function multiply(a, b) {
//   return a * b;
// }

///////////////////////////////////////////////////
// Export methods at the end of the file
// function sum(a, b) {
//   return a + b;
// }

// function substract(a, b) {
//   return a - b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// export { sum, substract };
// export default multiply;

///////////////////////////////////////////////////

// Export arrow functions and default export
export const sum = (a, b) => a + b;
export const substract = (a, b) => a - b;
export const divide = (a, b) => a / b;

const multiply = (a, b) => a * b;
export default multiply;
