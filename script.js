// gsap.to("#box1",{
//     x:1200,
//     duration:1.5,
//     delay:1,           
//     rotate:360,
// })

// gsap.to("#box2",{
//     x:1200,
//     backgrounColor:"yellow",
//     duration:1.5,
//     delay:2.5,           
//     rotate:360,

// })

// gsap.to("#box3",{
//     x:1200,
//     scale:0.5,
//     borderRadius:"50%",
//     duration:1.5,
//     delay:4,
    
// })


                 //how tp use gsap timeline.
// var tl=gsap.timeline()

// tl.to("#box1",{
//     x:1000,
//     rotate:360,
//     duration:1.5,
//     delay:1,
// })

// tl.to("#box2",{
//     x:1000,
//     duration:1.5,

// })

// tl.to("#box3",{
//     x:1000,
//     duration:1.5,
// })

var tl=gsap.timeline()    //timeline ka func banao

tl.from("h2",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5,
})

tl.from("h4",{
    y:-30,
    opacity:0,
    duration:1,
    stagger:0.3
})

tl.from("h1",{
    y:-20,
    opacity:0,
    duration:0.5,
    scale:2

})

