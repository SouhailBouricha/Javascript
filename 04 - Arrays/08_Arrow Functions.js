//Arrow Functions : is simple way to do Callbacks functions by => 

const videos = ["video1","video2","video3","video4"];


//How we used to do it
const newvid = videos.map(function(vid){
    return vid.toUpperCase();
});

//How we can do it

const Nvid = videos.map((vid) => {
    return vid.toUpperCase();
});

const Nvid1 = videos.map(vid => vid.toUpperCase() );

console.log(Nvid1);



