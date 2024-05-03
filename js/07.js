// JS: Objects Destruction two or more objects

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

// Spread operator
// Add a all properties of product to shoppingCart
const shoppingCart = {
  quantity: 1,
  ...product,
};

console.log(shoppingCart);

// Object assign 1
// Merge two objects
// Conflicts with names
const newObject = {
  ...person,
  ...product,
};
console.log(newObject);
// Object assign 2
const newObject2 = Object.assign(person, product);
console.log(newObject2);
