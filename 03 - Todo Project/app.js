//Selectors
const list = document.querySelector(".list");
const btn = document.querySelector(".btn");
const text = document.querySelector("#text"); 
const select_filter = document.querySelector(".select_filter");

//Events
btn.addEventListener("click", additem);
document.addEventListener("DOMContentLoaded", restore)
list.addEventListener("click", function(e){
    const item = e.target;
    if(item.classList[0] === "btnTrash"){
        const remitem = item.parentElement;
        remitem.classList.add("fal_off");
        let todosd = JSON.parse(localStorage.getItem("todos"));
        index = todosd.indexOf(remitem.children[0].innerText);
        todosd.splice(index,1);
        localStorage.setItem("todos",JSON.stringify(todosd));
        remitem.addEventListener("transitionend",function(){
            item.parentElement.remove();
           
        })
        
    }
    else if(item.classList[0] ==='btnCheck'){
        const compItem = item.parentElement;
        compItem.classList.toggle("complete");
    }
});
select_filter.addEventListener("click",function(event){
    for(let item of list.children){
        switch(event.target.value){
            case "all":
                item.style.display = "flex";
                break;
            case "completed":
                if(item.classList.contains("complete")){
                    item.style.display = "flex";
                }
                else{
                    item.style.display = "none";
                }
                break;
            case "ucompleted":
                if(!item.classList.contains("complete")){
                    item.style.display = "flex";
                }
                else{
                    item.style.display = "none";
                }
                break;
                
        }
    }
});
//Functions
function additem(e){
    //Stop Default
    e.preventDefault();
    // create todo
    const todo = document.createElement("div");
    todo.classList.add("todo");

    // create li in todo
    const itemnew = document.createElement("li");
    itemnew.classList.add("itemnew");
    itemnew.innerText = text.value;
    text.value = "";
    todo.appendChild(itemnew);
    save(itemnew.innerText);
    // Create btn check
    const btnCheck = document.createElement("button");
    btnCheck.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
    btnCheck.classList.add("btnCheck");
    todo.appendChild(btnCheck);
    //Create btn trash 
    const btnTrash = document.createElement("button");
    btnTrash.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    btnTrash.classList.add("btnTrash");
    todo.appendChild(btnTrash);
    // Add div to the list 
    list.appendChild(todo);
    // console.log(list)

}
function save(todo){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
}


function restore(todo){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
        todos.forEach(function(it){
            const todo = document.createElement("div");
            todo.classList.add("todo");
        
            // create li in todo
            const itemnew = document.createElement("li");
            itemnew.classList.add("itemnew");
            itemnew.innerText = it;
            text.value = "";
            todo.appendChild(itemnew);
            const btnCheck = document.createElement("button");
            btnCheck.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
            btnCheck.classList.add("btnCheck");
            todo.appendChild(btnCheck);
            //Create btn trash 
            const btnTrash = document.createElement("button");
            btnTrash.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
            btnTrash.classList.add("btnTrash");
            todo.appendChild(btnTrash);
            // Add div to the list 
            list.appendChild(todo);
        });
    }
    
}