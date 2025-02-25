window.onload =  async () => {
    const html = document.querySelector('html');
    const body = document.querySelector('body');
    const height = body.offsetHeight - window.innerHeight;
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

    const modalCloseButton = document.getElementById("modal-close-button");
    const modalSubscribeButton = document.getElementById("modal-subscribe-button");
    const modal = document.getElementById("modal-subscribe");
    const modalEmailInput = document.getElementById("emailModal");
    const errorParagraph = document.getElementById('errorParagraphModal')

    

    setTimeout(() =>{
        modalShow(true);
    }, 5000)


    //CLOSE MODAL
    modalCloseButton.addEventListener("click", () =>{
        closeModal();
    })

    window.addEventListener("click", (event) =>{
        if(event.target === modal){
            closeModal();
        }
    })

    window.addEventListener("keydown", (event) =>{
        if(event.key == "Escape"){
            closeModal();
        };
    })

    //SUBSCRIBE
    modalSubscribeButton.addEventListener('click', (event) =>{

        event.preventDefault();
        event.stopPropagation();

        console.log( "click" )

        let messageError = emailModalError();
        if(messageError){
            errorParagraph.style.display = "block";
        }else{
            fetchModal();
            // messageError = true;
            closeModal();
        }
    }, {once: true})

    modalEmailInput.addEventListener("click", () =>{
        errorParagraph.style.display = "none";
    })
};

 