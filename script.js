// This is the main part for the animation of the object script file 

let tl=gsap.timeline({scrollTrigger:{
    trigger:".two",
    scroller:"body",
    start:"top 100%",
    end:"top 0%",
    scrub:5
}})
let tl2=gsap.timeline({scrollTrigger:{
    trigger:".three",
        scroller:"body",
        start:"top 100%",
        end:"top 0%",
        scrub:5
}})

tl.to("#shoe",{
    x:700,
    y:700,
    rotate:0,
})
tl2.to("#shoe",{
    x:400,
    y:1400,
    rotate:45,
})
