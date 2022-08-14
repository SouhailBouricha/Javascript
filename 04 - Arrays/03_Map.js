const videos = ["video1","video2","video3","video4"];


// Map is function allow us to loop over an arrays and make some changes and return a value
// forEach allow us to loop over an arrays but don't allow us to return a value
videos.forEach(function(vid){
    console.log(vid);
});

const newvid = videos.map(function(vid){
    return vid.toUpperCase();
});


newvid[1] = "rvr";
console.log(newvid);
console.log(videos);

// the athor big diff btw Map and forEach is if assign the value that map ruturn to us to another variables that make
// a copy of the first array but withou a reference to it.