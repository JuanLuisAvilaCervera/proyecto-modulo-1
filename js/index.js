window.onload =  async () => {
    const html = document.querySelector('html');
    const body = document.querySelector('body');
    const height = Math.max( body.scrollHeight, body.offsetHeight, 
                        html.clientHeight, html.scrollHeight, html.offsetHeight );
    const submitButton = document.getElementById("send");
    const burguer = document.getElementById("nav-burguer");
    const priceSelector = document.getElementById("price-selector");

    const slider = new Slider("slider");


    //TOGGLE NAV
    burguer.addEventListener('click', (e) => {
        toggleNav();
    })

    
    //PERCENTAGE SCROLL
    generateVerticalScroll( body);
    window.addEventListener('scroll', () =>{
        adjustVerticalScroll( height);

        //MODAL SCROLL
        modalShow(scrolledPastAQuarter(height));
    });

    //BACK TO TOP
    generateBackToTopButton(body);

    //CONTACT FORM
    submitButton.addEventListener("click", checkForm)

    //COIN
    fetchCoinChange(priceSelector.value)
    priceSelector.addEventListener("change", () =>{
        fetchCoinChange(priceSelector.value)
    })

    //MODAL

    setTimeout(() =>{
        modalShow(true);
    }, 5000)
};

 