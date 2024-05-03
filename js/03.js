// JS: Types

// Undefined
let a;
console.log(a, typeof a); // undefined

// String
let b = "Hello";
console.log(b, typeof b); // string

// Number
let c = 100_000_000;
console.log(c, typeof c); // number

// Boolean
let d = true;
console.log(d, typeof d); // boolean

// Array
let arr = [1, 2, 3];
console.log(arr, typeof arr); // object

// BigInt
let e = 100n;
console.log(e, typeof e); // bigint

// Null
let n = null;
console.log(n, typeof n); // object

// Symbol
let s1 = Symbol(30);
let s2 = Symbol(30);

console.log(s1, typeof s1); // symbol
console.log(s2, typeof s2); // symbol
console.log(s1 === s2); // false
