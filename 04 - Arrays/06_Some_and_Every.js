// Every is function allow us to loop over an array and return True if all of the items equal to our condition, if not she return False  
// Some is function allow us to loop over an array and return True if atleast one item equal to our condition, if not she return False  


const videos = ["video1","video2","video3","video4"];
const games = [
    {game:"game 1", rating: 10},
    {game:"game 2", rating: 7.5},
    {game:"game 3", rating: 5.5},
    {game:"game 4", rating: 9.5},
]

everyRating = games.every(function(g){
    return g.rating > 8;
});

console.log(everyRating);

//------------------------------------------------------

someRating = games.some(function(g){
    return g.rating < 5;
});

console.log(someRating);