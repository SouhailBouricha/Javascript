let list = ["Souhail","What's that","Who is that","I don't like this"]
let text = "Souhail Bouricha"

for(let i = 0 ; i < 100 ; i++){
    console.log(i)
}


for(let i = 100 ; i > 0 ; i--){
    console.log(i)
}


for(let i = 0 ; i < list.length ; i++){
    console.log(list[i])
}


for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
    
}

for (let i = 0; i < 100; i++) {
    if(i === 20){
        console.log("You hit the 20");
        continue;
    }
    console.log(i);
}


for (let i = 0; i < 100; i++) {
    if(i === 20){
        console.log("You hit the 20");
        break;
    }
    console.log(i);
}