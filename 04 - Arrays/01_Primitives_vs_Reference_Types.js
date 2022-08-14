// Primitives Types

const bank = 250;

///bank = 100; Error

// Reference Types

const list = ["ege","ergerg","gbbrgr"];

list.push("dfgd");
list[2] = "dgk,";

// console.log(list);

/// assigne a new value in Primitives Types don't effect any values but in Reference Types if you assigne an arrays
// to another and chang the values of the seconde one after that change the first array ayther.

const list1 = ["ege","ergerg","gbbrgr"];
const list2 = list1;

console.log(list1,list2);