let list = ["Souhail","What's that","Who is that","I don't like this"]
let text = "Souhail Bouricha"

for(let name of text){
    console.log(name,text.indexOf(name))
}

//works just for arrays 
list.forEach(function(name,index){
    console.log(name,index)
})