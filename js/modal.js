function modalShow(canShow){

    const deactivated = localStorage.getItem('deactivated');
    const modalCloseButton = document.getElementById("modal-close-button");
    const modalSubscribeButton = document.getElementById("modal-subscribe-button");
    const modal = document.getElementById("modal-subscribe");
    

    //SHOW MODAL
    if(!deactivated && canShow){
        const modal = document.getElementById("modal-subscribe");
        modal.style.display="flex";
    }

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
    modalSubscribeButton.addEventListener('click', () =>{
        const messageError = emailModalError();
        if(messageError){
            alert(messageError);
        }else{
            fetchModal();
        }
        messageError = "";
    })



}

function closeModal(){
    const modal = document.getElementById("modal-subscribe");
    modal.style.display = "none";
    localStorage.setItem("deactivated", "true")
}

function scrolledPastAQuarter(height){
    const scrollpercentage = window.scrollY / height * 100;
    
    return scrollpercentage >= 25;
}

function fetchModal(){
    const email = document.getElementById("emailModal").value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            email: email,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            alert("Formulario enviado")
            closeModal();
        })
}

function emailModalError(){
    var errorMessage = "";
    const emailInput = document.getElementById("emailModal");

    emailInput.addEventListener("click", () =>{
        emailInput.classList.remove("error");
    })


    //EMAIL REAL
    if(!validateEmail(emailInput.value)){
        errorMessage += "Email incorrecto. Por favor introduzca un email existente.";
        emailInput.classList.add("error");

    }else{
        emailInput.classList.remove("error");
    }

    return errorMessage;

}