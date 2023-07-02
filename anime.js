

let anime = gsap.timeline();

anime.
// the animation begins
from("#firstelm" ,{
    y :-5000,
    ease:"power4",
    duration:1.8})
// the rotation starts
.to("#firstelm" ,{
    rotation: 360*20,
    borderRadius: "50%",
    scale:0.8,
    duration:3,
},"<0.9")

// the small particles prepare

.to("#div1",{
    scale:1.2,
    duration:2,
    ease:"elastic",
    x:+900,
    y:+200,
})
.to("#div2",{
    scale:1.2,
    duration:2,
    ease:"elastic",
    x:+920,
    y:-270,
},"<")
.to("#div3",{
    scale:1.2,
    duration:2,
    ease:"elastic",
    x:-910,
    y:-260,
},"<")
.to("#div4",{
    scale:1.2,
    duration:2,
    ease:"elastic",
    x:-900,
    y:+220,
},"<")
.to("#div5",{
    scale:1.2,
    duration:2,
    ease:"elastic",
    x:-100,
    y:-300,
},"<")
.to("#div6",{
    scale:1.2,
    duration:2,
    ease:"elastic",
    x:-500,
    y:-200,
},"<")
.to("#div7",{
    scale:1.2,
    duration:2,
    ease:"elastic",
    x:-400,
    y:-200,
},"<")
.to("#div8",{
    scale:1.2,
    duration:2,
    ease:"elastic",
    x:-300,
    y:-200,
},"<")
.to("#div9",{
    scale:1.2,
    duration:2,
    ease:"elastic",
    x:-200,
    y:-200,
},"<")
.to("#div10",{
    scale:1.2,
    duration:2,
    ease:"elastic",
    x:-100,
    y:-200,
},"<")
.to("#firstelm" ,{
    scale: 1.6,
    ease:"elastic",
    duration:0.8,
},"<")
    