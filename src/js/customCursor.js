// ==============================================
// the inner mouse
{   
    const c = document.getElementById("cursorInner");
    document.addEventListener("mousemove", mouseHalo => {
        const posX = mouseHalo.clientX;
        const posY = mouseHalo.clientY;
        
        c.style.left = `${posX}px`;
        c.style.top = `${posY}px`;
    })
}




// ===============================================
// the outer mouse

{
    const c = document.getElementById("cursorOuter");
    document.addEventListener("mousemove", mouseHalox => {
        const posX = mouseHalox.clientX;
        const posY = mouseHalox.clientY;

        c.style.left = `${posX}px`;
        c.style.top = `${posY}px`;
    })
}