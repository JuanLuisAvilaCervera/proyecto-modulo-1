function modalShow(canShow){

    const deactivated = localStorage.getItem('deactivated');

    //SHOW MODAL
    if(!deactivated && canShow){
        const modal = document.getElementById("modal-subscribe");
        modal.style.display="flex";
    }

}

function closeModal(message){
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
    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         email: email,
    //     }),
    //     headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //     },
    // })
    //     .then((response) => response.json())
    //     .then((json) => {
    //         console.log(json)
    //     })
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
        })
}

function emailModalError(){
    var errorMessage = false;
    const emailInput = document.getElementById("emailModal");

    emailInput.addEventListener("click", () =>{
        emailInput.classList.remove("error");
    })


    //EMAIL REAL
    if(!validateEmail(emailInput.value)){
        errorMessage = true;
        emailInput.classList.add("error");

    }else{
        emailInput.classList.remove("error");
    }

    return errorMessage;

}