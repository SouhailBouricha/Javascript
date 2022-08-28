let Controller;
let Scene;
let Scene2;
const burger = document.querySelector(".burger");
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
        // .addIndicators({colorStart:"white",colorTrigger:"white",name:"Start Trigger"})
        .addTo(Controller)
        const PageTl = gsap.timeline();
        let nextSlide = slides.length === index - 1 ? "end" : slides[index + 1];
        PageTl.fromTo(nextSlide,{ y  : '0%'},{y : '50%'})
        PageTl.fromTo(slide,{opacity : 1, scale : 1},{opacity : 0, scale : 0.5})
        PageTl.fromTo(nextSlide,{ y  : '50%'},{y : '0%'},'-=0.5')
        Scene2 = new ScrollMagic.Scene({triggerElement:slide,triggerHook:0,duration:'100%'})
        //.addIndicators({colorStart:"white",colorTrigger:"white",name:"Start Trigger",name:"page",indent:200})
        .setPin(slide,{pushFollowers:false})
        .setTween(PageTl)
        .addTo(Controller);
    });

}
window.addEventListener("mousemove", cursor);
window.addEventListener("mouseover", cursorAnimmate);
function cursor(e){
    const cursorEle = document.querySelector(".cursor");
    cursorEle.style.top = e.pageY + "px";
    cursorEle.style.left = e.pageX + "px";
}

function cursorAnimmate(e){
    const cursorEle = document.querySelector(".cursor");
    if(e.target.id === "logo" || e.target.classList.contains("burger")){
        cursorEle.classList.add("active");
    }
    else{
        cursorEle.classList.remove("active");
    }
    if(e.target.classList.contains("explore")){
        cursorEle.classList.add("exp");
        cursorEle.innerText = "Tap"
        gsap.to(".title-swip",{y : '0%'})
    }
    else{
        cursorEle.classList.remove("exp");
        cursorEle.innerText = "";
        gsap.to(".title-swip",{y : '100%'})

    }
}

burger.addEventListener("click",menuOpen);

function menuOpen(e){
    if(!e.target.classList.contains("open")){   
        e.target.classList.add("open");
        gsap.to(e.target.children[0],0.5,{rotate : '-45',y : 5,background : "black"});
        gsap.to(e.target.children[1],0.5,{rotate : '45',y : -5,background : "black"});
        gsap.to("#logo",0.5,{color : "black"});
        gsap.to(".nav-bar",1,{ clipPath : "circle(2500px at 100% -10%)"});
        document.body.classList.add("hide");
    }
    else{
        e.target.classList.remove("open");
        gsap.to(e.target.children[0],0.5,{rotate : '0',y : 0,background : "white"});
        gsap.to(e.target.children[1],0.5,{rotate : '0',y : 0,background : "white"});
        gsap.to("#logo",0.5,{color : "white"});
        gsap.to(".nav-bar",1,{ clipPath : "circle(10px at 100% -10%)"});
        document.body.classList.remove("hide");
        
    }
    console.log(e.target.children[1]);
}
const logo = document.querySelector('#logo');
barba.init({
    views:[{
        namespace:'home',
        beforeEnter(){
            AnimationSlides();
            logo.href = './index.html';
        },
        beforeLeave(){
            Controller.destroy();
            Scene.destroy();
            Scene2.destroy();
        }
    },
    {
        namespace:'fashion',
        beforeEnter(){
            logo.href = '../index.html';
        }
    }],
     transitions: [{
        leave({ current, next }) {
          let done = this.async();
          //An Animation
          const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
          tl.fromTo(current.container, 1, { opacity: 1 }, { opacity: 0 });
          tl.fromTo(
            ".swipe",
            0.75,
            { x: "-100%" },
            { x: "0%", onComplete: done },
            "-=0.5"
          );
        },
        enter({ current, next }) {
          let done = this.async();
          //Scroll to the top
          window.scrollTo(0, 0);
          //An Animation
          const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
          tl.fromTo(
            ".swipe",
            1,
            { x: "0%" },
  
            { x: "100%", stagger: 0.2, onComplete: done }
          );
          tl.fromTo(next.container, 1, { opacity: 0 }, { opacity: 1 });
          tl.fromTo(
            ".nav-header",
            1,
            { y: "-100%" },
            { y: "0%", ease: "power2.inOut" },
            "-=1.5"
          );
        }
      }
    ]
})