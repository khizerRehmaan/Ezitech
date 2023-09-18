let tl = gsap.timeline();
tl.from("#nav-part1, #nav-part2,#nav-part3", {
  y: -20,
  opacity: 0,
  duration: 0.5,
  delay: 0,
  stagger: 1
});
tl.from("#container-right #circle img", {
  y: -120,

  scrollTrigger: {
    trigger: "#container-right #circle img",
    scroller: "body"
  }

});
tl.from("#page1-child2-right .trans-box img", {
  y: -280,
  opacity: 0.5,
  duration: 0,
  scrollTrigger: {
    trigger: "#page1-child2-right .trans-box img",
    scroller: "body"
  }
});