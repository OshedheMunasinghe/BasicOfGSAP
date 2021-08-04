import { gsap } from "gsap";

//Easing, go Gsap Doc -> Easing, it's very fun!
const img1 = document.querySelector('.img1')
gsap.from(img1, {
  autoAlpha: 0,
   y:-100,
  rotation: 90,
  ease: "elastic.out(1,0.3)",
  duration: 2
})

//accidently saved wrong branch