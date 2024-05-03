// Optional chaining operator (?.)

const student = {
  name: "John",
  age: 20,
  //   address: {
  //     city: "New York",
  //     country: "USA",
  //   },
};

console.log(student.address?.city); // New York
console.log("Finished");

// Nullish coalescing operator (??) returns the right-hand side operand when the left-hand side operand is null or undefined.
const page1 = null ?? 1;
console.log(page1);

let number;
const page2 = number ?? 1;
console.log(page2);

let page3 = 5;
const pageNumber = page3 ?? 1;
console.log(pageNumber);
