
var slideIndex = 1;
showSlides(slideIndex);


function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

const minusSlideBtn = document.querySelector('.prev')
const plusSlideBtn = document.querySelector('.next')

minusSlideBtn.addEventListener('click', function(){
    minusSlide();
});

plusSlideBtn.addEventListener('click', function(){
    plusSlide();
});

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}