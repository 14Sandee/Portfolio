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

gsap.from(".about__left p, .para", {
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
        duration: 1.5,
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

