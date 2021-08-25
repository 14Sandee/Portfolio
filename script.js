var menu = document.querySelector(".menu");
var ml = document.querySelector(".menuline");
var ml2 = document.querySelector(".menuline2");
var navMenu = document.querySelector(".navmenu");
var navLinks = document.querySelector(".navlinks");
var clicked = false;

const openMenu = () => {
    console.log("open");
    ml.style.transform = "rotate(45deg) translate(3px, 8px)";
    ml2.style.transform = "rotate(-45deg) translate(0px, -5px)";
    // navMenu.style.display = "flex";
    navLinks.style.display = "flex";
    navMenu.style.height = "100vh";
    clicked = true;


    gsap.from(".navlinks ul li", {
        stagger: .2,
        opacity: 0,
        duration: 1,
      
        y: -20,
        ease: "Expo.easeInOut"
    })
    gsap.from(".fade", {
        y: 10,
        opacity: 0,
        delay: 1,
        duration: 1,
    })
};

const closeMenu = () => {
    console.log("close");
    ml.style.transform = "rotate(0deg) translate(0px, 0px)";
    ml2.style.transform = "rotate(0deg) translate(0px, 0px)";
    // navMenu.style.display = "none";
    navLinks.style.display = "none";
    navMenu.style.height = "0vh";
    clicked = false;
};

const menuClick = () => {
    console.log("clicked");
    clicked === false ? openMenu() : closeMenu()
};

menu.addEventListener("click", menuClick);



//GSAP

gsap.from(".letter", {
    stagger: .08,
    x: -20,
    opacity: 0,
    rotateY: "-360deg",
    ease: "Expo.easeInOut"
})
gsap.from(".heading-container p", {
    y:-50,
    opacity: 0,
    duration: 2,
    delay: 1
})
gsap.from(".circle", {
    opacity: 0,
    duration: 2,
    delay: 1
})

gsap.from(".about__left p, .para, .techstack", {
    scrollTrigger: {
        trigger: "header",
        start: "bottom 55%",
    },
        stagger: .2,
        y: -20,
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
})


gsap.from(".animate", {
    scrollTrigger: {
        trigger: ".hall__of__fame",
        start: "top 60%",
    },
        stagger: .2,
        y: 20,
        opacity: 0,
        duration: 1.2,
        ease: Expo.easeInOut
})

gsap.utils.toArray(".row3").forEach(everyRow => {
    ScrollTrigger.create({
        trigger: everyRow,
        pin: true,
        start: "top 80px",
        end: "bottom 22%",
    })
})

