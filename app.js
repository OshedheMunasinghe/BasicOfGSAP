import {gsap} from "gsap";

//När man vi animera samtidigt, lägg till tredje parameter i position
//position kan ändra till vanlig siffra, position påminner som en parameter-duration :)
//du kan koda som defult i timeline i methods så det blir läsbart.

const TL = gsap.timeline({
    defaults: {
        duration: 1,
        ease: "power4.out"
    },
    repeat: -1,
    yoyo: true,
    onComplete: () => console.log("COMPLETE"),
    onStart: () => console.log("START")
})
TL.from('.img1', {autoAlpha: 0, y: -50, duration: 1})
TL.from('.img2', {autoAlpha: 0, y: -50, duration: 1})
TL.from('.img3', {autoAlpha: 0, y: -50, duration: 1})
TL.from('h1', {autoAlpha: 0, y: -50, duration: 1})
TL.from('p', {autoAlpha: 0, y: -50, duration: 1})