//GSAP

gsap.from(".animate", {
    scrollTrigger: {
        trigger: ".hall__of__fame",
        start: "top 60%",
    },
        stagger: .2,
        y: 20,
        opacity: 0,
        duration: 2,
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