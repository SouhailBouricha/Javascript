// const list = document.querySelector("#list");
// const items = document.querySelectorAll(".item");
// const collections_items = document.getElementsByClassName(".item");

// console.log(list.childNodes)

// for(let i of items){
//     console.log(i)
// }

// items.forEach(function(i){
//     console.log(i)
// })


/*collections_items.forEach(function(i){ // problem
    console.log(i)
})*/


// const items = document.getElementsByClassName("item");
// const list = document.getElementById("list");
// const nb = document.getElementsByClassName("hello")[0];

// const newitem = document.createElement("li");
// newitem.classList.add("item");
// newitem.innerText = "Item 6";

// const newitem2 = document.createElement("li");
// newitem2.classList.add("item");
// newitem2.innerText = "Item 7";


// list.append(newitem);
// list.append(newitem2);

// nb.innerText = items.length;
// console.log(items)

const items = document.querySelectorAll(".item");
const list = document.querySelector("#list");
const nb = document.querySelector(".hello");
const childs = list.children()

const newitem = document.createElement("li");
newitem.classList.add("item");
newitem.innerText = "item 6";

const newitem2 = document.createElement("li");
newitem2.classList.add("item");
newitem2.innerText = "item 7";

list.append(newitem);
list.append(newitem2);

nb.innerText = childs.length;
console.log(childs)
