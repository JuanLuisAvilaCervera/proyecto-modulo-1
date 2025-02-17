
window.onload = () => {
    const burguer = document.getElementById("nav-burguer");

    burguer.addEventListener('click', (e) => {
        // console.log("ON CLICK WORKS")
        toggleNav();
    })

    function toggleNav(){
        const nav = document.querySelector('header').querySelector('ul');
        if(nav.style.display === "none" || nav.style.display === ""){
            nav.style.display = "grid";
            nav.style.position = "absolute";
            nav.style.zIndex = 5; 
        }else{
            nav.style.display = "none";
        }
    }
}

