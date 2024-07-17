

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


// Script for tabs - it underlines the page navigation and tells user on which page he is active now.
//(material design component)
    document.addEventListener('DOMContentLoaded', () => {
        const currentPath = window.location.hash;
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });
    });