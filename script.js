gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "70px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      markers:true,
      start: "top 0%",
      end: "top 10%",
      scrub: 1,
    },
  });