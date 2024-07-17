document.addEventListener('DOMContentLoaded', () => {
    const contentHeaders = document.querySelectorAll('.contentHeader');

    contentHeaders.forEach(contentHead => {
        contentHead.addEventListener('click', () => {
            const contentParas = contentHead.nextElementSibling;
            const headerArrow = contentHead.querySelector('.arrow');
            if (contentParas.style.display === "none")
            {
                contentParas.style.display = "block";
                headerArrow.classList.add('arrow-down');
            }
            else{
                contentParas.style.display = "none";
                headerArrow.classList.remove('arrow-down');
            }
        });
    });
});

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