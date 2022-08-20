// to avoid creating methode inside evry constructur and add more memory we should just add
// this methodes to the prototype proprty.

function Todo(name,completed){
    this.name = name;
    this.completed = completed;
    this.getname = function(){
        console.log(name);
    }
}
Todo.prototype.getAll = function(){
    console.log(this.name +" "+ this.completed);
}
const todo = new Todo("sou",false);
const todo2 = new Todo("hail",true);

// todo.getname();
// console.log(todo);

todo.getAll();
todo2.getAll();
console.log(todo2);
console.log(todo);