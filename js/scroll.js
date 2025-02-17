


window.onload = () => {

    const html = document.querySelector('html');
    const body = document.querySelector('body')
    const height = Math.max( body.scrollHeight, body.offsetHeight, 
                        html.clientHeight, html.scrollHeight, html.offsetHeight );

    generateVerticalScroll( body);
    generateBackToTopButton(body);

    window.addEventListener('scroll', () =>{
        adjustVerticalScroll( height);
    })


}

function generateVerticalScroll( body ){
    const scrollable = document.createElement("div");
    scrollable.setAttribute("id", "scrollable");
    scrollable.style.position = "fixed";
    scrollable.style.zIndex = 4;
    scrollable.style.top = 0;
    scrollable.style.width = 0;


    body.prepend(scrollable);
}

function adjustVerticalScroll( height){
    

    const scrollpercentage = window.scrollY / height * 100;
    scrollable.style.width = scrollpercentage+ "%"
    scrollable.style.border = "solid 3px #08A6E4";
    if(window.scrollY === 0){
        scrollable.style.border = "none";
    }
}

function generateBackToTopButton(body){
    const backToTopDiv = document.createElement("div");
    backToTopDiv.setAttribute("id", "backToTopDiv");
    backToTopDiv.style = "width:100%; position:sticky; display:flex; justify-items: right;";
    const backToTopButton = document.createElement("button");
    backToTopButton.setAttribute("id", "backToTop");
    backToTopButton.style = "position: fixed; bottom: 3rem; right: 3rem; border-radius: 50%; height: 5rem; width: 5rem; border: solid 3px black;"
    backToTopDiv.append(backToTopButton);

    body.append(backToTopDiv);

    backToTopButton.addEventListener("click" , () => {
        clickBackToTopButton(body);
    })
}

function clickBackToTopButton( body ){
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behaviour: "smooth"
        })
    }, 200)
}
    

