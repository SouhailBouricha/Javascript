function Todo(name,completed){
    this.name = name;
    this.completed = completed;
    this.getname = function(){
        console.log(name);
    }
}

const todo = new Todo("sou",false);

todo.getname();
console.log(todo);