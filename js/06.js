// JS: Objects Destructuring two or more objec

const person = {
  name: "John",
  age: 30,
  active: true,
  hobbies: ["reading", "music", "movies"],
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

const product = {
  id: 1,
  name: "laptop",
  price: 1200,
  available: true,
  model: {
    brand: "HP",
    serie: "Pavilion",
  },
};

console.log(person);
console.log(product);

// Avoid name conflicts renaming the variables
const { name: nameClient } = person;
// name is renamed to nameClient but model is not renamed, brand is accessed directly
const {
  name: nameProduct,
  model: { brand },
} = product;

console.log(nameClient, nameProduct);
