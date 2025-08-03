
function LocomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}



function navAnimation(){
    var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to("#nav-bottom", {
            height: "21vh",
            duration: 0.5
        })
        tl.to(".nav-part2 h5", {
            display: "block",
            duration: 0.1

        })
        tl.to(".nav-part2 h5 span", {
            y: 0,
            // duration:0.3,
            stagger: {
                amount: 0.5
            }
        })
    })
    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.2
        })
    })
}
function page2Animation() {
    let elems = document.querySelectorAll('.page2-right-elem');


elems.forEach(function(elem){
elem.addEventListener('mouseenter', function(){
   gsap.to(elem.childNodes[3],{
    opacity: 1,
    scale: 1
   })
})
elem.addEventListener('mouseleave', function(){
   gsap.to(elem.childNodes[3], {
    opacity: 0,
    scale: 0
   })
})
elem.addEventListener('mouseover', function(dets){
    gsap.to(elem.childNodes[3], {
        x: dets.x - elem.getBoundingClientRect().x - 90,
        y: dets.y - elem.getBoundingClientRect().y - 112
    })
})

})

}
function page3VideoAnimation(){
    let page3Center = document.querySelector('.page3-center');
let video = document.querySelector('video');

page3Center.addEventListener('click', function(){
    video.play()
    gsap.to(video, {
        transform: 'scaleX(1) scaleY(1)',
        opacity: 1,
        borderRadius: 0
    })
})
video.addEventListener('click', function(){
    video.pause()
    gsap.to(video, {
        transform: 'scaleX(0.7) scaleY(0.2)',
        opacity: 0,
        borderRadius: '30px'
    })
})
}

function page5Animation(){
    let page5RightTop = document.querySelector('.page5-top .page5-right');
let page5RightTopVideo = document.querySelector('.page5-top video')
page5RightTop.addEventListener('mouseenter', function(){
    page5RightTopVideo.play()
    gsap.to(page5RightTopVideo, {
        opacity: 1,
        
    })

})
page5RightTop.addEventListener('mouseleave', function(){
    page5RightTopVideo.load()
    gsap.to(page5RightTopVideo, {
        opacity: 0,
        
    })

})

let page5Rightbottom = document.querySelector('.page5-bottom .page5-right');
let page5RightbottomVideo = document.querySelector('.page5-bottom video')
page5Rightbottom.addEventListener('mouseenter', function(){
    page5RightbottomVideo.play()
    gsap.to(page5RightbottomVideo, {
        opacity: 1,
        
    })

})
page5Rightbottom.addEventListener('mouseleave', function(){
    page5RightbottomVideo.load()
    gsap.to(page5RightbottomVideo, {
        opacity: 0,
        
    })

})
}

function page7Animation(){
    gsap.from('#btm7-part2 h4', {
    x: 0,
    duration: 2,
    scrollTrigger: {
        trigger: "#btm7-part2",
        scroller: ".main",
        start: "top 80%",
        end: "top 10%",
        scrub: true
    } 
})
}
function loadingAnimation(){
    var tl = gsap.timeline();
tl.from(".page1", {
    opacity: 0,
    
})
tl.from(".page1 ", {
transform: "scaleX(0.7) scaleY(0.2)",
    borderRadius: "100px",
    duration: 1,
    ease: "expo-out"
})
tl.from("nav",{
    opacity: 0
})
tl.from(".page1 h1, .page1 p, .page1 div", {
    opacity: 0,
    stagger: 0.2,
    duration: 1
})
}

LocomotiveAnimation();
navAnimation();
page2Animation();
page3VideoAnimation();
page5Animation();
page7Animation();
loadingAnimation();

