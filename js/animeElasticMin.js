

let anime = gsap.timeline();

anime.
// =======================================
// the animation begins

from("#firstelm" ,{
    y :-5000,
    ease:"power4",
    duration:1.8})
// =======================================
// the rotation starts
.to("#firstelm" ,{
    rotation: 360*20,
    borderRadius: "50%",
    scale:0.8,
    duration:3,
},"<0.9")
// =======================================
// the small particles prepare

// plotted div1
.to("#div1",{
    scale:1.2,
    duration:2,
    ease:"elastic",
    x:-300,
    y:+44.44,
})

// plotted div2
.to("#div2",{
    scale:1.2,
    duration:2,
    ease:"elastic",
    x:-700,
    y:+70,
},"<")
// plotted div3
.to("#div3",{
    scale:1.2,
    duration:2,
    ease:"elastic",
    x:-600,
    y:+282.22,
},"<")

// plotted div4
.to("#div4",{
    scale:1.2,
    duration:2,
    ease:"elastic",
    x:-400,
    y:+444.4,
},"<")

// plotted div5
.to("#div5",{
    scale:1.2,
    duration:2,
    ease:"elastic",
    x:+0,
    y:+333.32,
},"<")

// plotted div6
.to("#div6",{
    scale:1.2,
    duration:2,
    ease:"elastic",
    x:-900,
    y:-111.11,
},"<")

// plotted div7
.to("#div7",{
    scale:1.2,
    duration:2,
    ease:"elastic",
    x:-650,
    y:-182.2,
},"<")

// plotted div8
.to("#div8",{
    scale:1.2,
    duration:2,
    ease:"elastic",
    x:-400,
    y:-444.4,
},"<")

// plotted div9
.to("#div9",{
    scale:1.2,
    duration:2,
    ease:"elastic",
    x:-350,
    y:-166.66,
},"<")

// plotted div10
.to("#div10",{
    scale:1.2,
    duration:2,
    ease:"elastic",
    x:0,
    y:-333.32,
},"<")

// plotted div11
.to("#div11",{
    scale:1.2,
    duration:2,
    ease:"elastic",
    x:+400,
    y:+444.4,
},"<")

// plotted div12
.to("#div12",{
    scale:1.2,
    duration:2,
    ease:"elastic",
    x: +600,
    y: 0,
},"<")

// plotted div13
.to("#div13",{
    scale:1.2,
    duration:2,
    ease:"elastic",
    x: +300,
    y: +111.1,
},"<")

// plotted div14
.to("#div14",{
    scale:1.2,
    duration:2,
    ease:"elastic",
    x:+900,
    y: +111.11,
},"<")

// plotted div15
.to("#div15",{
    scale:1.2,
    duration:2,
    ease:"elastic",
    x:+600,
    y: 0,
},"<")

// plotted div16
.to("#div16",{
    scale:1.2,
    duration:2,
    ease:"elastic",
    x:+300,
    y:-166.65,
},"<")

// plotted div17
.to("#div17",{
    scale:1.2,
    duration:2,
    ease:"elastic",
    x: 700,
    y: -222.2,
},"<")

// plotted div18
.to("#div18",{
    scale:1.2,
    duration:2,
    ease:"elastic",
    x:+400,
    y:-444.4,
},"<")

// ==============================================
// the explosion effect
.to("#firstelm" ,{
    scale: 1.4,
    ease:"elastic",
    duration:1,
},"<")
    