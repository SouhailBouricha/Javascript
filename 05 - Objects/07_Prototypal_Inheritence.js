function Enemy(life,name,level){
    this.life = life;
    this.name = name;
    this.level = level;
}

Enemy.prototype.getInfo = function(){
    console.log(this.life,this.name,this.level);
}


const tru = new Enemy(12,"tru",10);

tru.getInfo();

function Dragon(life,name,level,dmg,series){
    Enemy.call(this,life,name,level);
    this.dmg = dmg;
    this.series = series;
}
Dragon.prototype = Object.create(Enemy.prototype);

const viris = new Dragon(18,"viris",20,150,"oli");
viris.getInfo();

console.log(viris,tru);