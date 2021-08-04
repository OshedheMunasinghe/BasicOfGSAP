import { gsap } from "gsap";

const img1 = document.querySelector('.img1')
/*gsap.from(img1, {
  autoAlpha: 0,
    duration: 2
})*/

//This can accure a bug, what if user missclick, the image doesnt show up!
document.querySelector('.btn').addEventListener("click", () =>{
  console.info('button pressed')
  gsap.from(img1, {
    scale: 0.5,
    autoAlpha: 0,
    duration: 2,
    y: -100,
    rotate: '68deg',
  })
})