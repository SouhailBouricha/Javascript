localStorage.setItem("todo",JSON.stringify(["todo1","todo2","todo3","todo4","todo5"]));
sessionStorage.setItem("todo",JSON.stringify(["todo1","todo2","todo3","todo4","todo5"]));

const todo = localStorage.getItem("todo");
const todo2 = sessionStorage.getItem("todo");

console.log(JSON.parse(todo));
console.log(JSON.parse(todo2));

//------------------------------------------------------------------------------------------------------------




const object = {
    name: "Souhail",
    age: 20,
    ismaried: false,
    greeet: function(name){
        return `Hello ${name}`;
    }
}

localStorage.setItem("object",JSON.stringify(object));
sessionStorage.setItem("object",JSON.stringify(object));


localStorage.setItem("object",JSON.stringify(object));
sessionStorage.setItem("object",JSON.stringify(object));

const object1 = localStorage.getItem("object");
const object2 = sessionStorage.getItem("object");


console.log(JSON.parse(object1));
console.log(JSON.parse(object2));