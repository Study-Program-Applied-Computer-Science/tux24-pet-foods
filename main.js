

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slider img');
    const totalSlides = slides.length;
    let slideIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(-${index * 100}%)`;
        });
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlide(slideIndex);
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds
});