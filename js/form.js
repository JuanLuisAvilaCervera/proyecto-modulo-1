window.onload = () => {

    const submitButton = document.getElementById("send");


    submitButton.addEventListener("click", checkForm)
    // submitButton.addEventListener("submit", checkForm);


}

function checkForm(event){
    event.preventDefault();
    const nameErrorResult = nameError();
    const emailErrorResult = emailError();
    const consentErrorResult = consentError();

    if(nameErrorResult || emailErrorResult || consentErrorResult){
        alert("Error");
    }else{
        alert("Formulario enviado");
    }

}

function nameError(){
    var error = true;
    const nameInput = document.getElementById("name");



    if(nameInput.value.length < 2 || nameInput.value.length > 100){
        error = true;
        nameInput.classList.add("error");
    }else{
        error = false;
        nameInput.classList.remove("error");
    }

    return error;

}

function emailError(){
    var error = true;
    const emailInput = document.getElementById("email");

    //EMAIL REAL
    if(emailInput.value.length < 2 || emailInput.value.length > 100){
        error = true;
        emailInput.classList.add("error");

    }else{
        error = false;
        emailInput.classList.remove("error");
    }

    return error;

}

function consentError(){
    var error = true;
    const consentInput = document.getElementById("consent");
    consentInput.addEventListener("click", () =>{
        consentInput.classList.remove("error");
    })

    if(consentInput.checked){
        
        error = false;
        consentInput.classList.remove("error");
    }else{
        error = true;
        consentInput.classList.add("error");
    }

    return error;

}