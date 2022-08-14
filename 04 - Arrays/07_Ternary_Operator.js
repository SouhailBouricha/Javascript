//Ternary Operator is simple way to do is statment.

const videos = ["video1","video2","video3","video4"];
const games = [
    {game:"game 1", rating: 10},
    {game:"game 2", rating: 7.5},
    {game:"game 3", rating: 5.5},
    {game:"game 4", rating: 9.5},
]

const newvid = videos.map(function(v){
    return v.includes('4') ? v : "nope";
});

console.log(newvid);