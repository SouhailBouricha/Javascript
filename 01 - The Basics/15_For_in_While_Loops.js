let list = ["Souhail","What's that","Who is that","I don't like this"]
let text = "Souhail Bouricha"
const object = {
    name: "Souhail",
    age: 20,
    ismaried: false,
    greeet: function(name){
        return `Hello ${name}`;
    }
}

//For in works just for objects

for(let i in object){
    if(i === 'greeet'){
        console.log(`${i} : ${object[i](i)}`);
        continue;
    }
    console.log(`${i} : ${object[i]}`);
}

//While loops
i = 0
while(i < 10){
    console.log(i)
    i+=1
}

i = 15
do{
    console.log(i)
    i+=1
}
while(i < 10)