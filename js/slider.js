class Slider{
    constructor(id){
        this.id = id;
        this.slideshow = document.getElementById(id);
        this.leftButton = document.getElementById("left-button")
        this.rightButton = document.getElementById("right-button");

        this.slides = document.getElementsByClassName("image");

        this.markers = document.getElementsByClassName("marker");
        this.timeout = setTimeout(() =>{
            this.moveSlides(this.findActive()+1);
            this.timeout;
        }, 5000);

        for(let i = 0; i < this.markers.length ; i++){
            this.markers[i].addEventListener("click", () =>{
                
                this.moveSlides(i);
            })
        }

        this.leftButton.addEventListener("click", () =>{
            
            //If someone moves the slides manually, it resets the countdown
            this.restartTimeout();
            this.moveSlides(this.findActive()-1);
        })

        this.rightButton.addEventListener("click", () =>{
            //If someone moves the slides manually, it resets the countdown
            this.restartTimeout();
            this.moveSlides(this.findActive()+1);
        })


    }

    // moveLeft(current , next){

    // }

    // moveRight(current , next){

    // }

    changeMarkers(current,next){
        this.markers[current].classList.remove('active');
        this.markers[next].classList.add('active')
    }

    moveTimeout(){
        this.timeout = setTimeout(() =>{
            this.moveSlides(this.findActive()+1);
            // this.timeout;
        }, 5000);
    }

    restartTimeout(){
        clearTimeout(this.timeout);
        this.moveTimeout();
    }

    moveSlides(nextID){
        const currentID = this.findActive();

        if(nextID >= this.slides.length){
            nextID = 0;
        }else if(nextID < 0){
            nextID = this.slides.length -1;
        }

        this.changeActive(currentID, nextID);

        // if(nextID > currentID){
        //     this.moveLeft(currentID , nextID);
        // }else{
        //     this.moveRight(currentID , nextID);
        // }

        this.restartTimeout();

    }

    changeActive(current, next){
        this.slides[current].classList.remove('active');
        this.slides[next].classList.add('active');

        this.changeMarkers(current,next);
    }

    findActive(){
        for(let i = 0 ; i < this.slides.length ; i++){
            if(this.slides[i].classList.contains('active')){
                return i;
            }
        }
        return 0;
    }

}