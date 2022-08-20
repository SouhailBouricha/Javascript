class Enemy{
    constructor(life,name,level){
        this.life = life;
        this.name = name;
        this.level = level;
    }
    getinfo(){
        console.log(this.life,this.name,this.level);
    }
}

const tru = new Enemy(10,"tru",150);

tru.getinfo();

class Dragon extends Enemy{
    constructor(life,name,level,dmg,series){
        super(life,name,level)
        this.dmg = dmg;
        this.series = series;
    }
}

const ryt = new Dragon(100,"lili",1050,"err",42);

console.log(ryt);
ryt.getinfo();