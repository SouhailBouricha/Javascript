//- 01 Deconstruct : The destructuring assignment syntax is a JavaScript expression that makes it possible
// to unpack values from arrays, or properties from objects, into distinct variables. 
//let a, b, rest; [a, b] = [10, 20]; console.log(a); // expected output: 10.


const Items = [0,1,2,3,4,5];

const [one,tow,...rest] = Items;

console.log(rest);

