//Global Scope
let fruit =  10;
let name = "Souhail";


//Function Scope

function findout(){
    let fruit =  50;
    let name = "you";
}
console.log(fruit,name)

//Block Scope

for(fruit = 0; fruit < 10; fruit++){
    let fruit =  70;
    let name = "idk";
}
console.log(fruit,name)

/*Scope : we have 3 Scopes (Global Scope / Function Scope / Block Scope), 
js allow us to use Global 
Scope variables into anathor Scopes but we can't use Function Scope and Block Scope in globale scope.*/