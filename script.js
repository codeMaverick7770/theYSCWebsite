gsap.to("#nav", {
    backgroundColor: "#000",
    duration: .5,
    height: "80px",
    scrollTrigger: {
        trigger: "#nav",
        scroller:"body",
        start: "top -10%",
        end:"top -10%",
        scrub: 3,
    }
    
})