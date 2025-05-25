 const gradient = document.getElementById("gradient");
       document.addEventListener("mousemove", (e) => {
        // console.log(e);
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        gradient.style.left=`${mouseX - 100}px`
        gradient.style.top=`${mouseY - 100}px`
       })