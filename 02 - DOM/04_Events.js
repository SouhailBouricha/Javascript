const list = document.querySelector("#list");
const item = list.children;
const nb = document.querySelectorAll(".hello b")[0];
const btn = document.querySelector("#submit");
const head = document.querySelector(".Website");
const btn_head = document.querySelector("#submit_Website");
const body = document.querySelector("body");


// console.log(nb)

btn.addEventListener("click", function(){
    const newitem = document.createElement("li");
    newitem.classList.add("i");
    newitem.innerText = `item ${item.length + 1}`;
    list.append(newitem);
    nb.innerHTML = item.length;
})

btn_head.addEventListener("click", function(){
    head.classList.toggle("color")
    console.log(head)
    // head.style.color = "red";
    // head.style.fontSize = "50px";
})

body.addEventListener("keydown",function(event){
    if(event.keyCode === 32 || event.key === "g") {
        head.classList.toggle("color")
    console.log(head)
    console.log(event)
    }
    
})