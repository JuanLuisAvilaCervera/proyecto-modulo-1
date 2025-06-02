function toggleNav(){
    const header = document.querySelector('header');
    const ul = header.querySelector('ul');

    if(ul.style.display === "none" || ul.style.display === ""){
        ul.style.display = "grid";
        ul.style.position = "absolute";
        ul.style.zIndex = 5;
        header.style.height = "15rem";
        ul.style.width = "100%";
        ul.style.left= 0;
        ul.style.marginTop = "3rem";
        ul.querySelectorAll('a').forEach((anchor) =>{
            anchor.style.justifyContent = "start";
            anchor.style.position = "relative";
            anchor.style.left = "2rem";
        })
        burguer.name = "close-outline";
        
    }else{
        ul.style.display = "none";
        header.style.height = "auto";
        burguer.name = "menu-outline";
    }
}
