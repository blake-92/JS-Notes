// Function Expression - js think is a variable

// Function must be declared before calling it
const sum = function (a = 0, b = 1) {
  console.log(a + b);
};

sum(2, 3);
sum(2);
sum();
