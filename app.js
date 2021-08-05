import {gsap} from "gsap";

const img1 = document.querySelector(".img1")
//when you want to save animation
gsap.registerEffect({
    name: "imgAnimation",
    effect: (targets, config) => {
        return gsap.to(targets, {
            duration: config.duration,
            y: 200,
            scale: 1.4,
            rotation: 360
        })
    },
    duration: 2
})

gsap.effects.imgAnimation(img1,{duration: 5})