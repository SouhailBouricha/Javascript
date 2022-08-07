const list = document.querySelector("#list");
const items = list.children;
const btn = document.querySelector("#submit");
const nb = document.querySelector(".hello b");
const input = document.querySelector("#text");

btn.addEventListener("click",function(e){
    e.preventDefault()
    const newitem = document.createElement("li");
    newitem.classList.add("i");
    newitem.innerText = input.value;
    nb.innerText = items.length + 1;
    list.append(newitem);
    input.value = ""
    newitem.addEventListener("click",deletitem);
})
list.addEventListener("click",function(e){
    list.classList.toggle("fad");
   
})
function deletitem(e){
    // console.log(e.target.remove());
    e.stopPropagation();
    e.target.classList.toggle("fad");
}
for(const i of items){
    i.addEventListener("click",deletitem);
}
nb.innerText = items.length;