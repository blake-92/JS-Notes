// Conditional logical operator

const balance = 1000;
const pay = 200;
const card = false;

/**
 * Logical AND && - Returns true if both operands are true
 * Logical OR || - Returns true if one of the operands is true
 * Logical NOT ! - Returns the opposite of the operand
 */

if (balance >= pay && card) {
  console.log("You can pay");
} else {
  console.log("You can't pay");
}
