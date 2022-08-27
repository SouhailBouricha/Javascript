let Controller;
let Scene;

function AnimationSlides(){
    const slides = document.querySelectorAll(".slide");
    Controller = new ScrollMagic.Controller();
    slides.forEach(slide =>{
        // console.log(slide,img,revealimg,revealtext);
        // console.log(slide);
        const img = slide.children[0].children[0];
        console.log(img);
        const revealimg = slide.querySelector(".reveal-img");
        const revealtext = slide.querySelector(".reveal-text");
        const header = document.querySelector(".nav-header");
        const SlideTl = gsap.timeline({defaults:{duration : 1 , ease : "power2.inOut"}});
        SlideTl.fromTo(revealimg,{x:"0%"},{x:"100%"});
        SlideTl.fromTo(revealtext,{x:"0%"},{x:"100%"},"-=0.75");
        SlideTl.fromTo(img,{ scale  : 2},{scale : 1},"-=1");
        SlideTl.fromTo(header,{ y  : '-100%'},{y : '0%'},"-=0.5");
        // gsap.to(revealimg,1,{display:"none"});
        Scene = new ScrollMagic.Scene({triggerElement:slide,TriggerHook:0.25}).setTween(SlideTl).addIndicators({colorStrat:"white",colorTrigger:"white",name:"Start Trigger"}).addTo(Controller)
    });

}

AnimationSlides();