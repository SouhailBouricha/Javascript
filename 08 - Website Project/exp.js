const hikeExp = document.querySelector(".hike-exp");
const Controler = new ScrollMagic.Controller();
const ExploreSecne = new ScrollMagic.Scene({
    triggerElement: ".hike-exp",
    triggerHook: 0.5
}).addIndicators().setClassToggle(".hike-exp","active").addTo(Controler);
// window.addEventListener("scroll",doSomeThing);

// function doSomeThing(){
//     const hikeExpPos = hikeExp.getBoundingClientRect().top;
//     if(hikeExpPos <= 168){
//         console.log(hikeExpPos);
//         hikeExp.style.color = "red";
//     }
// }

// let options = {
//     threshold : 0.1
// }

// let observer = new IntersectionObserver(fn, options);
// function fn(entries){
//     // console.log(entries);
//     entries.forEach(ent => {
//         if(ent.isIntersecting){
//             hikeExp.style.color = "red";
//             console.log(ent.isIntersecting);
//         }
//         console.log(ent.isIntersecting);
//     });
    
// }
// observer.observe(hikeExp);