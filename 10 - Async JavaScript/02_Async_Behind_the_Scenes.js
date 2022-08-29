//Js move any async function from the callstack to the web Apis and this Apis keep track the function
// function ayi(){
//     console.log("Hiii");
//     console.log("Siiiir");
// }

// console.log("Start");

// ayi();

// console.log("End");

function ayi(){
    console.log("Hiii");
    console.log("Siiiir");
}

console.log("Start");

setTimeout(() =>{
    ayi();
},2000);

console.log("End");