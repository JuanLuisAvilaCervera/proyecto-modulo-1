

window.onload = () => {

    const scrollable = document.createElement("div");
    scrollable.setAttribute("id", "scrollable");
    scrollable.style.position = "fixed";
    scrollable.style.zIndex = 4;
    scrollable.style.top = 0;
    scrollable.style.width = 0;

    const body = document.querySelector('body')

    body.prepend(scrollable);

    window.addEventListener('scroll', () =>{
        console.log("Scroll distance: " + window.scrollY);
        

        const html = document.querySelector('html');

        const height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

        console.log("Height: " + height);
        const scrollpercentage = window.scrollY / height * 100;
        scrollable.style.width = scrollpercentage+ "%"
        scrollable.style.border = "solid 3px #08A6E4";
        if(window.scrollY === 0){
            scrollable.style.border = "none";
        }
    })

}

    //CREATE SCROLL PERCENTAGE

    //STYLES

    //GET EVENT

    //CHANGE SCROLL PERCENTAGE

