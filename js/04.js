// JS: Objects

const person = {
  name: "John",
  age: 30,
  active: true,
  hobbies: ["reading", "music", "movies"],
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};
console.table(person);
console.log(person, typeof person); // object

// Desctructuring
const { name, age } = person;
console.log("Destructured: ", name, age);

// Object Literal Enhancement
// if the key and value are the same, we can omit the value
const authenticated = true;
const firstName = "Mary";

const userStatus = {
  authenticated,
  firstName,
};
console.log("User Status: ", userStatus);
