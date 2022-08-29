// 03 Callbacks and Callback Hell : The callback function passed is used to sum up the elements
//of the array. After 2 seconds have passed, the sum of the array is printed which is 9. Callback
//Hell: Callback Hell is essentially nested callbacks stacked below one another forming a pyramid
//structure.Feb 17, 2022.

console.log("Start");

function Do(email,password,callback){
    setTimeout(() =>{
        console.log("Now we get the data");
        callback({email});
    },5000);
}
function fetcho(email,callback){
    setTimeout(() =>{
        callback([1,2,3,4,5,6]);
    },1000);
}
Do("souhail@gmail.com",'59632147',(e) =>{
    console.log(e);
    fetcho(e.email,(vid) =>{
        console.log(vid);
    });
});

console.log("End");