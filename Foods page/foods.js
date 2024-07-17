// Script for tabs - it underlines the page navigation and tells user on which page he is active now.
document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.hash;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});