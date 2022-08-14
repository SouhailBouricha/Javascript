const videos = ["video1","video2","video3","video4"];

// Callbacks Function :  functions get invoke just aleter time
// videos.addevetlistener("click",function(){
//     return 0,
// })

//Higher Order Functions :  is a functions takes another function as a parameter 

function rep(fun){
    fun();
    fun();
    fun();
}
function say(){
    console.log("hi     " + Math.random());
}

rep(say);