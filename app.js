import { gsap } from "gsap";

const img1 = document.querySelector(".img1")

//how to write function in GSAP, to use in js how to trigger events almost like android activityStart Resume ect.
gsap.to(img1,
    {
        x:100,
        duration: 1,
        repeat: 1,
        onComplete: function () {
            console.log('COMPLETE')
        },
        onStart: () => console.log('START'),
        onUpdate: () => console.log('UPDATE'),
        onRepeat: () => console.log('REPEAT'),
    })