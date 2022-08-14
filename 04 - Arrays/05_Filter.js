// filter is function allow us to loop over an array and return Moltipel items equal to our condition

const videos = ["video1","video2","video3","video4"];
const games = [
    {game:"game 1", rating: 10},
    {game:"game 2", rating: 7.5},
    {game:"game 3", rating: 5.5},
    {game:"game 4", rating: 9.5},
]

ratingGames = games.filter(function(g){
    return g.rating > 8;
});

console.log(ratingGames);