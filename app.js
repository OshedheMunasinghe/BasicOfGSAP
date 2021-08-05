import {gsap} from "gsap";

//stor favorit!
const TL = gsap.timeline()
TL.from('.img1', {autoAlpha: 0, y: -50, duration: 1})
TL.from('.img2', {autoAlpha: 0, y: -50, duration: 1})
TL.from('.img3', {autoAlpha: 0, y: -50, duration: 1})
TL.from('h1', {autoAlpha: 0, y: -50, duration: 1})
TL.from('p', {autoAlpha: 0, y: -50, duration: 1})