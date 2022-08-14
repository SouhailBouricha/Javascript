// you can copy an array by using a simpl trick = [...arrayName], you can split a string by using a split method ( split("") )
// or you can concat by using concat methode or just using [...names] or [...num,...names] for both.

const fruits = ["Bannana","Orange","Kiwi","Appel"];
const Numbers = [5,1,6,3,22,2,10,9];

const newFruits = [...fruits];
newFruits.sort();

console.log(newFruits,fruits);

const name = 'Souhail';

const Names = name.split("");
console.log(Names);

//or 

const Names2 = [...name];
console.log(Names2);


///

const new_ = fruits.concat(Numbers);
console.log(new_);


//or 

const new_2 = [...fruits,...Numbers];

console.log(new_2);