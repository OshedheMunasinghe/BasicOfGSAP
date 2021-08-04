import { gsap } from "gsap";

//keyframes, when you want to animate at one line instead duplicate to()
const img1 = document.querySelector(".img1")


gsap.to('.img1',
    {
        keyframes:[
            {duration: 0.3, x:100},
            {duration: 0.3, y:100},
            {duration: 0.3, x:200}
        ]
    })



