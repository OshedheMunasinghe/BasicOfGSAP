import {gsap} from "gsap";

const img1 = document.querySelector('.img1')
/*gsap.from(img1, {
  autoAlpha: 0,
    duration: 2
})*/

//This is the solution to rid of flashy buggy and missclicking :)
document.querySelector('.btn').addEventListener("click", () => {
    console.info('button pressed')
    gsap.fromTo(img1,
        {autoAlpha: 0},
        {autoAlpha: 1, duration: 2}
    )//end fromTo
})