let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
let slideNumber = document.getElementById("numbertext");
let slideIndex = 1;
showSlide();
updateDots();

function plusSlides(n){
    slideIndex += n;
    if(slideIndex > slides.length){slideIndex = 1}
    if(slideIndex < 1){slideIndex = slides.length}
    showSlide();
    updateDots();
}

function showSlide(){
    for(let i = 0; i<slides.length; i++){
        slides[i].style.display ="none";
    }
    slides[slideIndex -1].style.display = "block";
    slideNumber.textContent = slideIndex;
}
function updateDots(){
    for(let i = 0; i<dots.length; i++){
        dots[i].classList.remove("active");
    }
    dots[slideIndex -1].classList.add("active");
}