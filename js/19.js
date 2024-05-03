// Conditionals strict equality operator

const number1 = 10;
const number2 = "10";

console.log(typeof number1);
console.log(typeof number2);

if (number1 == number2) {
  console.log("They are equal");
} else {
  console.log("They are not equal");
}

/**
 * Operators
 *
 * === -> equal value and equal type
 * !== -> not equal value or not equal type
 *
 */

if (number1 === number2) {
  console.log("They are equal");
} else {
  console.log("They are not equal");
}
