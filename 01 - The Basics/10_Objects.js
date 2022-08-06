const object = {
    name: "Souhail",
    age: 20,
    ismaried: false,
    greeet: function(name){
        return `Hello ${name}`;
    }
}

console.log(object.name);
console.log(object.age);
console.log(object.ismaried);
console.log(object.greeet("Sou"));

/*evrything in js is an object, and they are some built-in objects 
do some magic things for us, the big one is window, 
inside it there is console ect...*/