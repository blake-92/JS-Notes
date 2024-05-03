// JS: Objects Manipulation

const person = {
  name: "John",
  age: 30,
  active: true,
  hobbies: ["reading", "music", "movies"],
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

// Show all properties
console.log(person);

// Lock the object
// Object.freeze(person);

// Lock but editable
// Object.seal(person);

// Update a property
person.age = 21;

// Add a new property
person.image = "image.jpg";

// Delete a property
delete person.active;

// Access a property
console.log(person.name);

// Show all properties
console.log(person);
