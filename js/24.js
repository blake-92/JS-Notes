// ECMAScript Modules

// On the HTML file
// <script src="js/24.js" type="module"></script>

import multiply, { sum as sumFunction, substract } from "./24_functions.js";

const result = sumFunction(1, 2);
console.log(result);

const result2 = substract(1, 2);
console.log(result2);

// Default export
const result3 = multiply(1, 2);
console.log(result3);
