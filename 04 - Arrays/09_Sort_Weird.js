const fruits = ["Bannana","Orange","Kiwi","Appel"];
const Numbers = [5,1,6,3,22,2,10,9];

// if you want to sort an arrays of dtrings is esay you just need to use sort methode but if you need to dort a numbers one then yoou have use a trick
// of give the sort methode a function of 2 args and return the minus of them Numbers.sort((a,b) =>{ return a - b; })
// Quiq ruminder that sort method affect the assign array, so you need to copy it before use it.
fruits.sort();
console.log(fruits);

Numbers.sort((a,b) =>{
    return a - b;
})

console.log(Numbers);