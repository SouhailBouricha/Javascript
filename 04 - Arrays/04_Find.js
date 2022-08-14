// Find is function allow us to loop over an array and return the first item that equal to our condition

const videos = ["video1","video2","video3","video4"];


newvid = videos.find(function(vid){
    return vid.includes("2");
})

console.log(newvid);