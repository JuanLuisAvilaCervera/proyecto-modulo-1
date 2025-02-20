function modalShow(canShow){

    const deactivated = localStorage.getItem('deactivated');
    const modalCloseButton = document.getElementById("modal-close-button");
    


    if(!deactivated && canShow){
        const modal = document.getElementById("modal-subscribe");
        modal.style.display="flex";
    }

    modalCloseButton.addEventListener("click", () =>{
        closeModal();
    })

    window.addEventListener("click", (event) =>{
        console.log(event);
        console.log(event.target)
        if(event.target === modal){
            closeModal();
        }
    })

    window.addEventListener("keydown", (event) =>{
        if(event.key == "Escape"){
            closeModal();
        };
    })



}

function closeModal(){
    const modal = document.getElementById("modal-subscribe");
    modal.style.display = "none";
    // localStorage.setItem("deactivated", "true")
}

function scrolledPastAQuarter(height){
    const scrollpercentage = window.scrollY / height * 100;
    
    return scrollpercentage >= 25;
}