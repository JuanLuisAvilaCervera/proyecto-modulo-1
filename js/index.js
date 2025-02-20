window.onload =  async () => {
    const html = document.querySelector('html');
    const body = document.querySelector('body');
    const height = Math.max( body.scrollHeight, body.offsetHeight, 
                        html.clientHeight, html.scrollHeight, html.offsetHeight );
    const submitButton = document.getElementById("send");
    const burguer = document.getElementById("nav-burguer");
    const priceSelector = document.getElementById("price-selector");

    //TOGGLE NAV
    burguer.addEventListener('click', (e) => {
        toggleNav();
    })

    
    //PERCENTAGE SCROLL
    generateVerticalScroll( body);
    window.addEventListener('scroll', () =>{
        adjustVerticalScroll( height);
    });

    //BACK TO TOP
    generateBackToTopButton(body);

    //CONTACT FORM
    submitButton.addEventListener("click", checkForm)

    //COIN
    priceSelector.addEventListener("change", () =>{
        changeCoin(priceSelector.value)
    })

};

 