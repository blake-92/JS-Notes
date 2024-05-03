// Short circuiting

/**
 * Truthy and Falsy values
 * if (true) -> Truthy

 * if (1) -> Truthy
 * if (' ') -> Truthy
 * if ({}) -> Truthy
 * if ([]) -> Truthy
 * if (function() {}) -> Truthy
 * if (50) -> Truthy
 * if (-50) -> Truthy
 * if (Infinity) -> Truthy
 * if (-Infinity) -> Truthy
 * 
 * if (undefined) -> Falsy
 * if (null) -> Falsy
 * if (NaN) -> Falsy
 * if ('') -> Falsy
 * if (false) -> Falsy
 * if (0) -> Falsy
 */

if (50) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

// Short circuiting bad practice (check if user exists)
const user = {};
user && console.log("User is logged in");

// Short circuiting good practice
const auth = true;
auth && console.log("User is logged in");
