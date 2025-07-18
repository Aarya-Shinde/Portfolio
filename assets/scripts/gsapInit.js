gsap.registerPlugin(ScrollTrigger);

gsap.to("#hero", {
  backgroundPosition: "50% 100%",
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    end: "bottom center",
    scrub: true,
  }
});
