//Selecting Our Elements

const colorDivs = document.querySelectorAll(".color");
const generateBtn = document.querySelectorAll(".generate_panel");
const sliders = document.querySelectorAll(".sliders input[type=range]");
const sliders_bow = document.querySelectorAll(".sliders");
const currenthex = document.querySelectorAll(".color h2");
const copy_container = document.querySelector(".copy_container");
const copy_pupup = document.querySelector(".copy_pupup");
const adjusts = document.querySelectorAll(".contoles .adjust");
const lock = document.querySelectorAll(".contoles .lock");
const closes = document.querySelectorAll(".close");
const generate = document.querySelector(".generate");
const save = document.querySelector(".save");
const save_container = document.querySelector(".save_container");
const save_pupup = document.querySelector(".save_pupup");
const close_save = document.querySelector(".close_save");
const submit_save = document.querySelector(".submit_save");
const save_name = document.querySelector(".save_name");
const library = document.querySelector(".library");
const library_container = document.querySelector(".library_container");
const library_pupup = document.querySelector(".library_pupup");
const close_library = document.querySelector(".close_library");
const libraryContent = document.createElement("div");
libraryContent.classList.add("libraryContent");
let selectBtns;
library_pupup.append(libraryContent);
let initialColor;
let Pallets = [];

// add event

generate.addEventListener("click",randomColors)

library_container.addEventListener("click",(e) =>{
    e.stopPropagation();
    library_pupup.classList.remove("active");
    library_container.classList.remove("active");
});
library_pupup.addEventListener("click",(e) =>{
    e.stopPropagation();
});

close_library.addEventListener("click",() =>{
    library_pupup.classList.remove("active");
    library_container.classList.remove("active");
})

library.addEventListener("click",(e) =>{
    openlibrary(e);
});

submit_save.addEventListener("click", () =>{
    const data = JSON.parse(localStorage.getItem("Pallets"));
    const Number = data !== null ? data.length : 0;
    save_container.classList.remove("active");
    let newPallet = {};
    let name = save_name.value;
    save_pupup.classList.remove("active");
    let colors = [];
    for(item of currenthex){
        colors.push(item.innerText);
    }
    newPallet = {name,colors,nr:Number};
    save_name.value = "";
    saveToLocaleStoreg(newPallet);
    const PlaettDiv = document.createElement("div");
    PlaettDiv.classList.add("PlaettsDiv");
    const PalletName = document.createElement("p");
    PalletName.innerText = name;
    PalletName.classList.add("PalletName");
    const PalletColors = document.createElement("div");
    PalletColors.classList.add("PalletColors");
    colors.forEach((item,index) =>{
        const Newcolor = document.createElement("div");
        Newcolor.classList.add("Newcolor");
        Newcolor.style.backgroundColor = item;
        PalletColors.appendChild(Newcolor);

    });
    const selectBtn = document.createElement("button");
    selectBtn.classList.add("selectBtn");
    selectBtn.innerText = "Select";
    selectBtn.setAttribute("dataN",Number);
    selectBtn.addEventListener("click",(e) =>{
        shocColors(e);
    });
    PalletColors.appendChild(selectBtn);
    PlaettDiv.appendChild(PalletName);
    PlaettDiv.appendChild(PalletColors);
    libraryContent.appendChild(PlaettDiv);
    console.log(library.offsetHeight);
});

close_save.addEventListener("click",() =>{
    save_container.classList.remove("active");
    save_pupup.classList.remove("active");
});

save.addEventListener("click",() =>{
    save_container.classList.toggle("active");
    save_pupup.classList.toggle("active");
});
lock.forEach((item) =>{
    item.addEventListener("click",() =>{
        lockFun(item);
    })
});

closes.forEach((item,index) =>{
    item.addEventListener("click", () =>{
        closeBtn(item,index);
    })
 });
adjusts.forEach((item,index) =>{
    item.addEventListener("click", () =>{
        OpenBtn(item,index);
    })
 });

