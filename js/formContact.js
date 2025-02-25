
function checkForm(event){
    event.preventDefault();
    var errorMessage  = "";
    errorMessage += nameError() + emailError() + consentError();

    if(errorMessage){
        alert(errorMessage);
    }else{
        fetchFormulario();
    }
}

function nameError(){
    var errorMessage = "";
    const nameInput = document.getElementById("name");

    nameInput.addEventListener("click", () =>{
        nameInput.classList.remove("error");
    })

    nameInput.classList.remove("error");
    if(nameInput.value.length < 2 || nameInput.value.length > 100 ){
        errorMessage += "Nombre incorrecto. El nombre debe tener entre 2 y 100 caracteres.\n\n";
        nameInput.classList.add("error");
    }
    
    if (validateName(nameInput.value)) {

        errorMessage += "Nombre incorrecto. Por favor introduzca sólo letras y espacios.\n\n";
        nameInput.classList.add("error");
    }



    return errorMessage;

}

function emailError(){
    var errorMessage = "";
    const emailInput = document.getElementById("email");

    emailInput.addEventListener("click", () =>{
        emailInput.classList.remove("error");
    })


    //EMAIL REAL
    if(!validateEmail(emailInput.value)){
        errorMessage += "Email incorrecto. Por favor introduzca un email existente.\n\n";
        emailInput.classList.add("error");

    }else{
        emailInput.classList.remove("error");
    }

    return errorMessage;

}

function consentError(){
    var errorMessage = "";
    const consentInput = document.getElementById("consent");

    consentInput.addEventListener("click", () =>{
        consentInput.classList.remove("error");
    })


    if(consentInput.checked){
        consentInput.classList.remove("error");
    }else{
        errorMessage += "Consentimiento no aceptado. Por favor chequee la casilla de consentimiento.";
        consentInput.classList.add("error");
    }

    return errorMessage;

}

function validateEmail(email){
    const regExEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (email.match(regExEmail))
}

function validateName(name){
    const regExName = /[^a-zA-Z\s]+/;

    return(name.match(regExName))
        
}

function fetchFormulario(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const consent = document.getElementById("consent").value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            email: email,
            consent: consent,
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