const black = document.getElementById("black");

black.addEventListener("mousemove", clicker=>{
    const xco = clicker.clientX;
    const yco = clicker.clientY;
    console.log(xco);
    console.log(yco);
})