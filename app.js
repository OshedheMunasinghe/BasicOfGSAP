import { gsap } from "gsap";


const img1 = document.querySelector('.img1')
gsap.from(img1, {
  autoAlpha: 0,
   y:-100,
  rotation: 90,
  ease: "elastic.out(1,0.3)",
  duration: 2,
    repeat: -1,
    yoyo: true,
    repeatDelay: 0.9
})