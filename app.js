import { gsap } from "gsap";

const img1 = document.querySelector('.img1')
gsap.to(img1, {
    x:100,
    y:100,
    duration: 2,
    rotate: '45deg',
    backgroundColor: 'red'
})