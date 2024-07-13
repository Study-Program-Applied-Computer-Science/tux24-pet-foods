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