copy_container.addEventListener("transitionend",(e) =>{
    copy_container.classList.remove("active");
});

copy_pupup.addEventListener("transitionend",(e) =>{
    copy_pupup.classList.remove("active");
});

sliders.forEach((item,index) => {
    item.addEventListener("input", (e)=>{
        updateColore(e,index);
    });
})
colorDivs.forEach((item,index) => {
    item.addEventListener("change", () =>{
        updateTheUi(item,index)
    });
});
currenthex.forEach((item) =>{
    item.addEventListener("click",function(e){
        copied(e);
    });
});

//Generate an Hex Color

function generateHex() {
    // let letters = "0123456789abcdef"
    // let hex = "#"
    // for (let i = 0; i < 6; i++) {
    //     hex += letters[Math.floor(Math.random() * 16)];
    // }
    // return hex;
    let hex = chroma.random();
    return hex;
}

function randomColors() {
    initialColor = [];
    colorDivs.forEach((div,index) =>{
        let hex;
        let h2 = div.children[0].children[0];
        hex = generateHex();
        if(div.classList.contains("lockFun")){
            initialColor.push(h2);
            return;
        }
        else{
            initialColor.push(hex);
        }
        div.style.backgroundColor = hex;
        h2.innerText = hex;
        let shite = document.querySelectorAll(`.${div.classList[1]} .sliders input[type=range]`);
        checkTheLuminance(hex,h2,document.querySelectorAll(`.${div.classList[1]}`)[0].children[0].children);
        let hue = shite[0];
        let Bright = shite[1];
        let satr = shite[2];
        let color = chroma(hex);
        updateInput(color,hue,Bright,satr);
        GoodValue(div);
    });
}
function randomColors2(Colors) {
    initialColor = [];
    colorDivs.forEach((div,index) =>{
        let hex;
        let h2 = div.children[0].children[0];
        hex = chroma(Colors[index]);
        if(div.classList.contains("lockFun")){
            initialColor.push(h2);
            return;
        }
        else{
            initialColor.push(hex);
        }
        div.style.backgroundColor = hex;
        h2.innerText = chroma(hex).hex();
        let shite = document.querySelectorAll(`.${div.classList[1]} .sliders input[type=range]`);
        checkTheLuminance(hex,h2,document.querySelectorAll(`.${div.classList[1]}`)[0].children[0].children);
        let hue = shite[0];
        let Bright = shite[1];
        let satr = shite[2];
        let color = chroma(hex);
        updateInput(color,hue,Bright,satr);
        GoodValue(div);
    });
}
function checkTheLuminance(color,text,btns) {
    let luminance = chroma(color).luminance();
    if(luminance > 0.5){
        text.style.color = "black";
        btns[1].style.color = "black";
        btns[2].style.color = "black";
    }
    else{
        btns[1].style.color = "white";
        btns[2].style.color = "white";
        text.style.color = "white";
    }
}
function updateInput(color,hue,Bright,satr){
    let Nosat = color.set('hsl.s', 0);
    let Yessat = color.set('hsl.s', 1);
    let Backsat = chroma.scale([Nosat,color,Yessat]);
    
    let MidBright = color.set('hsl.l', 0.5);
    let BackBright = chroma.scale(["Black",MidBright,"White"]);
    
    satr.style.backgroundImage = `linear-gradient(to right,${Backsat(0)},${Backsat(1)},${Backsat(2)})`;
    Bright.style.backgroundImage = `linear-gradient(to right,${BackBright(0)},${BackBright(0.5)},${BackBright(1)})`;
    hue.style.backgroundImage = `linear-gradient(to right, rgb(204,75,75),rgb(204,204,75),rgb(75,204,75),rgb(75,204,204),rgb(75,75,204),rgb(204,75,204),rgb(204,75,75))`;

}
function updateColore(e){
    // let color = chroma(e.target.parentElement.parentElement.querySelector(".contoles h2").innerText);
    let inputs = e.target.parentElement.querySelectorAll("input[type=range]");
    let index = inputs[0].getAttribute("data-hue");
    let color = initialColor[index];
    let hue = inputs[0];
    let sat = inputs[1];
    let bright = inputs[2];
    // console.log(e.target.parentElement.parentElement.querySelector(".contoles").children);
    let bgColor = color.set('hsl.s', sat.value).set('hsl.l',bright.value).set('hsl.h',hue.value);
    e.target.parentElement.parentElement.style.backgroundColor = chroma(bgColor).hex();
    checkTheLuminance(bgColor,e.target.parentElement.parentElement.querySelector(".contoles h2"),e.target.parentElement.parentElement.querySelector(".contoles").children);
    updateInput(bgColor,hue,bright,sat);
    
}
function updateTheUi(e,index){
    const activDiv = colorDivs[index];
    let color = chroma(activDiv.style.backgroundColor);
    // console.log(activDiv.style.backgroundColor,"gh")
    let h2 = activDiv.querySelector(".contoles h2");
    h2.textContent = color.hex();
}

