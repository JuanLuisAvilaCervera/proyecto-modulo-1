


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
    scrollable.style.width = 0;
    
    body.prepend(scrollable);
}

function adjustVerticalScroll( height){

    const scrollpercentage = window.scrollY / height * 100;
    scrollable.style.width = scrollpercentage+ "%"
    if(window.scrollY === 0){
        scrollable.style.display = "none";
    }else{
        scrollable.style.display = "block"
    }
}

function generateBackToTopButton(body){
    const backToTopButton = document.getElementById('backToTop');

    backToTopButton.addEventListener("click" , () => {
        clickBackToTopButton();
    })
}

function clickBackToTopButton(){
    setTimeout( () =>{
        window.scrollTo({top:0, behavior: "smooth"})
    }, 200);
   
}
    

