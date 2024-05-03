// Fuction with return

// function sum(a, b) {
//   return a + b;
// }

// const sum = function (a = 0, b = 1) {
//   return a + b;
// };

// const sum = (a = 0, b = 1) => a + b;
const sum = (a = 0, b = 1) => {
  return a + b;
};

const result1 = sum(2, 3);
const result2 = sum(2);
const result3 = sum();

console.log(result1);
console.log(result2);
console.log(result3);