function GoodValue(div){
    let inputes = div.querySelectorAll('input[type= range]');
    let color = initialColor[inputes[0].getAttribute("data-hue")];
    let heuValue = Math.floor(chroma(color).hsl()[0]);
    let satValue = Math.floor(chroma(color).hsl()[1] * 100) / 100;
    let brightValue = Math.floor(chroma(color).hsl()[2] * 100) / 100;
    inputes[0].value = heuValue;
    inputes[1].value = brightValue;
    inputes[2].value = satValue;
}
function copied(e){
    let color = e.target.textContent;
    let el = document.createElement("textarea");
    el.innerText = color;
    document.body.append(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    copy_container.classList.add("active");
    copy_pupup.classList.add("active");
}
function OpenBtn(item,index){
    sliders_bow[index].classList.toggle("active");
    // console.log(sliders_bow[index]);
}
function closeBtn(item,index){
    sliders_bow[index].classList.remove("active");
}
function lockFun(item){
    item.parentElement.parentElement.classList.toggle("lockFun");
}
function saveToLocaleStoreg(Pallets){
    let Pal;
    if(localStorage.getItem("Pallets") === null){
        Pal = [];
    }
    else[
        Pal = JSON.parse(localStorage.getItem("Pallets"))
    ]
    Pal.push(Pallets);
    // console.log(Pal);
    localStorage.setItem("Pallets",JSON.stringify(Pal)); 
}

function openlibrary(e){
    library_container.classList.add("active");
    library_pupup.classList.add("active");
}
function shocColors(e){
    let nrb = e.target.getAttribute("dataN");
    let Pal = JSON.parse(localStorage.getItem("Pallets"));
    for(item of Pal){
        if(item.nr == nrb){
            randomColors2(item.colors);
}
    }

}
function LoadColors(){
    let Pal = JSON.parse(localStorage.getItem("Pallets"));
    if(Pal){
    for(item of Pal){
    const PlaettDiv = document.createElement("div");
    PlaettDiv.classList.add("PlaettsDiv");
    const PalletName = document.createElement("p");
    PalletName.innerText = item.name;
    PalletName.classList.add("PalletName");
    const PalletColors = document.createElement("div");
    PalletColors.classList.add("PalletColors");
    item.colors.forEach((item,index) =>{
        const Newcolor = document.createElement("div");
        Newcolor.classList.add("Newcolor");
        Newcolor.style.backgroundColor = item;
        PalletColors.appendChild(Newcolor);

    });
    const selectBtn = document.createElement("button");
    selectBtn.classList.add("selectBtn");
    selectBtn.innerText = "Select";
    selectBtn.setAttribute("dataN",item.nr);
    selectBtn.addEventListener("click",(e) =>{
        shocColors(e);
    });
    PalletColors.appendChild(selectBtn);
    PlaettDiv.appendChild(PalletName);
    PlaettDiv.appendChild(PalletColors);
    libraryContent.appendChild(PlaettDiv);
    }
}
    console.log(library.offsetHeight,"efvd");

}
LoadColors();
randomColors();

