function greet(name){
    console.log(`Hello ${name}`);
}

greet("rg");

function max(n1 = 0 , n2 = 0){
    if(n1 > n2){
        return n1;
    }
    else{
        return n2;
    }
}
console.log(max(80,8));