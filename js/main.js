document.addEventListener('DOMContentLoaded', (event) => {
  gsap.to(".profile-anim", { opacity: 1, duration: .7, ease: 'power1.out'}, .3)
  gsap.to(".header-text-anim", { opacity: 1, x: 0, duration: .7, ease: 'power1.out', stagger: 0.3}, .6)
  gsap.to(".button-anim", { scale: 1, duration: .7, ease: 'elastic.out(.6,0.3)', stagger: 0.2}, 1.5)
  gsap.to(".arrow-anim", { opacity: 1, y: 0, duration: .7, ease: 'power1.out'}, 2.5)
  gsap.to(".arrow-anim", { y: "-15px", duration: .7, repeat: -1, yoyo: true, ease: 'power1.out'}, 2.7)
  gsap.to(".section-text-anim", { opacity: 1, x: 0, duration: .7, ease: 'power1.out', stagger: 0.3, scrollTrigger: {
    trigger: ".jobs",
    start: "top center",
  }})
  gsap.to(".square-anim", { scale: 1, duration: .7, ease: 'elastic.out(.6,0.3)', stagger: 0.15, delay: .7, scrollTrigger: {
    trigger: ".jobs",
    start: "100px 50%",
  }})
  gsap.to(".services-text-anim", { opacity: 1, x: 0, duration: .7, ease: 'power1.out', stagger: 0.3, scrollTrigger: {
    trigger: ".services",
    start: "top center",
  }})
  gsap.to(".card-anim", { opacity: 1, duration: .7, ease: 'power1.out', stagger: 0.2, scrollTrigger: {
    trigger: ".services",
    start: "100px center",
  }})
  gsap.to(".services-anim", { opacity: 1, x: 0, duration: .7, ease: 'power1.out', stagger: 0.2, delay: .4, scrollTrigger: {
    trigger: ".services",
    start: "100px center",
  }})
  gsap.to(".footer-text-anim", { opacity: 1, x: 0, duration: .7, ease: 'power1.out', stagger: 0.3, scrollTrigger: {
    trigger: "footer",
    start: "top center",
  }})
  gsap.to(".rectangle-anim", { opacity: 1, y: 0, duration: .7, ease: 'power1.out', stagger: 0.3, delay: .7, scrollTrigger: {
    trigger: "footer",
    start: "100px 50%",
  }})
})
