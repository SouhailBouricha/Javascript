let Controller;
let Scene;
let Scene2;

function AnimationSlides(){
    const slides = document.querySelectorAll(".slide");
    Controller = new ScrollMagic.Controller();
    slides.forEach((slide,index,slides) =>{
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
        Scene = new ScrollMagic.Scene({triggerElement:slide,triggerHook:0.25,reverse:false})
        .setTween(SlideTl)
        .addIndicators({colorStart:"white",colorTrigger:"white",name:"Start Trigger"})
        .addTo(Controller)
        const PageTl = gsap.timeline();
        let nextSlide = slides.length === index - 1 ? "end" : slides[index + 1];
        PageTl.fromTo(nextSlide,{ y  : '0%'},{y : '50%'})
        PageTl.fromTo(slide,{opacity : 1, scale : 1},{opacity : 0, scale : 0.5})
        PageTl.fromTo(nextSlide,{ y  : '50%'},{y : '0%'},'-=0.5')
        Scene2 = new ScrollMagic.Scene({triggerElement:slide,triggerHook:0,duration:'100%'})
        .addIndicators({colorStart:"white",colorTrigger:"white",name:"Start Trigger",name:"page",indent:200})
        .setPin(slide,{pushFollowers:false})
        .setTween(PageTl)
        .addTo(Controller);
    });

}

AnimationSlides();