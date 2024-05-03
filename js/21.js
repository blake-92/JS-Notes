// Ternary operator (conditional operator)

const auth = true;
const balance = 1000;
const pay = 200;
const card = true;

auth ? console.log("Authenticated") : console.log("Not authenticated");

balance >= pay || card
  ? console.log("Payment successful")
  : console.log("Payment failed");
