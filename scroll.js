gsap.from("#page1 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
})
                             //box sath scroll trigger
gsap.from("#page2 #box",{
    scale:0,
    //delay:1,
    opacity:0,
    duration:2,
    rotate:360,
    //scrollTrigger:"#page2 #box"          short mei

    scrollTrigger:{
        trigger:"#page2 #box", //trigger kro animation ko
        scroller:"body",
        markers:true     , //kaha start aur end rahega
        start:"top 60%",    //i want ki uper neeche scrollkrke bhi chle
        end:"top 30%",
        //scrub:true,
        scrub:2,
    }
})

// gsap.from("#page2 h1",{
//     opacity:0,
//     duration:2,
//     x:500,
//     scrollTrigger:{
//         trigger:"#page2 #h1",
//         scroller:"body",
//         markers:true,
//         start:"top 50%"
//     }
// })
// gsap.from("#page2 h2",{
//     opacity:0,
//     duration:2,
//     x:-500,
//     scrollTrigger:{
//         trigger:"#page2 #h1",
//         scroller:"body",
//         markers:true,
//         start:"top 50%"
//     }
// })
gsap.from("#page3 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
})