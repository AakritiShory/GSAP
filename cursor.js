var main=document.querySelector("#main")
var cursor=document.querySelector("#cursor")
var imageDiv=document.querySelector("#image")
main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{    //query sellector likha hai
        x:dets.x,
        y:dets.y,
        duration:0.6,
        //ease:"back.out"

    })
})

imageDiv.addEventListener("mouseenter",function(){
    cursor.innerHTML="View More"
    gsap.to(cursor,{
        scale:4,  //cursor ka size bada jab enter ho
        backgroundColor: "#ffffff8a"
    })
})

imageDiv.addEventListener("mouseleave",function(){
    cursor.innerHTML=""
    gsap.to(cursor,{
        scale:1,  //cursor ka size normal 
        backgroundColor:"#fff"
    })
})