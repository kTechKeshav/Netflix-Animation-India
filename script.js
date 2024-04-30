var t1 = gsap.timeline();

t1.from("#navbar", {
      y:-80,
      duration: .8
})

t1.from("#insidepage1content", {
      duration:.8,
      y:800
})
t1.from("#insidepage1content h1", {
      scale:0,
      duration:.5
})

t1.from("#content", {
      duration: 2,
      scale:0,
      scrollTrigger:{
            trigger:"#content",
            scroller:"body",
            start:"top 70%",
            end: "top 80%",
            scrub:3
      }
})

t1.from("#ques li", {
      y:80,
      stagger:.5,
      scale:0,
      scrollTrigger:{
            trigger:"#ques li",
            scroller:"body",
            start:"top 90%",
            end: "top 40%",
            scrub:4
      }
})