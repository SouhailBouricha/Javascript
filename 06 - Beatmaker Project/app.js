class Dumkit{
    constructor(){
        this.pad = document.querySelectorAll(".pad");
        this.kick_classic = document.querySelector(".kick_classic");
        this.snare_acoustic = document.querySelector(".snare_acoustic");
        this.hihat_acoustic = document.querySelector(".hihat_acoustic");
        this.playBtn = document.querySelector(".play");
        this.index = 0;
        this.select = document.querySelectorAll("select");
        this.bpm = 150;
        this.isPlaying = null;
        this.mutesBtn = document.querySelectorAll(".mute");
        this.range = document.querySelector(".range");
        this.tempo_span = document.querySelector(".tempo_span");
    }
    Padactive(){
        this.classList.toggle("active")
    }
    repeter(){
        let step = this.index % 8;
        let activesBars = document.querySelectorAll(`.b${step}`);
        //Loop over the activesBars
        activesBars.forEach((bar) => {
            bar.style.animation = "scale 0.3s alternate ease-in-out 2";
            if(bar.classList.contains("active")){
                if(bar.classList.contains("snare_pad")){
                    this.snare_acoustic.currentTime = 0;
                    this.snare_acoustic.play();
                }
                if(bar.classList.contains("kick_pad")){
                    this.kick_classic.currentTime = 0;
                    this.kick_classic.play();
                }
                if(bar.classList.contains("hihat_pad")){
                    this.hihat_acoustic.currentTime = 0;
                    this.hihat_acoustic.play();
                }
            }
        });
        this.index++;
    }
    start(){
        let interval = (60 / this.bpm) * 1000;
        if(this.isPlaying === null){
            this.isPlaying = setInterval(() => {
                this.repeter()
            },interval);
            this.playBtn.textContent = "Pause";
        }
        else{
            clearInterval(this.isPlaying);
            this.isPlaying = null;
            this.playBtn.textContent = "Play";
        }
            
    }
    choose(e){
        let select_Name = e.target.name;
        let select_value = e.target.value;
        switch(select_Name){
            case 'hihat_select':
                this.hihat_acoustic.src = "http://127.0.0.1:5500/06%20-%20Beatmaker%20Project" + select_value;
                break;
            case 'kick_select':
                this.kick_classic.src = "http://127.0.0.1:5500/06%20-%20Beatmaker%20Project" + select_value;
                break;
            case 'snare_select':
                this.snare_acoustic.src = "http://127.0.0.1:5500/06%20-%20Beatmaker%20Project" + select_value;
                break;
        }
    }
    mutes(e){
        let dataTrack = e.target.getAttribute("data-track");
        e.target.classList.toggle("active");
        if(e.target.classList.contains("active")){
            switch(dataTrack){
                case "0":
                    this.hihat_acoustic.volume = 0;
                    break;
                case "1":
                    this.kick_classic.volume = 0;
                    break;
                case "2":
                    this.snare_acoustic.volume = 0;
                    break;
            }
        }
        else{
            switch(dataTrack){
                case "0":
                    this.hihat_acoustic.volume = 1;
                    break;
                case "1":
                    this.kick_classic.volume = 1;
                    break;
                case "2":
                    this.snare_acoustic.volume = 1;
                    break;
            }
        }
    }
    change(e){
        this.tempo_span.textContent = e.target.value;
    }
    update(e){
        this.bpm = e.target.value;
        if(this.isPlaying){
            console.log(this.isPlaying,this.bpm);
            clearInterval(this.isPlaying);
            this.isPlaying = null;
            this.start();
        }
    }
}

const dumkit = new Dumkit();

dumkit.pad.forEach((item) => {
    item.addEventListener("click",dumkit.Padactive);
    item.addEventListener("animationend",() => {
        item.style.animation = "";
    });
});

dumkit.playBtn.addEventListener("click",() => {
    dumkit.start();
});

dumkit.select.forEach((sel) => {
    sel.addEventListener("click",(e) => {
        dumkit.choose(e);
    });
});

dumkit.mutesBtn.forEach((btn) =>{
    btn.addEventListener("click",(e) =>{
        dumkit.mutes(e);
    });
});

dumkit.range.addEventListener("input",(e) => {
    dumkit.change(e);
});

dumkit.range.addEventListener("change",(e) => {
    dumkit.update(e);
});